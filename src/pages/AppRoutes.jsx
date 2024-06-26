import { BrowserRouter, Routes, Route } from "react-router-dom";
import Films from "./Films/Films";
import Home from "./Home/Home";

export default function AppRoutes() {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/films" element={<Films />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}