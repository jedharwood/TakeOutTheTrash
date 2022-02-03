import { combineReducers } from "redux";
import prefectures from "./Prefectures/index";
import cities from "./Cities/index";
import rulesModal from "./RulesModal/index";
import feedback from "./Feedback/index";

export default combineReducers({
  prefectures,
  cities,
  rulesModal,
  feedback,
});
