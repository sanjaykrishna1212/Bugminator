
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../src/pages/Home/Home";
import Contact from "../src/pages/Contact/Contact";
// import About from "../src/pages/About/About";
import Navbar from "./components/NavBar/Navbar";
import Login from "./components/login/login";
import NotFound from "./components/NotFound/NotFound";
import Products from "./pages/Products/products";
import History from "./components/History/History";
import New from "./components/New/New";
const LazyAbout = React.lazy(()=> import('./pages/About/About'))
export default function App() {

    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={
                    <React.Suspense fallback="loading">
                        <LazyAbout/>
                    </React.Suspense>}>
                    </Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="/products" element={<Products />}>
                        <Route index  element={<History />}/>
                        <Route  path="history" element={<History />}/>
                        <Route path="new" element={<New />}/>
                    </Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}