const initialState = {
  popular: [],
  newGames: [],
  upComingGames: [],
};

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return { ...state };
    default:
      return { ...state };
  }
};

export default HomeReducer;
