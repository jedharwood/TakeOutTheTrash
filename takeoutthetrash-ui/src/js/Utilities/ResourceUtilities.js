const buildUrl = (key) => {
  const baseUrl = process.env.REACT_APP_API_URL;
  return baseUrl + key;
};

export const getCitiesApiUrl = () => buildUrl("/cities");
export const getPrefecturesApiUrl = () => buildUrl("/prefectures");
