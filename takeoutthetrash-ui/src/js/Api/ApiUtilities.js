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
  debugger;
  console.error("API call failed. " + error);
  throw error;
}
