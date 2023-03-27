import React from "react";

export default function CountryCard() {
    return (
        <div className="countrycard">
            <img src="./src/assets/flag.png" alt="*Country name* flag" />
            <div className="countrycard__info">
                <h2>Belgium</h2>
                <p className="country__data">
                    <span>Population:</span> 11,319,511
                </p>
                <p className="country__data">
                    <span>Region:</span> Europe
                </p>
                <p className="country__data">
                    <span>Capital:</span> Brussels
                </p>
            </div>
        </div>
    )
}