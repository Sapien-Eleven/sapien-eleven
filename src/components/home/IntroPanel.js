import { Box, Button, Container, styled } from "@mui/material";
import MainBg from '../../assets/images/main_bg.png'
import '@fontsource/roboto/400.css';
import MetaMaskLogo from '../../assets/metamask_logo.png'
import WalletModal from "../WalletModal";
import {memo, useCallback, useState} from "react";
import {connect} from "react-redux";
import {wallets} from "../../const/consts";
import {pixToRem} from "../../const/uivar";

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
    marginLeft: '70px'
}))

const IntroPanel = memo((props) => {
    const [walletModalVisible, setWalletModalVisible] = useState(false);

    const onOpenWallet = useCallback(() => {
        if (props.connectedWallet !== '') return;
        setWalletModalVisible(true);
    }, [props.connectedWallet]);
    return (
        <Container
            component={'div'}
            sx={styles.introPanel}
            maxWidth={false}
        >
            <Box
                component={'span'}
                sx={styles.redTxt}
            >WEB3 NFT</Box>
            <Box
                component={'span'}
                sx={styles.title}
            >WELLNESS PLATFORM</Box>
            <Box
                component={'span'}
                sx={styles.comment}
            >Increasing longevity and vigor through knowledge,<br/>accesibility, motivation and empowerment</Box>
            <WalletButton
                startIcon={<img src={props.connectedWallet === '' ? MetaMaskLogo : wallets[props.connectedWallet].remoteIcon} style={styles.metamaskLogo} alt='metamask' />}
                onClick={onOpenWallet}
            >{props.connectedWallet !== ''? `FULL ACCESS` : `CONNECT WALLET`}</WalletButton>
            <WalletModal
                visible={walletModalVisible}
                closeModal={() => setWalletModalVisible(false)}
            />
        </Container>
    )
});

export default connect(
    state => ({
        connectedWallet: state.authReducer.connectedWallet
    })
)(IntroPanel)

const styles = {
    introPanel: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundImage: `url(${MainBg})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        paddingTop: pixToRem(210),
        paddingBottom: pixToRem(210)
    },
    redTxt: {
        fontFamily: 'Roboto',
        fontSize: '35px',
        fontWeight: 700,
        fontStyle: 'normal',
        color: '#CA3C3D',
        marginLeft: '70px',
    },
    title: {
        fontFamily: 'besan',
        fontSize: '35px',
        fontWeight: 700,
        fontStyle: 'normal',
        color: 'white',
        marginTop: '15px',
        marginBottom: '15px',
        marginLeft: '70px'
    },
    comment: {
        fontFamily: 'Roboto',
        fontSize: '20px',
        fontWeight: 400,
        fontStyle: 'normal',
        color: 'white',
        marginTop: '15px',
        marginBottom: '15px',
        marginLeft: '70px'
    },
    metamaskLogo: {
		width: '18px',
		height: '18px',
	}
}