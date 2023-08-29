class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl
    this._headers = options.headers
    this._mode = options.mode
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
      mode: this._mode
    })

  }
}

export default new Api({
  baseUrl: 'https://www.freetogame.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
  mode: 'no-cors'
})