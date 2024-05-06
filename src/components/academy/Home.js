import {memo, useCallback, useEffect, useState} from "react";
import IntroPanel from "./IntroPanel";
import Middle from "./Middle";
import Membership from "./Membership";
import Main from "./Main";
import {connect, useSelector} from "react-redux";
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
    const isAuthenticated = useSelector(state => state.authReducer.isAuthenticated);
    const user = useSelector(state => state.authReducer.user);
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));

    const onEnter = useCallback(async() => {
        if (!isConnected && !isAuthenticated) return;
        if (isAuthenticated) {
            try {
                const data = (await axios.post(`${SERVER_URL}checkWhitelistedById`, {
                    id: user._id
                })).data
                if (data.status === 'success') setEntered(true);
                else enqueueSnackbar(data.comment, {variant: 'warning'});
            } catch (e) {
                enqueueSnackbar(e.toString(), {variant: 'error'})
                return false;
            }
        }
        if (isConnected) {
            try {
                const data = (await axios.post(`${SERVER_URL}checkWhitelistedByWallet`, {
                    wallet_address: address
                })).data
                if (data.status === 'success') setEntered(true)
                else enqueueSnackbar(data.comment, {variant: 'warning'})
            } catch (e) {
                enqueueSnackbar(e.toString(), {variant: 'error'})
                return false;
            }
        }
    }, [isEntered, isConnected, isAuthenticated]);
    if (sm && (isConnected || isAuthenticated) && props.mobileCategory !== null) return <Main mobileCategory={props.mobileCategory} />
    else if (isEntered && (isConnected || isAuthenticated)) return <Main mobileCategory={props.mobileCategory} />
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
