const fs = require('fs');
const path = require('path');

const getMusic = async id => {
  const data = await JSON.parse(fs.readFileSync(path.join(__dirname, './music-list.json'), 'utf-8'));
  return data.musicList.find(el => el.id === id)
}

module.exports = getMusic;