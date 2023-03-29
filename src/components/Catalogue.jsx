import React from "react";
import CountryCard from "./CountryCard";
import arrow from "../assets/arrow.svg"
import dArrow from "../assets/d-arrow.svg"

export default function Catalogue(props) {  

    function toggleSelect() {
        document.getElementById("select__options").classList.toggle("hidden")
    }

    const countryCards = props.countryData.map(country => {
        return (
            <CountryCard 
                visitThisCountryPage={props.visitThisCountryPage}
                key={country.cca2}
                flag={country.flags.png}
                id={country.cca2}
                name={country.name.common} 
                population={country.population}
                region={country.region}
                capital={country.capital}
            />
        ) 
    })

    return (
        <div className="catalogue">
            <div className="container">
                <div className="nav">
                    <div className="input-wrap">
                        <input 
                            type="text" 
                            placeholder="Search for a country..." 
                            className="country-search" 
                        />
                    </div>
                    <div className="select" onClick={toggleSelect} >
                        Filter by Region <img className="select__arrow" src={props.darkMode ? dArrow : arrow} />
                        <ul className="select__options hidden" id="select__options">
                            <li className="select__option" value="Africa">Africa</li>
                            <li className="select__option" value="America">America</li>
                            <li className="select__option" value="Asia">Asia</li>
                            <li className="select__option" value="Europe">Europe</li>
                            <li className="select__option" value="Oceania">Oceania</li>
                        </ul>
                    </div>
                </div>
                <div className="countrycards-wrapper">
                    {countryCards}
                    {/* <CountryCard 
                        visitThisCountryPage={props.visitThisCountryPage}
                    />
                    <CountryCard />
                    <CountryCard />
                    <CountryCard />
                    <CountryCard />
                    <CountryCard />
                    <CountryCard />
                    <CountryCard /> */}
                </div>
            </div>
        </div>
    )
}