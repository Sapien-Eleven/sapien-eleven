import {Footer} from "../components/Footer";
import Header from "../components/Header";
import {memo} from "react";
import Home from "../components/academy/Home";
import {connect} from "react-redux";

const Academy = memo(props => {
    return (
        <div className={'app'}>
            <Header page={'academy'} />
            <Home />
            <Footer />
        </div>
    )
})

export default connect(
    state => ({
        connectedWallet: state.authReducer.connectedWallet
    })
)(Academy)
