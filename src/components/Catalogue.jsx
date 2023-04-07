import React, { useState, useEffect } from "react";
import CountryCard from "./CountryCard";
import arrow from "../assets/arrow.svg"
import dArrow from "../assets/d-arrow.svg"
import close from "../assets/close.svg"
import dClose from "../assets/d-close.svg"

export default function Catalogue(props) {
    // state keeping data of countries to show
    const [countriesToShow, setCountriesToShow] = useState(props.countryData)
    // state keeping your search request
    const [searchValue, setSearchValue] = useState(
        localStorage.getItem("searchValue") || ""
    );

    // func that toggles style of the select menu
    function toggleSelect() {
        document.getElementById("select__options").classList.toggle("hidden")
    }
    
    function handleSearch(event) {
        removeFilters()
        document.getElementById('remove-search').style.display = "block"
        setSearchValue(event.target.value)
    }

    useEffect(() => {
        if (searchValue === "") {
            setCountriesToShow(props.countryData)
            removeSearch()
        } else {
            localStorage.setItem("searchValue", searchValue)
            fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
                .then(res => res.json())
                .then(data => setCountriesToShow(data))
        }
    }, [searchValue])

    // function that handles filter by region
    function filterRegion (region) {
        document.querySelector("#select > p").innerText = region
        document.getElementById('remove-filter').style.display = "block"
        removeSearch()
        fetch(`https://restcountries.com/v3.1/region/${region}`)
            .then(res => res.json())
            .then(data => setCountriesToShow(data))
    }

    function removeFilters () {
        document.querySelector("#select > p").innerText = "Filter by Region"
        document.getElementById('remove-filter').style.display = "none"
        setCountriesToShow(props.countryData)
    }

    function removeSearch() {
        document.getElementById('remove-search').style.display = "none"
        localStorage.setItem("searchValue", "")
        setSearchValue("")
    }

    // var that will contain all the country cards to be displayed in the catalogue
    let countryCards;
    let dataToShow;
    // checks if no country is found in search
    let notFound = false;
    
    if (countriesToShow.length) {
        dataToShow = countriesToShow
    } else {
        if(searchValue !== "") {
            notFound = true
        }
        dataToShow = props.countryData
    }

    countryCards = dataToShow.map(country => {
        return (
            <CountryCard
                key={country.cca3}
                flag={country.flags.svg}
                id={country.cca3}
                name={country.name.common}
                population={country.population}
                region={country.region}
                capital={country.capital ? country.capital : "—"}
            />
        )
    })

    return (
        <div className="catalogue">
            <div className="container">
                <div className="nav">
                    <div className="input-wrap select-wrapper">
                        <input
                            type="text"
                            placeholder="Search for a country..."
                            className="country-search"
                            onChange={handleSearch}
                            value={searchValue}
                        />
                        <img 
                            id="remove-search" 
                            src={props.darkMode ? dClose : close} 
                            alt="Remove filters" 
                            onClick={removeSearch} 
                        />
                    </div>
                    <div className="select-wrapper">
                        <div className="select" id="select" onClick={toggleSelect} >
                            <p> Filter by Region</p> <img className="select__arrow" src={props.darkMode ? dArrow : arrow} alt="Select arrow" />
                            <ul className="select__options hidden" id="select__options">
                                <li onClick={() => filterRegion("Africa")} className="select__option">Africa</li>
                                <li onClick={() => filterRegion("America")} className="select__option">America</li>
                                <li onClick={() => filterRegion("Antarctic")} className="select__option">Antarctic</li>
                                <li onClick={() => filterRegion("Asia")} className="select__option">Asia</li>
                                <li onClick={() => filterRegion("Europe")} className="select__option">Europe</li>
                                <li onClick={() => filterRegion("Oceania")} className="select__option">Oceania</li>
                            </ul>
                        </div>
                        <img 
                            id="remove-filter" 
                            src={props.darkMode ? dClose : close} 
                            alt="Remove filters" 
                            onClick={removeFilters} 
                        />
                    </div>
                </div>
                <div className="countrycards-wrapper">
                    {notFound ? <h2>No countries found</h2> : countryCards}
                </div>
            </div>
        </div>
    )
}