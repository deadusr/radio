const initialState = {
  currentTrack: {
    link: '',
    title: '',
    artist: ''
  }
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

    default:
      return state
  }
}

export default reducer;