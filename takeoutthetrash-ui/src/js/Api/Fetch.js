//import { handleResponse, handleError } from "./ApiUtils";

const handleResponse = (response) => {
  if (response.ok) return response.json();
  if (response.status === 400) {
    const error = response.text();
    throw new Error(error);
  }
  throw new Error("Network response was not ok.");
};

// Log/handle error
const handleError = (error) => {
  // eslint-disable-next-line no-console
  console.error("API call failed. " + error);
  throw error;
};

export function get(url) {
  return fetch(url).then(handleResponse).catch(handleError);
}
