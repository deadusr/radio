export default class MusicServices {

  __apiBase = 'https://radio-appp.herokuapp.com/api';

  getRadio = async (genre) => {
    return await this.__getData(`/radio/${genre}`);
  }

  getMusic = async id => {
    return await this.__getData(`/music/${id}`)
  }

  __getData = path => {
    return fetch(`${this.__apiBase}${path}`, {
      method: 'GET',
      mode: 'cors'
    })
      .then((res) => res.json()
        .then(data => data))
      .catch(err => console.log(err))
  }

}
