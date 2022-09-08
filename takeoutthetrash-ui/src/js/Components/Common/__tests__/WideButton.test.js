import * as sut from "../WideButton";

describe("getButtonType", () => {
  [
    {
      type: null,
      expectedResult: "button",
    },
    {
      type: undefined,
      expectedResult: "button",
    },
    {
      type: "",
      expectedResult: "button",
    },
    {
      type: "submit",
      expectedResult: "submit",
    },
  ].forEach((params) => {
    test(`should return ${params.expectedResult} if type is ${params.type}`, () => {
      //Act
      const result = sut.getButtonType(params.type);

      //Assert
      expect(result).toEqual(params.expectedResult);
    });
  });
});
