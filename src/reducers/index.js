import { combineReducers } from "redux";
import resultsReducer from "./results";
import locationReducer from "./location";

const rootReducer = combineReducers({
  results: resultsReducer,
  location: locationReducer,
});
export default rootReducer;
