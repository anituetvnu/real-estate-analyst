const initialState = {
  test: "fewfewfwe",
};

const resultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_RESULT":
      const newResult = action.payload;
      const newState = { ...state, newResult };
      return action.payload;
    default:
      return state;
  }
};

export default resultsReducer;
