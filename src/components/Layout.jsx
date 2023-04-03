import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout (props) {
    return (
        <main className={props.darkMode ? "dark" : ""}>
            <Header 
                clickHandler={props.toggleDarkMode}
                darkMode={props.darkMode} 
            />
            <Outlet />
        </main>
    )
}