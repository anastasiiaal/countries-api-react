import React from "react";
import { Link } from "react-router-dom";
import darkEmpty from "../assets/dark-empty.svg"
import darkFull from "../assets/dark-full.svg"

export default function Header(props) {
    return (
        <header className="header">
            <div className="container">
                <Link className="logo" to={"/"}>Where in the world?</Link>
                <div className="darkmode-toggler" onClick={props.clickHandler}>
                    <img src={props.darkMode ? darkFull : darkEmpty} alt="Dark mode image" />
                    <p>Dark Mode</p>
                </div>
            </div>
        </header>
    )
}