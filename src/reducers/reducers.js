const initialState = {
  currentTrack: {
    link: '',
    title: '',
    artist: ''
  },
  genre: 'rock',
  isPlaying: false,
  isMute: false,
  devise: '',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_TRACK':
      const { id, title, artist, href } = action.payload;
      return {
        ...state,
        currentTrack: {
          id,
          link: href,
          title,
          artist
        }
      }

    case 'SET_IS_PLAYING':
      return {
        ...state,
        isPlaying: action.payload
      }

    case 'SET_IS_MUTE':
      return {
        ...state,
        isMute: action.payload
      }

    case 'SET_DEVISE':
      return {
        ...state,
        devise: action.payload
      }

    case 'SET_GENRE':
      return {
        ...state,
        genre: action.payload
      }


    default:
      return state
  }
}

export default reducer;