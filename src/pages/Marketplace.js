import {Footer} from "../components/Footer";
import Header from "../components/Header";
import {memo} from "react";

const Marketplace = memo(props => {
    return (
        <div className={'app'}>
            <Header page={'marketplace'} />
            <Footer />
        </div>
    )
})

export default Marketplace