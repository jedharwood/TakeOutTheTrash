import { combineReducers } from "redux";
import prefectures from "./Prefectures/index";
import cities from "./Cities/index";
import rulesModal from "./RulesModal/index";

export default combineReducers({
  prefectures,
  cities,
  rulesModal,
});
