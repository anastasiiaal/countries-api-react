import React from "react";
import { useParams, Link } from "react-router-dom"
import back from "../assets/back.svg"
import dBack from "../assets/d-back.svg"

export default function CountryPage(props) {

    const [thisCountry, setThisCountry] = React.useState([])
    const { cca3 } = useParams()

    // getting all countries from lS (to avoid multiple fetching) | is used later
    const countries = JSON.parse(localStorage.getItem("countries"))

    // on the component buildup, do an API call to get the data of a concrete country
    React.useEffect(() => {
        fetch(`https://restcountries.com/v3.1/alpha/${cca3}`)
            .then(res => res.json())
            .then(data => {
                setThisCountry(
                    {
                        "flag": data[0].flags.svg,
                        "name": data[0].name.common,
                        "nativeName": data[0].name.nativeName ? Object.values(Object.values(data[0].name.nativeName))[0].common : "—",
                        "population": data[0].population.toLocaleString('en'),
                        "region": data[0].region,
                        "subregion": data[0].subregion ? data[0].subregion : "—",
                        "capital": data[0].capital ? data[0].capital.join(", ") : "—",
                        "tld": data[0].tld,
                        "currencies": data[0].currencies ? Object.values(data[0].currencies)[0].name : "—",
                        "languages": data[0].languages ? Object.values(data[0].languages).join(", ") : "—",
                        "borders": data[0].borders
                    }
                )
            })
    }, [cca3])

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
                {thisCountry.length == 0 ? <h2>Loading...</h2> :
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
                }
            </div>
        </div>
    )
}