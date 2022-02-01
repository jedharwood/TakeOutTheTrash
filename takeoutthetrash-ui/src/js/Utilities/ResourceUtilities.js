const buildUrl = (key) => {
  const baseUrl = process.env.REACT_APP_API_URL;
  return baseUrl + key;
};

export const getPrefecturesApiUrl = () => buildUrl("/prefectures");
export const getCitiesByPrefectureIdApiUrl = (selectedPrefectureId) =>
  buildUrl("/prefectures/" + selectedPrefectureId);
export const getCityByIdApiUrl = (selectedCityId) =>
  buildUrl("/cities/" + selectedCityId);
export const getFeedbackFormApiUrl = () => buildUrl("/feedback/");
export const gitHubUrl = "http://www.github.com/jedharwood";
