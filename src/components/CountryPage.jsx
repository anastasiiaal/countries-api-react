import React from "react";
import { useParams, Link } from "react-router-dom"

export default function CountryPage() {

    const [thisCountry, setThisCountry] = React.useState([])
    const { cca2 } = useParams()

    // on the component buildup, do an API call to get the data of a concrete country
    // will probably rewrite that piece of code...
    React.useEffect(() => {
        fetch(`https://restcountries.com/v3.1/alpha/${cca2}`)
            .then(res => res.json())
            .then(data => {
                console.log(data[0]);
                setThisCountry(
                    {
                        "flag": data[0].flags.svg,
                        "name": data[0].name.common,
                        "nativeName": Object.values(Object.values(data[0].name.nativeName))[0].common,
                        "population": data[0].population.toLocaleString('en'),
                        "region": data[0].region,
                        "subregion": data[0].subregion,
                        "capital": data[0].capital.join(", "),
                        "tld": data[0].tld,
                        "currencies": Object.values(data[0].currencies)[0].name,
                        "languages": Object.values(data[0].languages).join(", "),
                        "borders": data[0].borders
                    }
                )
            })
    }, [cca2])

    let borderElements = thisCountry.borders;
    let borderElementsToShow;

    if (borderElements === undefined) {
        borderElementsToShow = (<p className="country__data">-</p>)
    } else {
        borderElementsToShow = borderElements.map(country => {
            return (
                <Link to={`/${country}`}>
                    <div key={country} className="border-country">{country}</div>
                </Link>
            )
        })
    }

    return (
        <div className="country-page">
            <div className="container">
                <Link to={"/"}>
                    <div className="btn-back">
                        <span>&#129044;</span> Back
                    </div>
                </Link>
                <div className="country">
                    <div className="country__flag">
                        <img src={thisCountry.flag} alt="*Country name* flag" />
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