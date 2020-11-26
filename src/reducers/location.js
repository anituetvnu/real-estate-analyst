const initialState = {};

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE":
      return action.payload;
    default:
      return state;
  }
};

export default locationReducer;
