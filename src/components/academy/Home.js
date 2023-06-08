import {memo} from "react";
import IntroPanel from "./IntroPanel";
import Middle from "./Middle";
import Membership from "./Membership";

const Home = memo(props => {
    return (
        <div>
            <IntroPanel />
            <Middle />
            <Membership />
        </div>
    )
})

export default Home
