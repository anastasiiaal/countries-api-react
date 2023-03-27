import React from "react";
import darkEmpty from "../assets/dark-empty.svg"
import darkFull from "../assets/dark-full.svg"

export default function Header(props) {
    console.log(darkEmpty);
    return (
        <header className="header">
            <div className="container">
                <a href="./" className="logo">Where in the world?</a>
                <div className="darkmode-toggler" onClick={props.clickHandler}>
                    <img src={props.darkMode ? darkFull : darkEmpty} alt="" />
                    <p>Dark Mode</p>
                </div>
            </div>
        </header>
    )
}