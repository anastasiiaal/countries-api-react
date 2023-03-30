import React from "react";

export default function CountryPage(props) {

    const [thisCountry, setThisCountry] = React.useState({})

    // on the component buildup, do an API call to get the data of a concrete country
    // will probably rewrite that piece of code...
    React.useEffect(() => {
        fetch(`https://restcountries.com/v3.1/alpha/${props.id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setThisCountry(
                    {
                        "flag": data[0].flags.svg,
                        "name": data[0].name.common,
                        "nativeName": Object.values(Object.values(data[0].name.nativeName))[0].common,
                        "population": data[0].population.toLocaleString('en'),
                        "region": data[0].region,
                        "subregion": data[0].subregion,
                        "capital": data[0].capital.join(", "),
                        "languages": Object.values(data[0].languages).join(", "),
                        "tld": data[0].tld,
                        "borders": data[0].borders
                    }
                )
            })
    }, [])

    return (
        <div className="country-page">
            <div className="container">
                <div className="btn-back" onClick={props.backToCatalogue}>
                    <span>&#129044;</span> Back
                </div>
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
                                    <span>Currencies:</span> Euro
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
                            <div className="border-country">*some border country*</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}