import { prop, compose, defaultTo, propEq } from "ramda";

const getFeedbackState = prop("feedback");

export const getFeedbackFormValues = compose(
  defaultTo({}),
  prop("feedbackFormValues"),
  getFeedbackState
);

export const isPostingFeedbackForm = compose(
  propEq("isPostingFeedbackForm", true),
  getFeedbackState
);

export const postingFeedbackFormSucceeded = compose(
  propEq("postingFeedbackFormSucceeded", true),
  getFeedbackState
);

export const postingFeedbackFormFailed = compose(
  propEq("postingFeedbackFormFailed", true),
  getFeedbackState
);

export const getPostFailureCount = compose(
  defaultTo(0),
  prop("postFailureCount"),
  getFeedbackState
);

export const displayRetryFailureMessage = compose(
  propEq("displayRetryFailureMessage", true),
  getFeedbackState
);
