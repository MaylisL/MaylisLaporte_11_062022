import React from "react";
import Footer from "../Footer";
import Header from "../header/Header";


export default function Layout(props) {
    return (
        <React.Fragment>
            <Header/>
            {props.children}
            <Footer/>
        </React.Fragment>
    )
}