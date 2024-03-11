import {memo, useCallback, useEffect, useState} from "react";
import IntroPanel from "./IntroPanel";
import Middle from "./Middle";
import Membership from "./Membership";
import Main from "./Main";
import {connect} from "react-redux";
import WalletModal from "../WalletModal";
import SigninModal from "../SigninModal";
import {useMediaQuery, useTheme} from "@mui/material";
import {useAccount} from "wagmi";
import axios from "axios";
import {SERVER_URL} from "../../const/consts";
import {enqueueSnackbar} from "notistack";

const Home = memo(props => {
    const [isEntered, setEntered] = useState(false);
    const {isConnected, address} = useAccount()
    const [showSigninModal, setShowSigninModal] = useState(false);
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));

    const checkWhitelisted = async () => {
        if (!isConnected) return;
        try {
            const data = (await axios.post(`${SERVER_URL}checkWhitelisted`, {
                wallet_address: address
            })).data
            if (data.status === 'success') return true;
            else {
                enqueueSnackbar(data.comment, {variant: 'error'});
                return false;
            }
        } catch (e) {
            return false;
        }
    }

    const onEnter = useCallback(async() => {
        if (await checkWhitelisted()) {
            setEntered(true);
        }
    }, [isEntered, isConnected]);
    if (sm && isConnected && props.mobileCategory !== null) return <Main mobileCategory={props.mobileCategory} />
    else if (isEntered && isConnected) return <Main mobileCategory={props.mobileCategory} />
    else return (
        <div>
            <IntroPanel onPress={onEnter} />
            <Middle />
            <Membership />
            <SigninModal
                visible={showSigninModal}
                onClose={() => setShowSigninModal(false)}
            />
        </div>
    )
})

export default connect(
    state => ({
        connectedWallet: state.authReducer.connectedWallet,
        isAuthenticated: state.authReducer.isAuthenticated
    })
)(Home)
