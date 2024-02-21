import {Footer} from "../components/Footer";
import Header from "../components/Header";
import {memo} from "react";
import {useMediaQuery, useTheme} from "@mui/material";

const Marketplace = memo(props => {
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <div className={'app'}>
            <Header page={'marketplace'} />
            {!sm && <Footer/>}
        </div>
    )
})

export default Marketplace