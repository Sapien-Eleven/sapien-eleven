import {Footer} from "../components/Footer";
import Header from "../components/Header";
import {memo} from "react";
import Home from "../components/academy/Home";
import {connect} from "react-redux";
import Main from "../components/academy/Main";

const Academy = memo(props => {
    return (
        <div className={'app'}>
            <Header page={'academy'} />
            {
                props.connectedWallet === '' ?
                    <Home />
                    : <Main />
            }
            <Footer />
        </div>
    )
})

export default connect(
    state => ({
        connectedWallet: state.authReducer.connectedWallet
    })
)(Academy)
