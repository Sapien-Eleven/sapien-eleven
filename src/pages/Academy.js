import {Footer} from "../components/Footer";
import Header from "../components/Header";
import {memo} from "react";
import Home from "../components/academy/Home";
import {connect} from "react-redux";
import {useMediaQuery, useTheme} from "@mui/material";

const Academy = memo(props => {
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <div className={'app'}>
            <Header page={'academy'} />
            <Home />
            {!sm && <Footer/>}
        </div>
    )
})

export default connect(
    state => ({
        connectedWallet: state.authReducer.connectedWallet
    })
)(Academy)
