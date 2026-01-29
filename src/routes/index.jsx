import React from "react";
import {
    BrowserRouter, 
    Routes, 
    Route 
} from "react-router-dom"
import Home from "../Pages/Home";
import Imobi from "../Pages/Imobi";
import Login from "../Pages/Login";
import Cadastro from "../Pages/Cadastro";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Error from "../Pages/Error";

const RouterApp = () => {
    return (
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/imovel" element={<Imobi />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/cadastro" element={<Cadastro />}/>
                <Route path="*" element={<Error />}/>
            </Routes>
        <Footer />
        </BrowserRouter>
    )
}

export default RouterApp;