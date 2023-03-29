import React, { useState } from 'react'

import Header from './components/Header'
import Catalogue from './components/Catalogue'
import CountryPage from './components/CountryPage'

export default function App() {

    const [countryData, setCountryData] = useState([])

    React.useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => setCountryData(data))
    }, [])

    const [darkMode, setDarkMode] = useState(false)
    const [catalogue, setCatalogue] = useState(true)
    const [thisCountryId, setThiscountryId] = useState('')

    function toggleDarkMode() {
        setDarkMode(prevMode => prevMode = !prevMode)
    }

    function backToCatalogue() {
        setCatalogue(true)
        setThiscountryId('');
    }

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