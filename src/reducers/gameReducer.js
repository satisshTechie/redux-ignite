const initialState = {
  popular: [],
  newGames: [],
  upComingGames: [],
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return { ...state };
    default:
      return { ...state };
  }
};

export default gameReducer;
