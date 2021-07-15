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

function mapToNewArray(data) {
  const newArray = data.cities.map((city) => ({ ...city }));

  return newArray;
}

export async function handleResponseCitiesByPrefectureId(response) {
  if (response.ok)
    return response
      .json()
      .then((data) => ({ ok: response.ok, jsonData: mapToNewArray(data) }));
  if (response.status === 400) {
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error("Network response was not ok.");
}
