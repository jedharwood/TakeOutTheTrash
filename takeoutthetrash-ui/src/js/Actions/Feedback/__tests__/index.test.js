import * as sut from "../index";
import * as fetch from "../../../Api/Fetch";
import * as resourceUtilities from "../../../Utilities/ResourceUtilities";
import * as actionTypes from "../../../Constants/ActionType";
import * as citiesSelectors from "../../../Selectors/Cities/index";
import * as feedbackSelectors from "../../../Selectors/Feedback/index";
import * as testData from "../../../CommonTestData/TestData";

describe("feedback action", () => {
  describe("feedbackFormValuesUpdated", () => {
    test("should dispatch FEEDBACK_FORM_VALUES_UPDATED action", () => {
      // Arrange
      const feedbackFormValues = testData.feedbackFormValues;

      // Act
      const result = sut.feedbackFormValuesUpdated(feedbackFormValues);

      // Assert
      expect(result).toEqual({
        type: actionTypes.FEEDBACK_FORM_VALUES_UPDATED,
        feedbackFormValues,
      });
    });
  });

  describe("postFeedbackForm", () => {
    test("when result is not ok should dispatch a POST_FEEDBACK_FORM_FAILED action", async () => {
      // Arrange
      const feedbackFormApiUrl = "feedbackFormApiUrl";

      citiesSelectors.getCityId = jest
        .fn()
        .mockReturnValue(testData.cityWithRules.id);

      feedbackSelectors.getFeedbackFormValues = jest
        .fn()
        .mockReturnValue(testData.feedbackFormValues);

      resourceUtilities.getFeedbackFormApiUrl = jest
        .fn()
        .mockReturnValue(feedbackFormApiUrl);

      const response = {
        ok: false,
      };

      fetch.postJson = jest.fn(
        () => new Promise((resolve) => resolve(response))
      );

      const dispatch = jest.fn();
      const getState = jest.fn();

      // Act
      await sut.postFeedbackForm()(dispatch, getState);

      // Assert
      expect(dispatch.mock.calls.length).toEqual(2);

      expect(dispatch.mock.calls[0]).toEqual([
        {
          type: actionTypes.POST_FEEDBACK_FORM_REQUESTED,
        },
      ]);

      expect(dispatch.mock.calls[1]).toEqual([
        {
          type: actionTypes.POST_FEEDBACK_FORM_FAILED,
        },
      ]);
    });

    test("when fetch throws an error should dispatch a POST_FEEDBACK_FORM_FAILED action", async () => {
      // Arrange
      const feedbackFormApiUrl = "feedbackFormApiUrl";

      citiesSelectors.getCityId = jest
        .fn()
        .mockReturnValue(testData.cityWithRules.id);

      feedbackSelectors.getFeedbackFormValues = jest
        .fn()
        .mockReturnValue(testData.feedbackFormValues);

      resourceUtilities.getFeedbackFormApiUrl = jest
        .fn()
        .mockReturnValue(feedbackFormApiUrl);

      fetch.postJson = jest.fn(
        () =>
          new Promise(() => {
            throw new Error("bang");
          })
      );

      const dispatch = jest.fn();
      const getState = jest.fn();

      // Act
      await sut.postFeedbackForm()(dispatch, getState);

      // Assert
      expect(dispatch.mock.calls.length).toEqual(2);

      expect(dispatch.mock.calls[0]).toEqual([
        {
          type: actionTypes.POST_FEEDBACK_FORM_REQUESTED,
        },
      ]);

      expect(dispatch.mock.calls[1]).toEqual([
        {
          type: actionTypes.POST_FEEDBACK_FORM_FAILED,
        },
      ]);
    });

    test("when result is ok should dispatch a POST_FEEDBACK_FORM_SUCCEEDED action", async () => {
      // Arrange
      const feedbackFormApiUrl = "feedbackFormApiUrl";

      citiesSelectors.getSelectedCityId = jest
        .fn()
        .mockReturnValue(testData.cityWithRules.id);

      feedbackSelectors.getFeedbackFormValues = jest
        .fn()
        .mockReturnValue(testData.feedbackFormValues);

      resourceUtilities.getFeedbackFormApiUrl = jest
        .fn()
        .mockReturnValue(feedbackFormApiUrl);

      const response = {
        ok: true,
      };

      fetch.postJson = jest.fn(
        () => new Promise((resolve) => resolve(response))
      );

      const dispatch = jest.fn();
      const getState = jest.fn();

      // Act
      await sut.postFeedbackForm()(dispatch, getState);

      // Assert
      expect(dispatch.mock.calls.length).toEqual(2);

      expect(dispatch.mock.calls[0]).toEqual([
        {
          type: actionTypes.POST_FEEDBACK_FORM_REQUESTED,
        },
      ]);

      expect(dispatch.mock.calls[1]).toEqual([
        {
          type: actionTypes.POST_FEEDBACK_FORM_SUCCEEDED,
        },
      ]);
    });
  });

  describe("openFeedbackFormButtonClicked", () => {
    test("should dispatch an OPEN_FEEDBACK_FORM_BUTTON_CLICKED action", async () => {
      // Act
      const result = sut.openFeedbackFormButtonClicked();

      // Assert
      expect(result).toEqual({
        type: actionTypes.OPEN_FEEDBACK_FORM_BUTTON_CLICKED,
      });
    });
  });

  describe("cancelRetryPostButtonClicked", () => {
    test("should dispatch an CANCEL_RETRY_POST_BUTTON_CLICKED action", async () => {
      // Act
      const result = sut.cancelRetryPostButtonClicked();

      // Assert
      expect(result).toEqual({
        type: actionTypes.CANCEL_RETRY_POST_BUTTON_CLICKED,
      });
    });
  });

  describe("enableEmailFormFieldToggled", () => {
    test("should dispatch an ENABLE_EMAIL_FORM_FIELD_TOGGLED action", async () => {
      // Act
      const result = sut.enableEmailFormFieldToggled();

      // Assert
      expect(result).toEqual({
        type: actionTypes.ENABLE_EMAIL_FORM_FIELD_TOGGLED,
      });
    });
  });
});
