import React from "react";
import CountryCard from "./CountryCard";

export default function Catalogue() {  

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
                    <select
                        id="region"
                        value=""
                        // onChange=""
                        name="region"
                    >
                        <option value="">Filter By Region</option> 
                        <option value="Africa">Africa</option>
                        <option value="America">America</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </div>
                <div className="countrycards-wrapper">
                    <CountryCard />
                    <CountryCard />
                    <CountryCard />
                    <CountryCard />
                    <CountryCard />
                    <CountryCard />
                    <CountryCard />
                    <CountryCard />
                </div>
            </div>
        </div>
    )
}