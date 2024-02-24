import {Footer} from "../components/Footer";
import Header from "../components/Header";
import {memo} from "react";
import Home from "../components/academy/Home";
import {connect} from "react-redux";
import {useMediaQuery, useTheme} from "@mui/material";
import {useLocation} from "react-router-dom";

const Academy = memo(props => {
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const {state} = useLocation();
    return (
        <div className={'app'}>
            <Header page={'academy'} />
            <Home mobileCategory={state !== null ? state.category : null} />
            {!sm && <Footer/>}
        </div>
    )
})

export default connect(
    state => ({
        connectedWallet: state.authReducer.connectedWallet
    })
)(Academy)
