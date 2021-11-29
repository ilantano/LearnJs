import { combineReducers } from "redux";

import globalReducer from "../store/global/reducer";
import userReducer from "../store/user/reducer";

export default function createReducer(asyncReducers) {
  return combineReducers({
    global: globalReducer,
    user: userReducer,
    ...asyncReducers,
  });
}
