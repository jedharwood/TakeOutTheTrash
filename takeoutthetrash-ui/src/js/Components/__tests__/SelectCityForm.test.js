import { CitiesArrayIsEmpty } from "../SelectCityForm";

describe("Select city form", () => {
  test("CitiesArrayIsEmpty should return true if prefecture has an empty cities array", () => {
    // Arrange
    const prefecture = { id: 45, name: "Yamagata", cities: [] };

    // Act
    const result = CitiesArrayIsEmpty(prefecture);

    //Assert
    expect(result).toEqual(true);
  });

  test("CitiesArrayIsEmpty should return false if prefecture has a populated cities array", () => {
    // Arrange
    const prefecture = {
      id: 41,
      name: "Tokyo",
      cities: [{ id: 4, name: "Koenji", rules: [] }],
    };

    // Act
    const result = CitiesArrayIsEmpty(prefecture);

    //Assert
    expect(result).toEqual(false);
  });
});
