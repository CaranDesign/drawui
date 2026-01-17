import React from "react";
import { DrawuiThemeContext } from "./DrawuiThemeContext";
import { defaultDrawuiTheme } from "./defaultTheme";
import type { DrawuiTheme } from "./types";

export const DrawuiThemeProvider: React.FC<{
  theme?: Partial<DrawuiTheme>; //allow to pass partial theme props in roder to be customizable
  children: React.ReactNode;
}> = ({ theme, children }) => {
   
  // merge allowed custom theme property to the default theme setting 
  const mergedTheme: DrawuiTheme = {
    ...defaultDrawuiTheme,
    ...theme,
    stroke: {
      ...defaultDrawuiTheme.stroke,
      ...theme?.stroke,
    },
    radius: {
      ...defaultDrawuiTheme.radius,
      ...theme?.radius,
    },
  };

  return (
    <DrawuiThemeContext.Provider value={mergedTheme}>
      {children}
    </DrawuiThemeContext.Provider>
  );
};
