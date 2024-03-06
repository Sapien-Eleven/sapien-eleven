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

const Home = memo(props => {
    const [isEntered, setEntered] = useState(false);
    const {isConnected} = useAccount()
    const [showSigninModal, setShowSigninModal] = useState(false);
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));

    const onEnter = useCallback(() => {
        if (isConnected || props.isAuthenticated) {
            setEntered(true);
        }
    }, [isEntered, isConnected, props.isAuthenticated]);
    if (sm && (isConnected || props.isAuthenticated) && props.mobileCategory !== null) return <Main mobileCategory={props.mobileCategory} />
    else if (isEntered && (isConnected || props.isAuthenticated)) return <Main mobileCategory={props.mobileCategory} />
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
