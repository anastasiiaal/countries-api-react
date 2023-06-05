export async function getAllCountriesData() {
    const res = await fetch("https://restcountries.com/v3.1/all")
    if (!res.ok) {
        throw {
            message: "Failed to fetch countries data", 
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data
}

export async function getThisCountry (cca3) {
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${cca3}`)
    if (!res.ok) {
        throw {
            message: "No country found",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return {
        "flag": data[0].flags.svg,
        "name": data[0].name.common,
        "nativeName": data[0].name.nativeName ? Object.values(Object.values(data[0].name.nativeName))[0].common : "—",
        "population": data[0].population.toLocaleString('en'),
        "region": data[0].region,
        "subregion": data[0].subregion ? data[0].subregion : "—",
        "capital": data[0].capital ? data[0].capital.join(", ") : "—",
        "tld": data[0].tld,
        "currencies": data[0].currencies ? Object.values(data[0].currencies)[0].name : "—",
        "languages": data[0].languages ? Object.values(data[0].languages).join(", ") : "—",
        "borders": data[0].borders
    }
}