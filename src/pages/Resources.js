import {Footer} from "../components/Footer";
import Header from "../components/Header";
import {memo} from "react";

const Resources = memo(props => {
    return (
        <div className={'app'}>
            <Header page={'resources'} />
            <Footer />
        </div>
    )
})

export default Resources