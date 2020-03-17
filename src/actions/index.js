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

export {
  setCurrentTrack,
  setIsPlaying,
  setIsMute,
  setDevise
}