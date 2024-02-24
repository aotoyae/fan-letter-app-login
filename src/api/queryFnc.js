import { jsonApi } from "./apiIndex";

export const getLetters = async () => {
  const { data } = await jsonApi.get(`/letters`);
  return data;
};
