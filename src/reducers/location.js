const initialState = {};

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE":
      return action.payload;
    case "DELETE":
      return {};
    default:
      return state;
  }
};

export default locationReducer;
