import {Footer} from "../components/Footer";
import Header from "../components/Header";
import {memo} from "react";
import IntroPanel from "../components/resources/IntroPanel";
import CategoryPanel from "../components/resources/CategoryPanel";
import JoinPanel from "../components/resources/JoinPanel";

const Resources = memo(props => {
    return (
        <div className={'app'}>
            <Header page={'resources'} />
            <IntroPanel />
            <CategoryPanel />
            <JoinPanel />
            <Footer />
        </div>
    )
})

export default Resources