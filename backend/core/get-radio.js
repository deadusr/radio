const fs = require('fs');
const path = require('path');
const data = JSON.parse(fs.readFileSync(path.join(__dirname, './music-list.json'), 'utf-8'));
const state = {
  currentTrack: 1,
  nextTrack: 3,
  trackList: shuffleArr(data.musicList.map(el=> el.id))
};

let newState = getNewState();

const getRadio = () => {
  const oldState = newState;
  newState = getNewState(newState)
  return oldState;
}


function getNewState({ trackList } = state) {
  const newNextTrack = trackList[1];
  let newTrackList = trackList.length === 2 ?
    generateNewTrackList(trackList) :
    [...trackList.slice(1)]

  return {
    currentTrack: trackList[0],
    nextTrack: newNextTrack,
    trackList: newTrackList
  }
}

function generateNewTrackList() {
  return shuffleArr(state.trackList)
}

function makeArr(length) {
  const arr = [];
  for (let i = 1; i < length + 1; i++) {
    arr.push(i);
  }
  return arr;
}

function shuffleArr(arr) {
  let j, temp;
  for (let i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1))
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

module.exports = getRadio;