import React from "react";

export default function Header(props) {
    return (
        <header className="header">
            <div className="container">
                <a href="./" className="logo">Where in the world?</a>
                <div className="darkmode-toggler" onClick={props.clickHandler}>
                    <p>Dark Mode</p>
                </div>
            </div>
        </header>
    )
}