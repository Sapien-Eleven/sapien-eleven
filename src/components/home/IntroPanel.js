import { Box, Button, Container, styled } from "@mui/material";
import MainBg from '../../assets/images/main_bg.png'
import '@fontsource/roboto/400.css';
import MetaMaskLogo from '../../assets/metamask_logo.png'
import WalletModal from "../WalletModal";
import {memo, useState} from "react";

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

export const IntroPanel = memo((props) => {
    const [walletModalVisible, setWalletModalVisible] = useState(false);
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
                startIcon={<img src={MetaMaskLogo} style={styles.metamaskLogo} alt='metamask' />}
                onClick={() => setWalletModalVisible(true)}
            >CONNECT WALLET</WalletButton>
            <WalletModal
                visible={walletModalVisible}
                closeModal={() => setWalletModalVisible(false)}
            />
        </Container>
    )
});

const styles = {
    introPanel: {
        width: '100%',
        height: '850px',
        paddingLeft: '70px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundImage: `url(${MainBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    },
    redTxt: {
        fontFamily: 'Roboto',
        fontSize: '35px',
        fontWeight: 700,
        fontStyle: 'normal',
        color: '#CA3C3D',
        marginLeft: '70px'
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