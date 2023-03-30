import React, { useState } from 'react'

import Header from './components/Header'
import Catalogue from './components/Catalogue'
import CountryPage from './components/CountryPage'

export default function App() {
    // state holding all countries from the API
    const [countryData, setCountryData] = useState([])

    React.useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => setCountryData(data))
    }, [])

    // state holding the dark mode setup
    const [darkMode, setDarkMode] = useState(false)
    // state deciding which component should be displayed (catalogue || country page)
    const [catalogue, setCatalogue] = useState(true)
    // if country page is displayed, this country's id is in state
    const [thisCountryId, setThiscountryId] = useState('')

    function toggleDarkMode() {
        setDarkMode(prevMode => prevMode = !prevMode)
    }

    // func to display the catalogue when returning from the country page
    function backToCatalogue() {
        setCatalogue(true)
        setThiscountryId('');
    }

    // func to display the selected country's page
    function visitThisCountryPage(id) {
        setCatalogue(false)
        setThiscountryId(id);
    }

    return (
        <main className={darkMode ? "dark" : ""}>
            <Header
                clickHandler={toggleDarkMode}
                darkMode={darkMode}
            />
            {
                catalogue
                ?
                <Catalogue
                    darkMode={darkMode}
                    visitThisCountryPage={visitThisCountryPage}
                    countryData={countryData}
                />
                :
                <CountryPage
                    backToCatalogue={backToCatalogue}
                    id={thisCountryId}
                />
            }
        </main>
    )
}