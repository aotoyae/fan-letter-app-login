import { useState } from "react";

export const useInput = (initialState = "") => {
  const [value, setValue] = useState(initialState);

  const handler = (e) => {
    setValue(e.target.value);
  };

  const resetInput = () => {
    setValue(initialState);
  };

  return [value, handler, resetInput];
};
