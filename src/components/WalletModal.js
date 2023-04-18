import {cloneElement, forwardRef, memo, useCallback, useEffect, useState} from "react";
import PropTypes from "prop-types";
import {Backdrop, Box, Button, IconButton, Modal} from "@mui/material";
import {useSpring, animated} from "@react-spring/web";
import {fonts, pixToRem} from "../const/uivar";
import {ChevronLeft, Close} from "@mui/icons-material";
import WalletExplainationHome from '../assets/images/icons/explaination_home.png'
import WalletExplainationNewWay from '../assets/images/icons/explaination_newway.png'
import CreateWallet from '../assets/images/icons/create.png'
import ScanWallet from '../assets/images/icons/scan.png'
import {useEagerConnect, useInactiveListener, wallets} from "../const/consts";
import {useWeb3React, UnsupportedChainIdError} from "@web3-react/core";
import {NoEthereumProviderError, UserRejectedRequestError as UserRejectedRequestErrorInjected} from "@web3-react/injected-connector";
import {UserRejectedRequestError as UserRejectedRequestErrorWalletConnect} from "@web3-react/walletconnect-connector";
import {QRCode} from "react-qrcode-logo";
import {connect} from "react-redux";
import { setWalletAddress } from "../store/actions/auth";

const getErrorMessage = (err) => {
    if (err instanceof NoEthereumProviderError) {
        return 'No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.'
    } else if (err instanceof UnsupportedChainIdError) {
        return "You're connected to an unsupported network."
    } else if (err instanceof UserRejectedRequestErrorInjected || err instanceof UserRejectedRequestErrorWalletConnect) {
        return 'Please authorize this website to access your Ethereum account.'
    } else {
        console.error(err);
        return 'An unknown error occurred. Check the console for more details.'
    }
}

const Fade = forwardRef((props, ref) => {
    const {
        children,
        in: open,
        onClick,
        onEnter,
        onExited,
        ownerState,
        ...other
    } = props;
    const style = useSpring({
        from: {opacity: 0},
        to: {opacity: open ? 1 : 0},
        onStart: () => {
            if (open && onEnter) {
                onEnter(null, true)
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited(null, true)
            }
        }
    });
    return (
        <animated.div ref={ref} style={style} {...other}>
            {cloneElement(children, {onClick})}
        </animated.div>
    );
});

Fade.propTypes = {
    children: PropTypes.element.isRequired,
    in: PropTypes.bool,
    onClick: PropTypes.any,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
    ownerState: PropTypes.any
};

const WalletModal = memo((props) => {
    const {connector, library, chainId, account, activate, deactivate, active, error} = useWeb3React();
    const [recentWallets, setRecentWallets] = useState(['metamask']);
    const [popularWallets, setPopularWallets] = useState(['rainbow', 'coinbase', 'walletconnect', 'phantom']);
    const [actionStep, setActionStep] = useState(-1);
    // step0: AboutWallet
    // step1: Scan with WalletName
    // step2: Install WalletName app
    // step3: Get started with WalletName
    const [selectedWallet, setSelectedWallet] = useState('');
    const [canBack, setCanBack] = useState(false);
    const [activatingConnector, setActivatingConnector] = useState();

    useEffect(() => {
        if (activatingConnector && activatingConnector === connector) {
            setActivatingConnector(undefined)
        }
    }, [activatingConnector, connector])

    const triedEager = useEagerConnect();
    useInactiveListener(!triedEager || !!activatingConnector);

    const onSelectWallet = useCallback(async(wallet) => {
        if (wallet === 'metamask') {
            await onConnectMetamask();
            return;
        }
        setSelectedWallet(wallet);
        if (wallets[wallet].stepCount > 0) setActionStep(1);
    }, []);
    const onStepBack = useCallback(() => {
        if (actionStep < -1) return;
        if (actionStep === 2 && canBack) {
            setActionStep(0);
            return;
        }
        if (actionStep > 0) setActionStep(actionStep - 1);
    }, [actionStep, canBack]);
    const onStepForward = useCallback(() => {
        if (actionStep < 3) {
            setActionStep(actionStep + 1);
        }
        else setActionStep(1);
    }, [actionStep]);
    const onLearnMore = () => {
    }
    const onGetWallet = useCallback((wallet) => {
        if (wallet === 'metamask') return;
        setSelectedWallet(wallet);
        setActionStep(2);
        setCanBack(true);
    });
    const onOpenWallet = () => {};
    const onConnectMetamask = useCallback(async () => {
        console.log('connect metamask');
        setActivatingConnector(wallets['metamask'].connector);
        await activate(wallets['metamask'].connector);
        onCloseModal();
    }, []);
    const onCloseModal = useCallback(() => {
        props.closeModal();
        setSelectedWallet('');
        setActionStep(-1);
        setCanBack(false);
    }, [props]);
    return (
        <Modal
            aria-labelledby={"spring-modal-title"}
            aria-describedby={'spring-modal-description'}
            open={props.visible}
            onClose={onCloseModal}
            closeAfterTransition
            slots={{backdrop: Backdrop}}
            sx={{
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Fade in={props.visible}>
                <Box component={'div'} sx={WalletModalStyles.panel}>
                    <IconButton
                        children={<Close sx={WalletModalStyles.closeIcon} />}
                        sx={WalletModalStyles.closeBtn}
                        onClick={onCloseModal}
                    />
                    <Box
                        component={'div'}
                        sx={WalletModalStyles.walletList}
                    >
                        <Box
                            component={'span'}
                            sx={WalletModalStyles.listTitle}
                        >
                            Connect a Wallet
                        </Box>
                        <Box
                            component={'div'}
                            sx={WalletModalStyles.recentWallet}
                        >
                            <Box component={'div'} sx={WalletModalStyles.category}>Recent</Box>
                            {
                                recentWallets.map((wallet, index) => {
                                    return (
                                        <Button
                                            key={index}
                                            startIcon={<img src={wallets[wallet].icon} style={WalletModalStyles.walletIcon} alt='metamask' />}
                                            sx={WalletModalStyles.walletItem}
                                            onClick={() => onSelectWallet(wallet)}
                                        >{wallets[wallet].name}</Button>
                                    )
                                })
                            }
                        </Box>
                        <Box
                            component={'div'}
                            sx={WalletModalStyles.popularWallet}
                        >
                            <Box
                                component={'div'}
                                sx={WalletModalStyles.category}
                            >Popular</Box>
                            {
                                popularWallets.map((wallet, index) => {
                                    return (
                                        <Button
                                            key={index}
                                            startIcon={<img src={wallets[wallet].icon} style={WalletModalStyles.walletIcon} alt='metamask' />}
                                            sx={[WalletModalStyles.walletItem, {backgroundColor: selectedWallet === wallet ? '#5899ff' : null}]}
                                            onClick={() => onSelectWallet(wallet)}
                                        >{wallets[wallet].name}</Button>
                                    )
                                })
                            }
                        </Box>
                    </Box>
                    {
                        actionStep === -1 ?
                            <AboutWallet
                                onStepForward={onStepForward}
                                onLearnMore={onLearnMore}
                            />
                            :
                            actionStep === 0 ?
                                <WalletList
                                    onGetWallet={onGetWallet}
                                    onBack={onStepBack}
                                />
                                :
                                actionStep === 1 ?
                                    <ScanWithWallet
                                        wallet={wallets[selectedWallet]}
                                        onStepForward={onStepForward}
                                        onOpenWallet={onOpenWallet}
                                    />
                                    :
                                    actionStep === 2 && wallets[selectedWallet].stepCount > 1 ?
                                        <InstallWallet
                                            wallet={wallets[selectedWallet]}
                                            onBack={onStepBack}
                                            onStepForward={onStepForward}
                                        />
                                        :
                                        actionStep === 3 && wallets[selectedWallet].stepCount > 1 ?
                                            <StartedWallet
                                                wallet={wallets[selectedWallet]}
                                                onBack={onStepBack}
                                                onStepForward={onStepForward}
                                                onLearnMore={onLearnMore}
                                            />
                                            :
                                            null
                    }
                </Box>
            </Fade>
        </Modal>
    )
})

export default connect(
    state => ({
        authReducer: state.authReducer
    }),
    dispatch => ({
        setWalletAddress: (address) => dispatch(setWalletAddress(address)),
    })
)(WalletModal);

const WalletModalStyles = {
    panel: {
        transform: 'translate(-50%, 50%)',
        width: pixToRem(800),
        height: '57%',
        position: 'absolute',
        left: '50%',
        top: '-7%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#111822',
        borderRadius: 7,
        boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.25)',
        border: '1px solid #282e38'
    },
    closeBtn: {
        width: pixToRem(30),
        height: pixToRem(30),
        borderRadius: pixToRem(20),
        position: 'absolute',
        top: pixToRem(15),
        right: pixToRem(15),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid #2f353e',
        backgroundColor: '#2f353e',
        boxShadow: '0 4px rgba(11, 20, 30, 0.5)'
    },
    closeIcon: {
        color: '#a0a8bb',
        width: pixToRem(20)
    },
    walletList: {
        width: '40%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        borderRight: '1px solid #282e38'
    },
    walletAction: {
        width: '60%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    aboutWallet: {
        width: '60%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    listTitle: {
        fontFamily: fonts.roboto,
        fontWeight: '700',
        fontSize: pixToRem(20),
        fontStyle: 'normal',
        color: 'white',
        marginLeft: pixToRem(30),
        marginTop: pixToRem(30)
    },
    recentWallet: {
        width: '85%',
        marginTop: pixToRem(30),
        marginLeft: pixToRem(30),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    popularWallet: {
        width: '85%',
        marginTop: pixToRem(30),
        marginLeft: pixToRem(30),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    walletItem: {
        fontFamily: fonts.roboto,
        fontWeight: '700',
        fontStyle: 'normal',
        fontSize: pixToRem(16),
        color: 'white',
        lineHeight: pixToRem(30),
        textTransform: 'capitalize',
        borderRadius: pixToRem(10),
        marginTop: pixToRem(5),
        paddingLeft: pixToRem(10),
        marginLeft: pixToRem(-5),
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    category: {
        fontFamily: fonts.roboto,
        fontWeight: '700',
        fontSize: pixToRem(14),
        lineHeight: pixToRem(30),
        fontStyle: 'normal',
        color: '#a6a9ad'
    },
    walletIcon: {
        width: pixToRem(30),
        height: pixToRem(30),
        borderRadius: pixToRem(5),
        marginRight: pixToRem(7)
    },
    aboutWalletTitle: {
        marginTop: pixToRem(50),
        fontFamily: fonts.roboto,
        fontWeight: '700',
        fontSize: pixToRem(20),
        fontStyle: 'normal',
        color: 'white',
    },
    explaination: {
        marginTop: pixToRem(60),
        marginLeft: pixToRem(60),
        marginRight: pixToRem(90),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    explainationItem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: pixToRem(30)
    },
    explainationIcon: {
        width: pixToRem(60),
        height: pixToRem(60)
    },
    explainationCommentPanel: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginLeft: pixToRem(15)
    },
    explainationCommentTitle: {
        fontFamily: fonts.roboto,
        fontWeight: '700',
        fontSize: pixToRem(16),
        fontStyle: 'normal',
        color: 'white',
        lineHeight: pixToRem(35)
    },
    explainationComment: {
        fontFamily: fonts.roboto,
        fontWeight: '700',
        fontSize: pixToRem(14),
        fontStyle: 'normal',
        color: '#a6a9ad',
        lineHeight: pixToRem(20),
    },
    getWalletBtn: {
        marginTop: pixToRem(30),
        paddingLeft: pixToRem(15),
        paddingRight: pixToRem(15),
        height: pixToRem(32),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: pixToRem(40),
        backgroundColor: '#5899ff',
        textTransform: 'none',

        fontFamily: fonts.roboto,
        fontWeight: '700',
        fontSize: pixToRem(15),
        fontStyle: 'normal',
        color: 'white',
        lineHeight: pixToRem(35)
    },
    learnBtn: {
        marginTop: pixToRem(10),
        fontFamily: fonts.roboto,
        fontWeight: '700',
        fontSize: pixToRem(15),
        fontStyle: 'normal',
        color: '#508be9',
        lineHeight: pixToRem(20),
        textTransform: 'none'
    },

    scanWallet: {
        width: '60%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    scanWalletTitle: {
        fontFamily: fonts.roboto,
        fontWeight: '700',
        fontSize: pixToRem(20),
        fontStyle: 'normal',
        color: 'white',
        lineHeight: pixToRem(30),
        marginTop: pixToRem(20)
    },
    walletQRPanel: {
        width: '80%',
        height: '68%',
        borderRadius: pixToRem(10),
        backgroundColor: 'white',
        padding: '20px 20px 20px 20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    scanFooter: {
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: pixToRem(20)
    },
    scanQuestion: {
        fontFamily: fonts.roboto,
        fontWeight: '700',
        fontSize: pixToRem(14),
        fontStyle: 'normal',
        color: '#a6a9ad',
        lineHeight: pixToRem(20),
    },
    scanAction: {
        borderRadius: pixToRem(20),
        paddingLeft: pixToRem(5),
        paddingRight: pixToRem(5),
        backgroundColor: '#262a34',

        fontFamily: fonts.roboto,
        fontWeight: '700',
        fontSize: pixToRem(16),
        fontStyle: 'normal',
        color: '#5899ff',
        lineHeight: pixToRem(20)
    },

    installWallet: {
        width: '60%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    installWalletCommentPanel: {
        width: '100%',
        marginTop: pixToRem(20),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    installWalletTitle: {
        fontFamily: fonts.roboto,
        fontWeight: '700',
        fontSize: pixToRem(20),
        fontStyle: 'normal',
        color: 'white',
        lineHeight: pixToRem(30),
    },
    installWalletComment: {
        width: '40%',
        fontFamily: fonts.roboto,
        fontWeight: '700',
        fontSize: pixToRem(14),
        fontStyle: 'normal',
        color: '#a6a9ad',
        lineHeight: pixToRem(20),
        textAlign: 'center',
        marginTop: pixToRem(20)
    },
    installQRPanel: {
        width: '55%',
        height: '45%',
        borderRadius: pixToRem(15),
        backgroundColor: 'white',
        padding: '20px 20px 20px 20px',
        marginTop: pixToRem(-30),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    installAction: {
        marginBottom: pixToRem(30),
        paddingLeft: pixToRem(15),
        paddingRight: pixToRem(15),
        height: pixToRem(32),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: pixToRem(40),
        backgroundColor: '#5899ff',
        textTransform: 'none',

        fontFamily: fonts.roboto,
        fontWeight: '700',
        fontSize: pixToRem(15),
        fontStyle: 'normal',
        color: 'white',
        lineHeight: pixToRem(35)
    },
    installWalletBackBtn: {
        width: pixToRem(50),
        height: pixToRem(40),
        borderRadius: pixToRem(20),
        position: 'absolute',
        top: pixToRem(15),
        left: '42%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backIcon: {
        color: '#508be9',
    },

    startedWallet: {
        width: '60%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    startedWalletTitle: {
        fontFamily: fonts.roboto,
        fontWeight: '700',
        fontSize: pixToRem(20),
        fontStyle: 'normal',
        color: 'white',
        lineHeight: pixToRem(30),
        marginTop: pixToRem(20)
    },
    startedWalletBackBtn: {
        width: pixToRem(50),
        height: pixToRem(40),
        borderRadius: pixToRem(20),
        position: 'absolute',
        top: pixToRem(15),
        left: '42%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    startedWalletCommentPanel: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '66%',
        marginTop: pixToRem(30)
    },
    startedWalletCommentItem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: pixToRem(20)
    },
    startedWalletIcon: {
        width: pixToRem(50),
        height: pixToRem(50),
        borderRadius: pixToRem(10)
    },
    startedWalletCommentGroup: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginLeft: pixToRem(15)
    },
    startedWalletCommentTitle: {
        fontFamily: fonts.roboto,
        fontWeight: '700',
        fontSize: pixToRem(16),
        fontStyle: 'normal',
        color: 'white',
        lineHeight: pixToRem(35)
    },
    startedWalletComment: {
        fontFamily: fonts.roboto,
        fontWeight: '700',
        fontSize: pixToRem(14),
        fontStyle: 'normal',
        color: '#a6a9ad',
        lineHeight: pixToRem(20),
    },
    startedWalletActions: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: pixToRem(30)
    },

    walletListPanel: {
        width: '60%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    walletListTitle: {
        fontFamily: fonts.roboto,
        fontWeight: '700',
        fontSize: pixToRem(20),
        fontStyle: 'normal',
        color: 'white',
        lineHeight: pixToRem(30),
        marginTop: pixToRem(20)
    },
    walletListGroup: {
        width: '90%',
        maxHeight: '70%',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: pixToRem(30)
    },
    walletListItem: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: pixToRem(30)
    },
    walletListItemLeft: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    walletListItemIcon: {
        width: pixToRem(50),
        height: pixToRem(50),
        borderRadius: pixToRem(10)
    },
    walletListItemCommentGroup: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginLeft: pixToRem(20)
    },
    walletListItemName: {
        fontFamily: fonts.roboto,
        fontWeight: '700',
        fontSize: pixToRem(16),
        fontStyle: 'normal',
        color: 'white',
        lineHeight: pixToRem(35)
    },
    walletListItemComment: {
        fontFamily: fonts.roboto,
        fontWeight: '700',
        fontSize: pixToRem(14),
        fontStyle: 'normal',
        color: '#a6a9ad',
        lineHeight: pixToRem(20),
    },
    walletListItemAction: {
        borderRadius: pixToRem(20),
        paddingLeft: pixToRem(5),
        paddingRight: pixToRem(5),
        backgroundColor: '#262a34',

        fontFamily: fonts.roboto,
        fontWeight: '700',
        fontSize: pixToRem(16),
        fontStyle: 'normal',
        color: '#5899ff',
        lineHeight: pixToRem(20)
    },
    walletListFooter: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: pixToRem(30)
    },
    walletListFooterTitle: {
        fontFamily: fonts.roboto,
        fontWeight: '700',
        fontSize: pixToRem(14),
        fontStyle: 'normal',
        color: 'white',
        lineHeight: pixToRem(35)
    },
    walletListFooterComment: {
        width: '60%',
        fontFamily: fonts.roboto,
        fontWeight: '700',
        fontSize: pixToRem(14),
        fontStyle: 'normal',
        color: '#a6a9ad',
        lineHeight: pixToRem(20),
        textAlign: 'center',
    }
}

const AboutWallet = memo(props => {
    return (
        <Box
            sx={WalletModalStyles.aboutWallet}
        >
            <Box
                component={'span'}
                sx={WalletModalStyles.aboutWalletTitle}
            >
                What is a Wallet?
            </Box>
            <Box
                component={'div'}
                sx={WalletModalStyles.explaination}
            >
                <Box
                    component={'div'}
                    sx={WalletModalStyles.explainationItem}
                >
                    <Box component={'img'} src={WalletExplainationHome} sx={WalletModalStyles.explainationIcon} />
                    <Box component={'div'} sx={WalletModalStyles.explainationCommentPanel}>
                        <Box
                            component={'span'}
                            sx={WalletModalStyles.explainationCommentTitle}
                        >
                            A Home for your Digital Assets
                        </Box>
                        <Box
                            component={'span'}
                            sx={WalletModalStyles.explainationComment}
                        >
                            Wallets are used to send, receive, store, and display digital assets like Ethereum and NFTs.
                        </Box>
                    </Box>
                </Box>
                <Box
                    component={'div'}
                    sx={WalletModalStyles.explainationItem}
                >
                    <Box component={'img'} src={WalletExplainationNewWay} sx={WalletModalStyles.explainationIcon} />
                    <Box component={'div'} sx={WalletModalStyles.explainationCommentPanel}>
                        <Box
                            component={'span'}
                            sx={WalletModalStyles.explainationCommentTitle}
                        >
                            A New Way to Log In
                        </Box>
                        <Box
                            component={'span'}
                            sx={WalletModalStyles.explainationComment}
                        >
                            Instead of creating new accounts and passwords on every website, just connect your wallet.
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Button
                sx={WalletModalStyles.getWalletBtn}
                onClick={props.onStepForward}
            >
                Get a Wallet
            </Button>
            <Button
                sx={WalletModalStyles.learnBtn}
                onClick={props.onLearnMore}
            >
                Learn More
            </Button>
        </Box>
    )
});

const ScanWithWallet = memo(props => {
    return (
        <Box
            component={'div'}
            sx={WalletModalStyles.scanWallet}
        >
            <Box
                sx={WalletModalStyles.scanWalletTitle}
            >
                {`Scan with ${props.wallet.name}`}
            </Box>
            <Box
                component={'div'}
                sx={WalletModalStyles.walletQRPanel}
            >
                <QRCode
                    size={368}
                    value={props.wallet.url}
                    qrStyle={'dots'}
                    eyeRadius={[
                        {
                            outer: 5,
                            inner: 0
                        },
                        {
                            outer: 5,
                            inner: 0
                        },
                        {
                            outer: 5,
                            inner: 0
                        }
                    ]}
                    logoImage={props.wallet.icon}
                    logoWidth={73.6}
                    logoHeight={73.6}
                    // logoPaddingStyle={'circle'}
                    logoPadding={5}
                />
            </Box>
            <Box
                component={'div'}
                sx={WalletModalStyles.scanFooter}
            >
                <Box
                    component={'span'}
                    sx={WalletModalStyles.scanQuestion}
                >
                    {`Don't have the ${props.wallet.name} app?`}
                </Box>
                {
                    props.wallet.stepCount > 1 ?
                        <Button
                            sx={WalletModalStyles.scanAction}
                            onClick={props.onStepForward}
                        >Get</Button>
                        :
                        <Button
                            sx={WalletModalStyles.scanAction}
                            onClick={props.onOpenWallet}
                        >Open</Button>
                }
            </Box>
        </Box>
    )
});

const InstallWallet = memo(props => {
    return (
        <Box
            component={'div'}
            sx={WalletModalStyles.installWallet}
        >
            <IconButton
                children={<ChevronLeft fontSize={'large'} sx={WalletModalStyles.backIcon} />}
                sx={WalletModalStyles.installWalletBackBtn}
                size={'large'}
                onClick={props.onBack}
            />
            <Box
                component={'div'}
                sx={WalletModalStyles.installWalletCommentPanel}
            >
                <Box
                    component={'span'}
                    sx={WalletModalStyles.installWalletTitle}
                >
                    {`Install ${props.wallet.name}`}
                </Box>
                <Box
                    component={'div'}
                    sx={WalletModalStyles.installWalletComment}
                >
                    Scan with your phone to download on iOS or Android
                </Box>
            </Box>
            <Box
                component={'div'}
                sx={WalletModalStyles.installQRPanel}
            >
                <QRCode
                    size={250}
                    value={props.wallet.url}
                    qrStyle={'dots'}
                    eyeRadius={[
                        {
                            outer: 5,
                            inner: 0
                        },
                        {
                            outer: 5,
                            inner: 0
                        },
                        {
                            outer: 5,
                            inner: 0
                        }
                    ]}
                />
            </Box>
            <Button
                sx={WalletModalStyles.installAction}
                onClick={props.onStepForward}
            >Continue</Button>
        </Box>
    )
});

const StartedWallet = memo(props => {
    return (
        <Box
            component={'div'}
            sx={WalletModalStyles.startedWallet}
        >
            <IconButton
                children={<ChevronLeft fontSize={'large'} sx={WalletModalStyles.backIcon} />}
                sx={WalletModalStyles.startedWalletBackBtn}
                size={'large'}
                onClick={props.onBack}
            />
            <Box
                component={'span'}
                sx={WalletModalStyles.startedWalletTitle}
            >
                {`Get started with ${props.wallet.name}`}
            </Box>
            <Box
                component={'div'}
                sx={WalletModalStyles.startedWalletCommentPanel}
            >
                <Box
                    component={'div'}
                    sx={WalletModalStyles.startedWalletCommentItem}
                >
                    <Box
                        component={'img'}
                        src={props.wallet.icon}
                        sx={WalletModalStyles.startedWalletIcon}
                    />
                    <Box
                        component={'div'}
                        sx={WalletModalStyles.startedWalletCommentGroup}
                    >
                        <Box
                            component={'span'}
                            sx={WalletModalStyles.startedWalletCommentTitle}
                        >
                            {`Open the ${props.wallet.name} app`}
                        </Box>
                        <Box
                            component={'span'}
                            sx={WalletModalStyles.startedWalletComment}
                        >
                            {`We recommend putting ${props.wallet.name} on your home screen for faster access to your wallet`}
                        </Box>
                    </Box>
                </Box>
                <Box
                    component={'div'}
                    sx={WalletModalStyles.startedWalletCommentItem}
                >
                    <Box
                        component={'img'}
                        src={CreateWallet}
                        sx={WalletModalStyles.startedWalletIcon}
                    />
                    <Box
                        component={'div'}
                        sx={WalletModalStyles.startedWalletCommentGroup}
                    >
                        <Box
                            component={'span'}
                            sx={WalletModalStyles.startedWalletCommentTitle}
                        >
                            Create or Import a Wallet
                        </Box>
                        <Box
                            component={'span'}
                            sx={WalletModalStyles.startedWalletComment}
                        >
                            You can easily backup your wallet using our backup feature on your phone.
                        </Box>
                    </Box>
                </Box>
                <Box
                    component={'div'}
                    sx={WalletModalStyles.startedWalletCommentItem}
                >
                    <Box
                        component={'img'}
                        src={ScanWallet}
                        sx={WalletModalStyles.startedWalletIcon}
                    />
                    <Box
                        component={'div'}
                        sx={WalletModalStyles.startedWalletCommentGroup}
                    >
                        <Box
                            component={'span'}
                            sx={WalletModalStyles.startedWalletCommentTitle}
                        >
                            Tap the scan button
                        </Box>
                        <Box
                            component={'span'}
                            sx={WalletModalStyles.startedWalletComment}
                        >
                            After you scan, a connection prompt will appear for you to connect your wallet.
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box
                component={'div'}
                sx={WalletModalStyles.startedWalletActions}
            >
                <Button
                    sx={WalletModalStyles.getWalletBtn}
                    onClick={props.onStepForward}
                >
                    Connect
                </Button>
                <Button
                    sx={WalletModalStyles.learnBtn}
                    onClick={props.onLearnMore}
                >
                    Learn More
                </Button>
            </Box>
        </Box>
    )
})

const WalletList = memo(props => {
    return (
        <Box
            component={'div'}
            sx={WalletModalStyles.walletListPanel}
        >
            <IconButton
                children={<ChevronLeft fontSize={'large'} sx={WalletModalStyles.backIcon} />}
                sx={WalletModalStyles.startedWalletBackBtn}
                size={'large'}
                onClick={props.onBack}
            />
            <Box
                component={'span'}
                sx={WalletModalStyles.walletListTitle}
            >
                Get a Wallet
            </Box>
            <Box
                component={'div'}
                sx={WalletModalStyles.walletListGroup}
            >
                {
                    Object.keys(wallets).filter((wallet) => wallets[wallet].platform !== undefined).map((wallet, index) => {
                        return (
                            <Box
                                key={index}
                                component={'div'}
                                sx={WalletModalStyles.walletListItem}
                            >
                                <Box
                                    component={'div'}
                                    sx={WalletModalStyles.walletListItemLeft}
                                >
                                    <Box
                                        component={'img'}
                                        src={wallets[wallet].icon}
                                        sx={WalletModalStyles.walletListItemIcon}
                                    />
                                    <Box
                                        component={'div'}
                                        sx={WalletModalStyles.walletListItemCommentGroup}
                                    >
                                        <Box
                                            component={'span'}
                                            sx={WalletModalStyles.walletListItemName}
                                        >
                                            {wallets[wallet].name}
                                        </Box>
                                        <Box
                                            component={'span'}
                                            sx={WalletModalStyles.walletListItemComment}
                                        >
                                            {wallets[wallet].platform}
                                        </Box>
                                    </Box>
                                </Box>
                                <Button
                                    sx={WalletModalStyles.walletListItemAction}
                                    onClick={() => props.onGetWallet(wallet)}
                                >Get</Button>
                            </Box>
                        )
                    })
                }
            </Box>
            <Box
                component={'div'}
                sx={WalletModalStyles.walletListFooter}
            >
                <Box
                    component={'span'}
                    sx={WalletModalStyles.walletListFooterTitle}
                >
                    Not what you're looking for?
                </Box>
                <Box
                    component={'span'}
                    sx={WalletModalStyles.walletListFooterComment}
                >
                    Select a wallet on the left to get started with a different wallet providers
                </Box>
            </Box>
        </Box>
    )
})