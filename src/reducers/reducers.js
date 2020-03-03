const initialState = {
  currentTrack: {
    link: '',
    currentPosition: 0,
    title: '',
    artist: ''
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_TRACK':
      const { external_urls: { spotify }, name, artists, } = action.payload;
      const artist = `${artists.map(el => `${el.name} `)}`
      return {
        ...state,
        currentTrack: {
          link: spotify,
          currentPosition: 0,
          name,
          artist
        }
      }

    case 'SET_CURRENT_POSITION':
      return {
        ...state,
        currentTrack: {
          ...state.currentTrack,
          currentPosition: action.payload
        }
      }
    default:
      return state
  }
}

export default reducer;