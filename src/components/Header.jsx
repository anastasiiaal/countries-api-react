import React from "react";
import { Link } from "react-router-dom";
import moon from "../assets/moon.svg"
import sun from "../assets/sun.svg"

export default function Header(props) {
    return (
        <header className="header">
            <div className="container">
                <Link className="logo" to={"/"}>Where in the world?</Link>
                <div className="darkmode-toggler" onClick={props.clickHandler}>
                    <img src={props.darkMode ? sun : moon} alt="Dark mode image" />
                    <p>{props.darkMode ? "Light" : "Dark"} Mode</p>
                </div>
            </div>
        </header>
    )
}