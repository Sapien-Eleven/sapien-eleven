import {Box, Button, Container, styled, useMediaQuery, useTheme} from "@mui/material";
import MainBg from '../../assets/images/main_bg.png'
import MobileMainBg from '../../assets/images/mobile_main_bg.png'
import '@fontsource/roboto/400.css';
import MetaMaskLogo from '../../assets/metamask.svg'
import WalletModal from "../WalletModal";
import {memo, useCallback, useEffect, useState} from "react";
import {connect} from "react-redux";
import {StrapiToken, StrapiURL, wallets} from "../../const/consts";
import {fonts, pixToRem} from "../../const/uivar";
import axios from "axios";
import SigninModal from "../SigninModal";

const WalletButton = styled(Button)((props) => ({
	boxSizing: 'border-box',
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
	padding: 10,
	gap: 10,
	width: '233px',
	height: '48px',
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
}))

const IntroPanel = memo((props) => {
    const [walletModalVisible, setWalletModalVisible] = useState(false);
    const [showSigninModal, setShowSigninModal] = useState(false);
    const [content, setContent] = useState({});
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        fetchContent().then();
    }, []);

    const fetchContent = async () => {
        const data = (await axios.get(`${StrapiURL}landings`, {
            headers: {
                'Authorization': `bearer ${StrapiToken}`
            },
            params: {
                'populate': '*',
                'filters[section][$eq]': 'section1'
            }
        })).data;
        setContent({
            title1: data.data[0].attributes.title1,
            title2: data.data[0].attributes.title2,
            description: data.data[0].attributes.description,
        });
    }

    const onOpenWallet = useCallback(() => {
        if (props.connectedWallet !== '') return;
        setWalletModalVisible(true);
    }, [props.connectedWallet]);

    if (sm)
        return (
            <Container
                component={'div'}
                sx={styles.mobileIntroPanel}
                maxWidth={false}
            >
                <Box
                    component={'span'}
                    sx={styles.mobileRedTxt}
                >{content.title1}</Box>
                <Box
                    component={'span'}
                    sx={styles.mobileTitle}
                >{content.title2}</Box>
                <Box
                    component={'span'}
                    sx={styles.mobileComment}
                >{content.description}</Box>
                <WalletButton
                    sx={{ml: 0}}
                    startIcon={<img src={props.connectedWallet === '' ? MetaMaskLogo : wallets[props.connectedWallet].remoteIcon} style={styles.metamaskLogo} alt='metamask' />}
                    onClick={onOpenWallet}
                >{(props.connectedWallet !== '' || props.isAuthenticated) ? `FULL ACCESS` : `CONNECT WALLET`}</WalletButton>
                <WalletModal
                    visible={walletModalVisible}
                    closeModal={() => setWalletModalVisible(false)}
                    showSigninModal={() => setShowSigninModal(true)}
                />
                <SigninModal
                    visible={showSigninModal}
                    onClose={() => setShowSigninModal(false)}
                />
            </Container>
        )
    return (
        <Container
            component={'div'}
            sx={styles.introPanel}
            maxWidth={false}
        >
            <Box
                component={'span'}
                sx={styles.redTxt}
            >{content.title1}</Box>
            <Box
                component={'span'}
                sx={styles.title}
            >{content.title2}</Box>
            <Box
                component={'span'}
                sx={styles.comment}
            >{content.description}</Box>
            <WalletButton
                startIcon={<img src={props.connectedWallet === '' ? MetaMaskLogo : wallets[props.connectedWallet].remoteIcon} style={styles.metamaskLogo} alt='metamask' />}
                onClick={onOpenWallet}
            >{(props.connectedWallet !== '' || props.isAuthenticated) ? `FULL ACCESS` : `CONNECT WALLET`}</WalletButton>
            <WalletModal
                visible={walletModalVisible}
                closeModal={() => setWalletModalVisible(false)}
                showSigninModal={() => setShowSigninModal(true)}
            />
            <SigninModal
                visible={showSigninModal}
                onClose={() => setShowSigninModal(false)}
            />
        </Container>
    )
});

export default connect(
    state => ({
        connectedWallet: state.authReducer.connectedWallet,
        isAuthenticated: state.authReducer.isAuthenticated
    })
)(IntroPanel)

const styles = {
    introPanel: {
        width: '100%',
        display: 'flex',
        boxSizing: 'border-box',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundImage: `url(${MainBg})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        pt: pixToRem(210),
        pb: pixToRem(210)
    },
    redTxt: {
        fontFamily: 'Roboto',
        fontSize: '35px',
        fontWeight: 700,
        fontStyle: 'normal',
        color: '#CA3C3D',
        ml: pixToRem(70)
    },
    title: {
        fontFamily: 'besan',
        fontSize: '35px',
        fontWeight: 700,
        fontStyle: 'normal',
        color: 'white',
        mt: '15px',
        mb: '15px',
        ml: pixToRem(70)
    },
    comment: {
        width: '35%',
        fontFamily: 'Roboto',
        fontSize: '20px',
        fontWeight: 400,
        fontStyle: 'normal',
        color: 'white',
        mt: '15px',
        mb: '15px',
        ml: pixToRem(70)
    },
    metamaskLogo: {
		width: '18px',
		height: '18px',
	},
    mobileIntroPanel: {
        display: 'flex',
        width: '100%',
        boxSizing: 'border-box',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${MobileMainBg})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        pt: pixToRem(450),
        pb: pixToRem(150)
    },
    mobileRedTxt: {
        fontFamily: fonts.roboto,
        fontSize: '26px',
        fontWeight: 700,
        fontStyle: 'normal',
        color: '#CA3C3D',
    },
    mobileTitle: {
        fontFamily: fonts.besan,
        fontSize: '22px',
        fontWeight: 400,
        fontStyle: 'normal',
        color: 'white',
        mt: '15px',
        mb: '15px',
    },
    mobileComment: {
        fontFamily: 'Roboto',
        fontSize: '16px',
        fontWeight: 400,
        fontStyle: 'normal',
        textAlign: 'center',
        color: 'white',
        mt: '15px',
        mb: '45px',
    }
}