export default class MusicServices {

  __apiBase = 'http://localhost:8000/api';

  getRadio = async () => {
    return await this.__getData('/radio');
  }

  getMusic = async id => {
    return await this.__getData(`/music/${id}`)
  }

  __getData = path => {
    return fetch(`${this.__apiBase}${path}`)
      .then((res) => res.json()
      .then(data => data))
      .catch(err => console.log(err))
  }

}
