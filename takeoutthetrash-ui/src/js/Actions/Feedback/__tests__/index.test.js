import * as sut from "../index";
import * as fetch from "../../../Api/Fetch";
import * as resourceUtilities from "../../../Utilities/ResourceUtilities";
import * as actionTypes from "../../../Constants/ActionType";
import * as citiesSelectors from "../../../Selectors/Cities/index";
import * as testData from "../../../CommonTestData/TestData";

describe("feedback action", () => {
  describe("feedbackFormValuesUpdated", () => {
    test("should dispatch FEEDBACK_FORM_VALUES_UPDATED action", () => {
      // Arrange
      const feedbackFormValues = {
        comment: "A comment",
        email: "user@domain.com",
      };

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

      citiesSelectors.getCity = jest
        .fn()
        .mockReturnValue(testData.cityWithRules);

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

      citiesSelectors.getCity = jest
        .fn()
        .mockReturnValue(testData.cityWithRules);

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

      citiesSelectors.getCity = jest
        .fn()
        .mockReturnValue(testData.cityWithRules);

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
});
