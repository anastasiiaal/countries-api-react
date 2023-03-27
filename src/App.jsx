import React from 'react'

import Header from './components/Header'
import Catalogue from './components/Catalogue'
import CountryPage from './components/CountryPage'

export default function App() {

  const [darkMode, setDarkMode] = React.useState(false)

  function toggleDarkMode () {
    setDarkMode(prevMode => prevMode = !prevMode)
  }

  return (
    <main className={darkMode ? "dark" : ""}>
      <Header clickHandler={toggleDarkMode} darkMode={darkMode} />
      <Catalogue />
      {/* <CountryPage /> */}
    </main>
  )
}
