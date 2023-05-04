import {Footer} from "../components/Footer";
import Header from "../components/Header";
import {memo} from "react";

const Academy = memo(props => {
    return (
        <div className={'app'}>
            <Header page={'academy'} />
            <Footer />
        </div>
    )
})

export default Academy