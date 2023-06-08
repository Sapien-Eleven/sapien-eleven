import {Footer} from "../components/Footer";
import Header from "../components/Header";
import {memo} from "react";
import Home from "../components/academy/Home";

const Academy = memo(props => {
    return (
        <div className={'app'}>
            <Header page={'academy'} />
            <Home />
            <Footer />
        </div>
    )
})

export default Academy
