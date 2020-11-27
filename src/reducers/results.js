const initialState = [];

const resultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_RESULT":
      const newResults = [...state];
      newResults.push(action.payload);
      return newResults;
    default:
      return state;
  }
};

export default resultsReducer;
