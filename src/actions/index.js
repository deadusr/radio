const setCurrentTrack = track => ({
  type: 'SET_CURRENT_TRACK',
  payload: track
})

const setIsPlaying = isPlaying => ({
  type: 'SET_IS_PLAYING',
  payload: isPlaying
})

const setIsMute = isMute => ({
  type: 'SET_IS_MUTE',
  payload: isMute
})

const setDevise = devise => ({
  type: 'SET_DEVISE',
  payload: devise
})

const setGenre = genre => ({
  type: 'SET_GENRE',
  payload: genre
})

export {
  setCurrentTrack,
  setIsPlaying,
  setIsMute,
  setDevise,
  setGenre
}