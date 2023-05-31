import React, { useState } from 'react'
import { 
    createBrowserRouter, 
    createRoutesFromElements, 
    Route, 
    RouterProvider 
} from 'react-router-dom'

import Layout from './components/Layout'
import Catalogue, {loader as catalogueLoader}  from './pages/Catalogue'
import CountryPage from './pages/CountryPage'
import Error from './components/Error'

export default function App() {
    // state holding all countries from the API
    const [countryData, setCountryData] = useState([])

    React.useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => setCountryData(data))
    }, [])

    React.useEffect(() => {
        localStorage.setItem("countries", JSON.stringify(countryData))
    }, [countryData])

    // state holding the dark mode setup
    const [darkMode, setDarkMode] = useState(false)

    React.useEffect(() => {
        const darkModeValue = JSON.parse(localStorage.getItem("darkMode"))
        if (darkModeValue !== null) {
            setDarkMode(darkModeValue)
        }
    }, [])

    function toggleDarkMode() {
        const newMode = !darkMode
        setDarkMode(newMode)
        localStorage.setItem("darkMode", JSON.stringify(newMode))
    }

    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={
            <Layout 
                toggleDarkMode={toggleDarkMode}
                darkMode={darkMode} 
            />
        }>
            <Route
                index
                element={
                    <Catalogue
                        darkMode={darkMode}
                        countryData={countryData}
                        loader={catalogueLoader}
                        errorElement={<Error />}
                    />
                }
            />
            <Route
                path=":cca3"
                element={<CountryPage darkMode={darkMode} />}
            />
        </Route>
    ))

    return (
        <RouterProvider router={router} />
    )
}

