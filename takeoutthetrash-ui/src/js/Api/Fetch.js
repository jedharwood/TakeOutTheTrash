import * as apiUtilities from "./ApiUtilities";

export function getJson(url) {
  return fetch(url)
    .then(apiUtilities.handleResponse)
    .catch(apiUtilities.handleError);
}

// This function is solely for use in development with a mock api
// Once the real api is built this function will be handled there and returned on a response object
export function getJsonByIdMock(url) {
  return fetch(url)
    .then(apiUtilities.handleResponseCitiesByPrefectureId)
    .catch(apiUtilities.handleError);
}
