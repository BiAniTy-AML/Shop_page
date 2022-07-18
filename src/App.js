import "./styles/Styles.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />

                <Routes>
                    <Route path="/" element={<Homepage />}></Route>
                    <Route path="/shop" element={<Shop />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
