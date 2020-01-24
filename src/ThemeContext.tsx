import React, { createContext } from "react";
const themeContext = createContext<[string, (theme: string) => void]>([
  "green",
  () => {}
]);
export default themeContext;
