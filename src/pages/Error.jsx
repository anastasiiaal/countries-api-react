import React from "react"
import { useRouteError } from "react-router-dom";

export default function Error() {
    const error = useRouteError()
    return (
        <div className="container error-container">
            <h2>An error occurred: {error.message} 🏳️🤔</h2>
            <p className="country__data"><span>Error {error.status}</span> - {error.statusText}</p>
        </div>
    )
}