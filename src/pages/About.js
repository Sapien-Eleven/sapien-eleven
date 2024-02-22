import React, {memo} from 'react'
import Header from "../components/Header";
import IntroPanel from "../components/about/IntroPanel";
import WellnessGame from "../components/about/WellnessGame";
import Team from "../components/about/Team";
import Miss from "../components/about/Miss";
import {Footer} from "../components/Footer";
import NextHealthApp from "../components/about/NextHealthApp";
import {useMediaQuery, useTheme} from "@mui/material";

const About = memo(props => {
    const theme = useTheme();
    const md = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <div className={'app'}>
            <Header page={'about'} />
            <IntroPanel />
            <WellnessGame />
            <NextHealthApp />
            <Team />
            <Miss />
            {!md && <Footer/>}
        </div>
    )
})

export default About
