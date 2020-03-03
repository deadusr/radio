export default class {

  constructor() {
    this.apiBase = 'https://api.spotify.com/v1/';
    this.authData = fetch(`https://accounts.spotify.com/api/token`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        "Authorization": "Basic MzVlNmMxYjJhMDg3NGNjODljOGNmYjRiYThjNDU4NzQ6MTlhNzNmZjQyMjU3NDdjZDk4NDU2NzkwY2FiNzU4NDE="
      },
      body: 'grant_type=client_credentials'
    })
      .then(response => {
        return response.json()
          .then(body => {
            return body
          })
      })
      .catch(error => console.error(error))
  }

  getTrack = async id => await this.getData(`tracks/${id}`)

  getData = async (path) => {
    const authData = await this.authData;
    return await fetch(`${this.apiBase}${path}`, {
      method: 'GET',
      headers: {
        "Authorization": `${authData.token_type} ${authData.access_token}`
      }
    })
      .then(response => {
        return response.json()
          .then(body => body)
      })
  }
}
