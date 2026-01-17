import { useContext } from "react";
import { DrawuiThemeContext } from "./DrawuiThemeContext";

export const useDrawuiTheme = () => {
  return useContext(DrawuiThemeContext);
};
