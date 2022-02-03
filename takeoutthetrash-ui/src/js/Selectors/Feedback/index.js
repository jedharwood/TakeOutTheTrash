import { prop, compose, defaultTo } from "ramda";

const getFeedbackState = prop("feedback");

export const getFeedbackFormValues = compose(
  defaultTo({}),
  prop("feedbackFormValues"),
  getFeedbackState
);
