import { handleResponse, handleError } from "./ApiUtilities";

export function getJson(url) {
  return fetch(url).then(handleResponse).catch(handleError);
}
