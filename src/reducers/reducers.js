const initialState = {
  currentTrack: {
    src: '',
    currentPosition: 0,
    title: '',

  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_TRACK':
      const { src, title } = action.payload;
      return {
        currentTrack: {
          src,
          currentPosition: 0,
          title,
        },
        ...state
      }

    case 'SET_CURRENT_POSITION':
      return {
        currentTrack: {
          ...state.currentTrack,
          currentPosition: action.payload
        },
        ...state
      }
    default:
      return state
  }
}

export default reducer;