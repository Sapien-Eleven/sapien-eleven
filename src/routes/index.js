import {HashRouter, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Academy from "../pages/Academy";
import Marketplace from "../pages/Marketplace";
import Blog from "../pages/Blog";

const Router = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                    <Route path={'academy'} element={<Academy />} />
                    <Route path={'about'} element={<About />} />
                    <Route path={'marketplace'} element={<Marketplace />} />
                    <Route path={'blog'} element={<Blog />} />
                    <Route path={'contact'} element={<Contact />} />
                </Route>
            </Routes>
        </HashRouter>
    )
}

export default Router