import {ConnectButton} from '@rainbow-me/rainbowkit';
import {Button, useMediaQuery, useTheme} from "@mui/material";
import {fonts, pixToRem} from "../const/uivar";
import MetaMaskLogo from '../assets/metamask.svg'
import {useDisconnect} from "wagmi";
import {colors} from '../const/uivar'
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import EmailWalletModal from "./EmailWalletModal";

export const HeaderConnectButton = () => {
    const {disconnect} = useDisconnect();
    const [showDisconnectButton, setShowDisconnectButton] = useState(false)
    const [showEmailWalletModal, setShowEmailWalletModal] = useState(false)
    const dispatch = useDispatch();
    const disconnectWallet = async () => {
        await disconnect();
        setShowDisconnectButton(false);
    }
    const isAuthenticated = useSelector(state => state.authReducer.isAuthenticated);
    const user = useSelector(state => state.authReducer.user);

    if (isAuthenticated) {
        return (
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 2}}>
                <Button
                    sx={styles.headerBtn}
                    onClick={() => setShowDisconnectButton(!showDisconnectButton)}
                >
                    {user.name}
                </Button>
                {showDisconnectButton && <Button
                    sx={styles.headerBtn}
                    onClick={() => dispatch({type: 'SIGN_OUT'})}
                >
                    Log Out
                </Button>}
            </div>
        )
    }

    return (
        <ConnectButton.Custom>
            {({
                  account,
                  chain,
                  openAccountModal,
                  openChainModal,
                  openConnectModal,
                  authenticationStatus,
                  mounted,
              }) => {
                // Note: If your app doesn't use authentication, you
                // can remove all 'authenticationStatus' checks
                const ready = mounted && authenticationStatus !== 'loading';
                const connected =
                    ready &&
                    account &&
                    chain &&
                    (!authenticationStatus ||
                        authenticationStatus === 'authenticated');
                return (
                    <div
                        {...(!ready && {
                            'aria-hidden': true,
                            'style': {
                                opacity: 0,
                                pointerEvents: 'none',
                                userSelect: 'none',
                            },
                        })}
                    >
                        {(() => {
                            if (!connected && !isAuthenticated) {
                                return (
                                    <>
                                        <Button
                                            sx={styles.headerBtn}
                                            startIcon={<img src={MetaMaskLogo} style={{width: pixToRem(15), height: pixToRem(15)}} alt='metamask' />}
                                            onClick={() => setShowEmailWalletModal(true)}
                                        >
                                            Connect Wallet
                                        </Button>
                                    </>
                                );
                            }
                            if (chain.unsupported) {
                                return (
                                    <Button
                                        sx={styles.headerBtn}
                                        onClick={openChainModal}>
                                        Wrong network
                                    </Button>
                                );
                            }
                            return (
                                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 2}}>
                                    <Button
                                        sx={styles.headerBtn}
                                        startIcon={<img src={chain.iconUrl} style={{width: pixToRem(15), height: pixToRem(15)}} alt='metamask' />}
                                        onClick={() => setShowDisconnectButton(!showDisconnectButton)}
                                    >
                                        {account.displayName}
                                        {account.displayBalance
                                            ? ` (${account.displayBalance})`
                                            : ''}
                                    </Button>
                                    {showDisconnectButton && <Button
                                        sx={styles.headerBtn}
                                        onClick={disconnectWallet}
                                    >
                                        Disconnect Wallet
                                    </Button>}
                                </div>
                            );
                        })()}
                        <EmailWalletModal
                            visible={showEmailWalletModal}
                            onClose={() => setShowEmailWalletModal(false)}
                        />
                    </div>
                );
            }}
        </ConnectButton.Custom>
    );
};

export const MobileHeaderConnectButton = () => {
    const [showDisconnectButton, setShowDisconnectButton] = useState(false);
    const [showEmailWalletModal, setShowEmailWalletModal] = useState(false)
    const dispatch = useDispatch();
    const {disconnect} = useDisconnect();
    const disconnectWallet = async () => {
        await disconnect();
        setShowDisconnectButton(false)
    }
    const isAuthenticated = useSelector(state => state.authReducer.isAuthenticated);
    const user = useSelector(state => state.authReducer.user);
    return (
        <ConnectButton.Custom>
            {({
                  account,
                  chain,
                  openAccountModal,
                  openChainModal,
                  openConnectModal,
                  authenticationStatus,
                  mounted,
              }) => {
                // Note: If your app doesn't use authentication, you
                // can remove all 'authenticationStatus' checks
                const ready = mounted && authenticationStatus !== 'loading';
                const connected =
                    ready &&
                    account &&
                    chain &&
                    (!authenticationStatus ||
                        authenticationStatus === 'authenticated');
                return (
                    <div
                        {...(!ready && {
                            'aria-hidden': true,
                            'style': {
                                opacity: 0,
                                pointerEvents: 'none',
                                userSelect: 'none',
                            },
                        })}
                    >
                        {(() => {
                            if (!connected && !isAuthenticated) {
                                return (
                                    <Button
                                        sx={styles.mobileHeaderBtn}
                                        endIcon={<img src={MetaMaskLogo} style={{width: pixToRem(20), height: pixToRem(20)}} alt='metamask' />}
                                        onClick={() => setShowEmailWalletModal(true)}
                                    >
                                        Connect Wallet
                                    </Button>
                                );
                            }
                            if (!isAuthenticated && chain.unsupported) {
                                return (
                                    <Button
                                        sx={styles.mobileHeaderBtn}
                                        onClick={openChainModal}
                                    >
                                        Wrong network
                                    </Button>
                                );
                            }
                            if (isAuthenticated) {
                                return (
                                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 5}}>
                                        <Button
                                            sx={styles.mobileHeaderBtn}
                                            onClick={() => setShowDisconnectButton(!showDisconnectButton)}
                                        >
                                            {user.name}
                                        </Button>
                                        {showDisconnectButton && <Button
                                            sx={[styles.mobileHeaderBtn, {color: colors.red}]}
                                            onClick={() => dispatch({type: 'SIGN_OUT'})}
                                        >
                                            Log Out
                                        </Button>}
                                    </div>
                                );
                            }
                            return (
                                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 5}}>
                                    <Button
                                        sx={styles.mobileHeaderBtn}
                                        endIcon={<img src={chain.iconUrl} style={{width: pixToRem(20), height: pixToRem(20)}} alt={chain.name} />}
                                        onClick={() => setShowDisconnectButton(!showDisconnectButton)}
                                    >
                                        {account.displayName}
                                        {account.displayBalance
                                            ? ` (${account.displayBalance})`
                                            : ''}
                                    </Button>
                                    {showDisconnectButton && <Button
                                        sx={[styles.mobileHeaderBtn, {color: colors.red}]}
                                        onClick={disconnectWallet}
                                    >
                                        Disconnect Wallet
                                    </Button>}
                                </div>
                            );
                        })()}
                        <EmailWalletModal
                            visible={showEmailWalletModal}
                            onClose={() => setShowEmailWalletModal(false)}
                        />
                    </div>
                );
            }}
        </ConnectButton.Custom>
    );
};

export const HomeConnectButton = () => {
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const [showEmailWalletModal, setShowEmailWalletModal] = useState(false)
    const isAuthenticated = useSelector(state => state.authReducer.isAuthenticated);
    return (
        <>
            <ConnectButton.Custom>
                {({
                      account,
                      chain,
                      openAccountModal,
                      openChainModal,
                      openConnectModal,
                      authenticationStatus,
                      mounted,
                  }) => {
                    // Note: If your app doesn't use authentication, you
                    // can remove all 'authenticationStatus' checks
                    const ready = mounted && authenticationStatus !== 'loading';
                    const connected =
                        ready &&
                        account &&
                        chain &&
                        (!authenticationStatus ||
                            authenticationStatus === 'authenticated');
                    return (
                        <div
                            {...(!ready && {
                                'aria-hidden': true,
                                'style': {
                                    opacity: 0,
                                    pointerEvents: 'none',
                                    userSelect: 'none',
                                },
                            })}
                        >
                            {(() => {
                                if (!connected && !isAuthenticated) {
                                    return (
                                        <Button
                                            sx={[styles.homeBtn, {ml: sm ? 0 : pixToRem(70)}]}
                                            startIcon={<img src={MetaMaskLogo} style={{width: pixToRem(20), height: pixToRem(20)}} alt='metamask' />}
                                            onClick={() => setShowEmailWalletModal(true)}
                                        >
                                            Connect Wallet
                                        </Button>
                                    );
                                }
                                if (!isAuthenticated && chain.unsupported) {
                                    return (
                                        <Button
                                            sx={[styles.homeBtn, {ml: sm ? 0 : pixToRem(70)}]}
                                            onClick={openChainModal}>
                                            Wrong network
                                        </Button>
                                    );
                                }
                                if (isAuthenticated) {
                                    return (
                                        <Button
                                            sx={[styles.homeBtn, {ml: sm ? 0 : pixToRem(70)}]}
                                        >
                                            Full Access
                                        </Button>
                                    );
                                }
                                return (
                                    <Button
                                        sx={[styles.homeBtn, {ml: sm ? 0 : pixToRem(70)}]}
                                        startIcon={<img src={chain.iconUrl} style={{width: pixToRem(20), height: pixToRem(20)}} alt={chain.name} />}
                                    >
                                        Full Access
                                    </Button>
                                );
                            })()}
                        </div>
                    );
                }}
            </ConnectButton.Custom>
            <EmailWalletModal
                visible={showEmailWalletModal}
                onClose={() => setShowEmailWalletModal(false)}
            />
        </>
    );
};

export const AcademyConnectButton = (props) => {
    const [showEmailWalletModal, setShowEmailWalletModal] = useState(false)
    const isAuthenticated = useSelector(state => state.authReducer.isAuthenticated);
    return (
        <>
            <ConnectButton.Custom>
                {({
                      account,
                      chain,
                      openAccountModal,
                      openChainModal,
                      openConnectModal,
                      authenticationStatus,
                      mounted,
                  }) => {
                    // Note: If your app doesn't use authentication, you
                    // can remove all 'authenticationStatus' checks
                    const ready = mounted && authenticationStatus !== 'loading';
                    const connected =
                        ready &&
                        account &&
                        chain &&
                        (!authenticationStatus ||
                            authenticationStatus === 'authenticated');
                    return (
                        <div
                            {...(!ready && {
                                'aria-hidden': true,
                                'style': {
                                    opacity: 0,
                                    pointerEvents: 'none',
                                    userSelect: 'none',
                                },
                            })}
                        >
                            {(() => {
                                if (!connected && !isAuthenticated) {
                                    return (
                                        <Button
                                            sx={styles.academyBtn}
                                            onClick={() => setShowEmailWalletModal(true)}
                                        >
                                            Connect Wallet
                                        </Button>
                                    );
                                }
                                if (!isAuthenticated && chain.unsupported) {
                                    return (
                                        <Button
                                            sx={styles.academyBtn}
                                            onClick={openChainModal}>
                                            Wrong network
                                        </Button>
                                    );
                                }
                                return (
                                    <Button
                                        sx={styles.academyBtn}
                                        onClick={props.onPress}
                                    >
                                        Enter
                                    </Button>
                                );
                            })()}
                        </div>
                    );
                }}
            </ConnectButton.Custom>
            <EmailWalletModal
                visible={showEmailWalletModal}
                onClose={() => setShowEmailWalletModal(false)}
            />
        </>
    );
};

export const ModalConnectButton = (props) => {
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <ConnectButton.Custom>
            {({
                  account,
                  chain,
                  openAccountModal,
                  openChainModal,
                  openConnectModal,
                  authenticationStatus,
                  mounted,
              }) => {
                // Note: If your app doesn't use authentication, you
                // can remove all 'authenticationStatus' checks
                const ready = mounted && authenticationStatus !== 'loading';
                const connected =
                    ready &&
                    account &&
                    chain &&
                    (!authenticationStatus ||
                        authenticationStatus === 'authenticated');
                return (
                    <div
                        {...(!ready && {
                            'aria-hidden': true,
                            'style': {
                                opacity: 0,
                                pointerEvents: 'none',
                                userSelect: 'none',
                            },
                        })}
                    >
                        {(() => {
                            if (!connected) {
                                return (
                                    <Button
                                        fullWidth
                                        variant={'contained'}
                                        sx={styles.connectBtn}
                                        onClick={() => {
                                            props.onClosePrevious();
                                            openConnectModal();
                                        }}
                                    >
                                        Continue with a wallet
                                    </Button>
                                );
                            }
                            if (chain.unsupported) {
                                return (
                                    <Button
                                        fullWidth
                                        variant={'contained'}
                                        sx={styles.connectBtn}
                                        onClick={openChainModal}>
                                        Wrong network
                                    </Button>
                                );
                            }
                            return (
                                <Button
                                    fullWidth
                                    variant={'contained'}
                                    sx={styles.homeBtn}
                                >
                                    Full Access
                                </Button>
                            );
                        })()}
                    </div>
                );
            }}
        </ConnectButton.Custom>
    );
};

const styles = {
    connectBtn: {
        bgcolor: '#24272e',
        fontFamily: fonts.roboto,
        fontSize: pixToRem(22),
        fontWeight: '700',
        color: 'white',
        borderRadius: 3,
        textTransform: 'none',
        p: 1
    },
    headerBtn: {
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: pixToRem(10),
        paddingBottom: pixToRem(10),
        paddingLeft: pixToRem(20),
        paddingRight: pixToRem(20),
        width: 160,
        height: pixToRem(35),
        backgroundColor: '#F8F8F8',
        color: '#333333',
        fontFamily: 'Roboto',
        fontSize: pixToRem(10),
        fontWeight: '700',
        fontStyle: 'normal',
        lineHeight: pixToRem(12),
        border: '1px solid #CA3C3D',
        borderRadius: 0,
        ':hover': {
            backgroundColor: colors.red,
            color: 'white'
        }
    },
    mobileHeaderBtn: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
        fontFamily: fonts.roboto,
        fontSize: pixToRem(18),
        fontWeight: 700,
        fontStyle: 'normal',
        lineHeight: pixToRem(25),
        border: '1px solid #CA3C3D',
        borderRadius: 0,
        pt: 2, pb: 2
    },
    homeBtn: {
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 1.5,
        pl: 5, pr: 5,
        // width: '233px',
        height: '50px',
        color: 'white',
        fontFamily: 'Roboto',
        fontSize: '14px',
        fontWeight: 700,
        fontStyle: 'normal',
        lineHeight: 16,
        border: '1px solid #CA3C3D',
        borderRadius: 0,
        marginTop: '15px',
        marginLeft: pixToRem(70)
    },
    academyBtn: {
        height: pixToRem(60),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 11,
        paddingRight: 11,
        fontFamily: fonts.roboto,
        fontSize: pixToRem(20),
        fontWeight: 500,
        fontStyle: 'normal',
        lineHeight: 16,
        border: '1px solid #CA3C3D',
        borderRadius: 0,
        marginBottom: pixToRem(30),
    }
}