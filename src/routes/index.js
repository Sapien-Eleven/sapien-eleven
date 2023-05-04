import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Academy from "../pages/Academy";
import Marketplace from "../pages/Marketplace";
import Resources from "../pages/Resources";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                    <Route path={'academy'} element={<Academy />} />
                    <Route path={'about'} element={<About />} />
                    <Route path={'marketplace'} element={<Marketplace />} />
                    <Route path={'resources'} element={<Resources />} />
                    <Route path={'contact'} element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router