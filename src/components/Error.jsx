import React from "react"
import { useRouteError } from "react-router-dom";

export default function Error() {
    const error = useRouteError()
    return (
        <div className="container">
            <h2>An error occurred: {error.message}🤨</h2>
            <pre>{error.status} - {error.statusText}</pre>
        </div>
    )
}