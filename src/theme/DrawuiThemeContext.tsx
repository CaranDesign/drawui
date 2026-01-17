import { createContext } from "react";
import { defaultDrawuiTheme } from "./defaultTheme";
import type { DrawuiTheme } from "./types";

export const DrawuiThemeContext =
  createContext<DrawuiTheme>(defaultDrawuiTheme);
