class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl
    // this._headers = options.headers
  }

  _getJson(res) {
    if (res.ok) {
      return res.json()
    }
    return res.json().then(err => Promise.reject(err))
  }

  _request(url, options) {
    return fetch(url, options).then(this._getJson)
  }

  getGames() {
    return this._request(`${this._baseUrl}/games`, {
      headers: this._headers,
    })
  }

  getGame(id) {
    return this._request(`${this._baseUrl}/games/${id}`, {
      headers: this._headers,
    })
  }
}

export default new Api({
  // baseUrl: 'https://free-to-play-games-database.p.rapidapi.com/api',
  baseUrl: 'http://localhost:3000/api',
  // headers: {
  //   'Content-Type': 'application/json',
  //   'X-RapidAPI-Key': 'ff251e0166msh15bc41b5e3ee4dap12afa3jsn03a4c2f2dece',
  //   'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
  // },
})
