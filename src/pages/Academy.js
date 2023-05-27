import {Footer} from "../components/Footer";
import Header from "../components/Header";
import {memo} from "react";
import IntroPanel from "../components/academy/IntroPanel";
import Main from "../components/academy/Main";

const Academy = memo(props => {
    return (
        <div className={'app'}>
            <Header page={'academy'} />
            <IntroPanel />
            <Main />
            <Footer />
        </div>
    )
})

export default Academy
