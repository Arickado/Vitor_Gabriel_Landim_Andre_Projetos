const fetch = require('node-fetch');

module.exports = async function movies(movie) {
    const response = await fetch(`http://www.omdbapi.com/?apikey=7e7fa1f8&t=${movie}`)
    const json = await response.json()

    return json
}