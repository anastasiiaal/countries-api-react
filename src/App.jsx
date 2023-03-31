import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

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

    function toggleDarkMode() {
        setDarkMode(prevMode => prevMode = !prevMode)
    }

    return (
        <BrowserRouter>
            <main className={darkMode ? "dark" : ""}>
                <Header
                    clickHandler={toggleDarkMode}
                    darkMode={darkMode}
                />
                <Routes>
                    <Route path="/" element={
                        <Catalogue 
                            darkMode={darkMode} 
                            countryData={countryData}
                        />
                    } />
                    <Route path="/:cca2" element={<CountryPage />} />
                </Routes>
            </main>
        </BrowserRouter>
    )
}

