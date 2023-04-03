import React from "react";
import CountryCard from "./CountryCard";
import arrow from "../assets/arrow.svg"
import dArrow from "../assets/d-arrow.svg"

export default function Catalogue(props) {

    // func that toggles style of the select menu
    function toggleSelect() {
        document.getElementById("select__options").classList.toggle("hidden")
    }

    const [searchValue, setSearchValue] = React.useState("")

    function handleSearch() {
        setSearchValue(event.target.value)
    }

    const [countriesToShow, setCountriesToShow] = React.useState(props.countryData)

    React.useEffect(() => {
        if (searchValue === "") {
            setCountriesToShow(props.countryData)
        } else {
            fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
                .then(res => res.json())
                .then(data => setCountriesToShow(data))
        }
    }, [searchValue])

    let countryCards;

    // var containing all the country cards to be displayed in the catalogue
    if (!countriesToShow.length) {
        countryCards = props.countryData.map(country => {
            return (
                <CountryCard
                    key={country.cca3}
                    flag={country.flags.svg}
                    id={country.cca3}
                    name={country.name.common}
                    population={country.population}
                    region={country.region}
                    capital={country.capital}
                />
            )
        })
    } else {
        countryCards = countriesToShow.map(country => {
            return (
                <CountryCard
                    key={country.cca3}
                    flag={country.flags.svg}
                    id={country.cca3}
                    name={country.name.common}
                    population={country.population}
                    region={country.region}
                    capital={country.capital}
                />
            )
        })
    }


    return (
        <div className="catalogue">
            <div className="container">
                <div className="nav">
                    <div className="input-wrap">
                        <input
                            type="text"
                            placeholder="Search for a country..."
                            className="country-search"
                            onChange={handleSearch}
                            value={searchValue}
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
                </div>
            </div>
        </div>
    )
}