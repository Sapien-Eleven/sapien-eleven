import {memo} from "react";
import Header from "../components/Header";
import {Footer} from "../components/Footer";
import Main from "../components/contact/Main";

const Contact = memo(props => {
    return (
        <div className={'app'}>
            <Header page={'contact'} />
            <Main />
            <Footer />
        </div>
    )
})

export default Contact