const setCurrentTrack = (track) => {
  return {
    type: 'SET_CURRENT_TRACK',
    payload: track
  }
}

export {
  setCurrentTrack
}