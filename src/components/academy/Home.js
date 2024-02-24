import {memo, useCallback, useEffect, useState} from "react";
import IntroPanel from "./IntroPanel";
import Middle from "./Middle";
import Membership from "./Membership";
import Main from "./Main";
import {connect} from "react-redux";
import WalletModal from "../WalletModal";
import SigninModal from "../SigninModal";
import {useMediaQuery, useTheme} from "@mui/material";

const Home = memo(props => {
    const [isEntered, setEntered] = useState(false);
    const [walletModalVisible, setWalletModalVisible] = useState(false);
    const closeWalletModal = useCallback(() => setWalletModalVisible(false), [])
    const [showSigninModal, setShowSigninModal] = useState(false);
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));

    const onEnter = useCallback(() => {
        if (props.connectedWallet !== '' || props.isAuthenticated) {
            setEntered(true);
        } else {
            setWalletModalVisible(true)
        }
    }, [isEntered, props.connectedWallet, props.isAuthenticated]);
    if (sm && (props.connectedWallet !== '' || props.isAuthenticated) && props.mobileCategory !== null) return <Main mobileCategory={props.mobileCategory} />
    else if (isEntered && (props.connectedWallet !== '' || props.isAuthenticated)) return <Main mobileCategory={props.mobileCategory} />
    else return (
        <div>
            <IntroPanel onPress={onEnter} />
            <Middle />
            <Membership />
            <WalletModal
                visible={walletModalVisible}
                closeModal={closeWalletModal}
                showSigninModal={() => setShowSigninModal(true)}
            />
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
