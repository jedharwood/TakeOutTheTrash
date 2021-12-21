import { prop, propEq, compose } from "ramda";

const getRulesModalState = prop("rulesModal");

export const showRulesModal = compose(
  propEq("showRulesModal", true),
  getRulesModalState
);
