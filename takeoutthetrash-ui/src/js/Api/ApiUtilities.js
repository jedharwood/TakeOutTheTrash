export async function handleResponse(response) {
  if (response.ok)
    return response
      .json()
      .then((data) => ({ ok: response.ok, jsonData: data }));
  if (response.status === 400) {
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error("Network response was not ok.");
}

export function handleError(error) {
  // eslint-disable-next-line no-console
  console.error("API call failed. " + error);
  throw error;
}

// This function is solely for use in development with a mock api
// Once the real api is built this function will be handled there and returned on a response object
export async function handleResponseCitiesByPrefectureId(response) {
  if (response.ok)
    return response
      .json()
      .then((data) => ({ ok: response.ok, jsonData: data.cities }));
  if (response.status === 400) {
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error("Network response was not ok.");
}

export async function simulateError(response) {
  throw new Error("Network response was not ok.");
}
