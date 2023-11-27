import {memo, useCallback, useState} from "react";
import IntroPanel from "./IntroPanel";
import Middle from "./Middle";
import Membership from "./Membership";
import Main from "./Main";
import {connect} from "react-redux";
import WalletModal from "../WalletModal";

const Home = memo(props => {
    const [isEntered, setEntered] = useState(false);
    const [walletModalVisible, setWalletModalVisible] = useState(false);
    const closeWalletModal = useCallback(() => setWalletModalVisible(false), [])
    const onEnter = useCallback(() => {
        if (props.connectedWallet !== '') {
            setEntered(true);
        } else {
            setWalletModalVisible(true)
        }
    }, []);
    if (isEntered && props.connectedWallet !== '') return <Main/>
    else return (
        <div>
            <IntroPanel onPress={onEnter} />
            <Middle />
            <Membership />
            <WalletModal
                visible={walletModalVisible}
                closeModal={closeWalletModal}
            />
        </div>
    )
})

export default connect(
    state => ({
        connectedWallet: state.authReducer.connectedWallet
    })
)(Home)
