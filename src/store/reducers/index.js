// external imports
import { combineReducers } from "redux";

// reducers import
import LoginReducer from "./login";
import SkillReducer from "./skill";
import UiReducer from "./ui";
import RouteReducer from "./route";

export default combineReducers({
  login: LoginReducer,
  skill: SkillReducer,
  ui: UiReducer,
  route: RouteReducer
});
