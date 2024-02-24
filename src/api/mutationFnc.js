import { jsonApi } from "./apiIndex";

export const addLetter = (newLetter) => jsonApi.post("/letters", newLetter);

export const editLetter = ({ id, editingText }) =>
  jsonApi.patch(`/letters/${id}`, { content: editingText });

export const deleteLetter = (id) => jsonApi.delete(`/letters/${id}`);
