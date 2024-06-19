import React from "react";
import NavBar from "./components/navBar/NavBar.jsx";
import Home from "./Views/Home.jsx";
import Footer from "./components/Footer/Footer.jsx"

// Entry Point file so it can inject all the HTML fo the website.
//Here we will add the views of the website. The styling will be done inside the views/components files.
const Layout  = () =>{
    return(
        <>
        <NavBar brand="Start BootsTrap" />
        <div className="container col-lg-10">
        <Home/>
        </div>
        <Footer title="Copyright© Your Website 2024"/>
        </>  
    )

}

export default Layout