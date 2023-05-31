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
    return console.log(data)
}