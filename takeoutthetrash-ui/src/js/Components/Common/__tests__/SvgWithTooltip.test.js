import * as sut from "../SvgWithTooltip";
import * as testData from "../../../CommonTestData/TestData";

describe("getContent", () => {
  [
    {
      svgName: sut.CALENDAR,
      type: testData.tooltipTypeDefault,
      expectedResult: testData.tooltipTypeDefault.irregularFrequency,
    },
    {
      svgName: "",
      type: testData.tooltipTypeDefault,
      expectedResult: testData.tooltipTypeDefault.description,
    },
    {
      svgName: "Another string",
      type: testData.tooltipTypeDefault,
      expectedResult: testData.tooltipTypeDefault.description,
    },
    {
      svgName: null,
      type: testData.tooltipTypeDefault,
      expectedResult: testData.tooltipTypeDefault.description,
    },
    {
      svgName: undefined,
      type: testData.tooltipTypeDefault,
      expectedResult: testData.tooltipTypeDefault.description,
    },
    {
      svgName: "",
      type: testData.tooltipTypeWithDescriptionAndInstructions,
      expectedResult: (
        <div>
          A description.
          <div className="mt-2">Some instructions.</div>
        </div>
      ),
    },
    {
      svgName: "",
      type: testData.tooltipTypeWithNoDescriptionButInstructions,
      expectedResult: testData.tooltipTypeWithNoDescriptionButInstructions.instructions,
    },
  ].forEach((params) => {
    test(`should return ${params.expectedResult} from the provided data if svgName is ${params.svgName}`, () => {
      //Act
      const result = sut.getContent(params.svgName, params.type);

      //Assert
      expect(result).toEqual(params.expectedResult);
    });
  });
});
