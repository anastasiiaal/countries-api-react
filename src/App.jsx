import React, { useState } from 'react'

import Header from './components/Header'
import Catalogue from './components/Catalogue'
import CountryPage from './components/CountryPage'

export default function App() {

    const [darkMode, setDarkMode] = useState(false)
    const [catalogue, setCatalogue] = useState(true)

    function toggleDarkMode() {
        setDarkMode(prevMode => prevMode = !prevMode)
    }

    function backToCatalogue() {
        setCatalogue(true)
    }

    function visitThisCountryPage() {
        setCatalogue(false)
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
                />
                :
                <CountryPage
                    backToCatalogue={backToCatalogue}
                />
            }
        </main>
    )
}