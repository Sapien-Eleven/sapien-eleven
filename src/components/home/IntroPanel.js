import { Box, Button, Container, styled } from "@mui/material";
import MainBg from '../../assets/images/main_bg.png'
import '@fontsource/roboto/400.css';
import MetaMaskLogo from '../../assets/metamask_logo.png'
import WalletModal from "../WalletModal";
import {memo, useCallback, useEffect, useState} from "react";
import {connect} from "react-redux";
import {StrapiBaseURL, StrapiToken, StrapiURL, wallets} from "../../const/consts";
import {pixToRem} from "../../const/uivar";
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
    marginLeft: '70px'
}))

const IntroPanel = memo((props) => {
    const [walletModalVisible, setWalletModalVisible] = useState(false);
    const [showSigninModal, setShowSigninModal] = useState(false);
    const [content, setContent] = useState({});

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
            >{props.connectedWallet !== ''? `FULL ACCESS` : `CONNECT WALLET`}</WalletButton>
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
        width: '35%',
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