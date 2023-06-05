import React from "react";
import { Link, useLoaderData } from "react-router-dom"
import back from "../assets/back.svg"
import dBack from "../assets/d-back.svg"

import { getThisCountry } from "../api"

export function loader ({ params }) {    // using link params to get the code
    return getThisCountry(params.cca3)
}

export default function CountryPage(props) {
    // receiving country data from loader fucntion
    const thisCountry = useLoaderData()

    // getting all countries from lS (to avoid multiple fetching) | is used later
    const countries = JSON.parse(localStorage.getItem("countries"))

    let borderElements = thisCountry.borders;    // get the fetched borders data to check if empty or not
    let borderElementsToShow;
    let arrayOfBorderCountries = []

    if (borderElements === undefined) {          // if no border el-s found, render a `—`
        borderElementsToShow = (<p className="country__data"> — </p>)
    } else {                                     // else push their cca3 and theit names in arrayOfBorderCountries[]
        countries.map(country => {
            if (borderElements.includes(country.cca3)) {
                arrayOfBorderCountries.push({
                    code: country.cca3,
                    name: country.name.common
                })
            }
        })

        // out of arrayOfBorderCountries[], render div el-s with cca3 & name
        borderElementsToShow = arrayOfBorderCountries.map(country => {
            return (
                <Link to={`/${country.code}`} key={country.code}>
                    <div key={country.code} className="border-country">{country.name}</div>
                </Link>
            )
        })
    }

    return (
        <div className="country-page">
            <div className="container">
                <Link to={"/"}>
                    <div className="btn-back">
                        <img src={props.darkMode ? dBack : back} alt="Back" /> Back
                    </div>
                </Link>

                <div className="country">
                    <div className="country__flag">
                        <img src={thisCountry.flag} alt={`Flag of ${thisCountry.name}`} />
                    </div>
                    <div className="country__info">
                        <h1 className="country__name">{thisCountry.name}</h1>
                        <div className="country__cols">
                            <div className="country__col">
                                <p className="country__data">
                                    <span>Native Name:</span> {thisCountry.nativeName}
                                </p>
                                <p className="country__data">
                                    <span>Population:</span> {thisCountry.population}
                                </p>
                                <p className="country__data">
                                    <span>Region:</span> {thisCountry.region}
                                </p>
                                <p className="country__data">
                                    <span>Sub Region:</span> {thisCountry.subregion}
                                </p>
                                <p className="country__data">
                                    <span>Capital:</span> {thisCountry.capital}
                                </p>
                            </div>
                            <div className="country__col">
                                <p className="country__data">
                                    <span>Top Level Domain:</span> {thisCountry.tld}
                                </p>
                                <p className="country__data">
                                    <span>Currencies:</span> {thisCountry.currencies}
                                </p>
                                <p className="country__data">
                                    <span>Languages:</span> {thisCountry.languages}
                                </p>
                            </div>
                        </div>
                        <div className="country__borders">
                            <p className="country__data">
                                <span>Border Countries:</span>
                            </p>
                            {borderElementsToShow}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}