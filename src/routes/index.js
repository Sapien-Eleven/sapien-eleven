import {HashRouter, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Academy from "../pages/Academy";
import Marketplace from "../pages/Marketplace";
import Media from "../pages/Media";
import Policy from "../components/resource/Policy";
import MediaDetail from "../components/media/MediaDetail";

const Router = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                    <Route path={'academy'} element={<Academy />} />
                    <Route path={'about'} element={<About />} />
                    <Route path={'marketplace'} element={<Marketplace />} />
                    <Route path={'media'} element={<Media />} />
                    <Route path={'media/detail'} element={<MediaDetail />} />
                    <Route path={'contact'} element={<Contact />} />
                    <Route path={'resource'} element={<Policy/>} />
                </Route>
            </Routes>
        </HashRouter>
    )
}

export default Router