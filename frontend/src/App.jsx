
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Navigate } from "react-router-dom";
import React from "react";
import Login from "./components/login/login";
import Home from "./pages/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Contact from "./pages/Contact/Contact";
import Products from "./pages/Products/Products";
import History from "./components/History/History";
import New from "./components/New/New";
import RootLayout from "./layouts/RootLayout/RootLayout";
import Signup from "./components/Signup/Signup";
const LazyAbout = React.lazy(() => import('./pages/About/About'));


const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<Signup/>} />
        <Route path="app" element={<RootLayout />}>
            <Route index element={<Navigate to="home" replace />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<React.Suspense fallback="loading"> <LazyAbout /> </React.Suspense>}> </Route>
            <Route path="contact" element={<Contact />} />
            <Route path="products" element={<Products />}>
                <Route index element={<History />} />
                <Route path="history" element={<History />} />
                <Route path="new" element={<New />} />
            </Route>
            <Route path="*" element={<NotFound />}></Route>
        </Route></>
))

export default function App() {
    return (

        <RouterProvider router={router} />

    )
}