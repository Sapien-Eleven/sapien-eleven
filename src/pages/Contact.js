import {memo} from "react";
import Header from "../components/Header";
import {Footer} from "../components/Footer";
import Main from "../components/contact/Main";
import {useMediaQuery, useTheme} from "@mui/material";

const Contact = memo(props => {
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <div className={'app'}>
            <Header page={'contact'} />
            <Main />
            {!sm && <Footer/>}
        </div>
    )
})

export default Contact