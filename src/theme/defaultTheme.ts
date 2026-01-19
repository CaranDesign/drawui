import type { DrawuiTheme } from "./types";

export const defaultDrawuiTheme: DrawuiTheme = {
  stroke: {
    thin: {
      color: "#333",
      width: 1.5,
    },
    medium: {
      color: "#333",
      width: 2.5,
    },
    thick: {
      color: "#333",
      width: 4,
    },
  },

  roughness: {
    roughness: 3,
    bowing: 2,
  },

  fill: {
    background: "#ccccccff",
  },

  radius: {
    none: 0,
    sm: 6,
    md: 10,
    lg: 16,
    full: 30,
  },

  buttonSize: {
    sm: {
      width:100,
      height: 40,
      fontSize: 12,
    },
    md: {
      width:130,
      height:50,
      fontSize: 15,
    },
    lg: {
      width:150,
      height:60,
      fontSize: 18,
    },
    xl: {
      width:170,
      height:70,
      fontSize: 20,
    },
  },

  inputSize: {
    sm: {
      height: 32,
      fontSize: 12,
      paddingX: 8,
    },
    md: {
      height: 40,
      fontSize: 14,
      paddingX: 12,
    },
    lg: {
      height: 48,
      fontSize: 16,
      paddingX: 16,
    },
    xl: {
      height: 48,
      fontSize: 16,
      paddingX: 16,
    },
  },

  
};
