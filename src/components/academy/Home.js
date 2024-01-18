import {memo, useCallback, useState} from "react";
import IntroPanel from "./IntroPanel";
import Middle from "./Middle";
import Membership from "./Membership";
import Main from "./Main";
import {connect} from "react-redux";
import WalletModal from "../WalletModal";
import SigninModal from "../SigninModal";

const Home = memo(props => {
    const [isEntered, setEntered] = useState(false);
    const [walletModalVisible, setWalletModalVisible] = useState(false);
    const closeWalletModal = useCallback(() => setWalletModalVisible(false), [])
    const [showSigninModal, setShowSigninModal] = useState(false);
    const onEnter = useCallback(() => {
        if (props.connectedWallet !== '') {
            setEntered(true);
        } else {
            setWalletModalVisible(true)
        }
    }, [isEntered, props.connectedWallet]);
    if (isEntered && (props.connectedWallet !== '')) return <Main/>
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
        connectedWallet: state.authReducer.connectedWallet
    })
)(Home)
