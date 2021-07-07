import { handleResponse, handleError } from "./apiUtils";

export function get(url) {
  return fetch(url).then(handleResponse).catch(handleError);
}
