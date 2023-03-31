import React from "react";
import { Link } from "react-router-dom";

export default function CountryCard(props) {
    return (
        <div className="countrycard">
            <Link to={`/${props.id}`}>
                <img src={props.flag} alt={`Flag of ${props.name}`} />
                <div className="countrycard__info">
                    <h2>{props.name}</h2>
                    <p className="country__data">
                        <span>Population:</span> {props.population.toLocaleString('en')}
                    </p>
                    <p className="country__data">
                        <span>Region:</span> {props.region}
                    </p>
                    <p className="country__data">
                        <span>Capital:</span> {props.capital}
                    </p>
                </div>
            </Link>
        </div>
    )
}