import { combineReducers } from "redux";
import prefectures from "./Prefectures/index";
import cities from "./Cities/index";

export default combineReducers({
  prefectures,
  cities,
});
