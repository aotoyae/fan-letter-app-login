import { useState } from "react";

export const useInput = () => {
  const [value, setValue] = useState("");

  const handler = (e) => {
    setValue(e.target.value);
  };

  return [value, handler];
};
