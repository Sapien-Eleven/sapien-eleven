import { Footer } from "../components/Footer";
import Header from "../components/Header";
import { About } from "../components/home/About";
import { IntroSapien } from "../components/home/IntroSapien";
import { ChronicDisease } from "../components/home/ChronicDisease";
import { DiseaseReport } from "../components/home/DiseaseReport";
import { HumanHealth } from "../components/home/HumanHealth";
import IntroPanel from "../components/home/IntroPanel";
import Drop from "../components/home/Drop";
import '../styles/common.css'
import {useMediaQuery, useTheme} from "@mui/material";

export default function Home() {
    const theme = useTheme();
    const md = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <div
            className="app"
        >
            <Header page={'home'} />
            <IntroPanel />
            <IntroSapien />
            <HumanHealth />
            <DiseaseReport />
            <ChronicDisease />
            <About />
            <Drop />
            {!md && <Footer/>}
        </div>
    )
}
