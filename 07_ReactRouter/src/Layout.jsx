import React from "react";
import { Outlet } from "react-router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import Footer from "./components/Footer/Footer";

export default function Layout(){
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}