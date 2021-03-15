import { combineReducers } from "redux";
import feedReducer from "./feed/reducer";
import authReducer from "./auth/reducer";
import postPageReducer from "./postPage/reducer";

const reducer = combineReducers({
  feed: feedReducer,
  postPage: postPageReducer,
  auth: authReducer,
});

export default reducer;
