import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/layouts/navbar/Navbar";
import Footer from "./components/layouts/footer/Footer";
import Home from "./components/pages/home/Home";
import "./App.css";

function App() {
    return ( <
        div className = "wrapper" >
        <
        BrowserRouter >
        <
        Navbar / >
        <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        /> < /
        Routes > <
        Footer / >
        <
        /BrowserRouter> < /
        div >
    );
}

export default App;