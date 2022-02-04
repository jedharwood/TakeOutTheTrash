import * as apiUtilities from "./ApiUtilities";

export function getJson(url) {
  return fetch(url)
    .then(apiUtilities.handleResponse)
    .catch(apiUtilities.handleError);
}

// This function is solely for use in development with a mock api
// Once the real api is built this function will be handled there and returned on a response object
export function getCitiesJsonByIdMock(url) {
  return fetch(url)
    .then(apiUtilities.handleResponseCitiesByPrefectureId)
    .catch(apiUtilities.handleError);
}

export function postJson(url, request) {
  return fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(request),
  })
    .then(apiUtilities.handleResponse)
    .catch(apiUtilities.handleError);
}
