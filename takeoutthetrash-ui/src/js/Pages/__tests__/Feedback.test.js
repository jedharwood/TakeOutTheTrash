import * as sut from "../Feedback";
import * as testData from "../../CommonTestData/TestData";

describe("commentExceedsMaxLength", () => {
  [
    {
      comment: testData.commentWith149Characters,
      expectedResult: false,
    },
    {
      comment: testData.commentWith150Characters,
      expectedResult: false,
    },
    {
      comment: testData.commentWith151Characters,
      expectedResult: true,
    },
  ].forEach((params) => {
    test(`commentExceedsMaxLength should return ${params.expectedResult} in relation to comment length`, () => {
      //Act
      const result = sut.commentExceedsMaxLength(params.comment);

      //Assert
      expect(result).toEqual(params.expectedResult);
    });
  });
});

describe("emailAddressIsValid", () => {
  [
    {
      email: " ",
      expectedResult: false,
    },
    {
      email: "randomstring",
      expectedResult: false,
    },
    {
      email: "random.string",
      expectedResult: false,
    },
    {
      email: "random.string",
      expectedResult: false,
    },
    {
      email: "randomstring@domain.",
      expectedResult: false,
    },
    {
      email: "randomstring@domain.com",
      expectedResult: true,
    },
    {
      email: "random.string@domain.com",
      expectedResult: true,
    },
    {
      email: "random_string@domain.com",
      expectedResult: true,
    },
    {
      email: "rand0m_str1ng@domain.com",
      expectedResult: true,
    },
    {
      email: "rand0m_str1ng@domain.co.uk",
      expectedResult: true,
    },
    {
      email: "rand0m_str1ng@domain.co.jp",
      expectedResult: true,
    },
    {
      email: "nathanbarley@trashbat.co.ck",
      expectedResult: true,
    },
  ].forEach((params) => {
    test(`emailAddressIsValid should return ${params.expectedResult} in relation to email address validity`, () => {
      //Arrange
      const formValues = {
        comment: "",
        email: params.email,
      };

      //Act
      const result = sut.emailAddressIsValid(formValues);

      //Assert
      expect(result).toEqual(params.expectedResult);
    });
  });
});

describe("disableFormSubmit", () => {
  [
    {
      comment: testData.emptyFeedbackFormValues,
    },
    {
      comment: testData.whitespaceFeedbackFormValues,
    },
    {
      comment: testData.commentWith151Characters,
    },
    {
      comment: testData.invalidEmailAddressFormValues,
    },
  ].forEach((params) => {
    test(`disableFormSubmit should return true if conditions not met`, () => {
      //Act
      const result = sut.disableFormSubmit(params.comment);

      //Assert
      expect(result).toEqual(true);
    });
  });

  test("should return false if conditions are satisfied", () => {
    // Arrange
    const formValues = testData.feedbackFormValues;

    // Act
    const result = sut.disableFormSubmit(formValues);

    //Assert
    expect(result).toEqual(false);
  });
});
