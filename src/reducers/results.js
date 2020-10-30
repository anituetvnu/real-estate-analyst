const initialState = {};

const resultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_RESULT":
      const newResult = action.payload;
      return { ...state, newResult };
    default:
      return state;
  }
};

export default resultsReducer;
