const prefix = process.env.API_URL;
const buildKey = (key) => prefix + key;

export const getString = (key) => localStorage[buildKey(key)];
