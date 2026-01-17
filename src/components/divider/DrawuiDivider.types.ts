import type { StrokeWeight } from "../../theme/types";

export interface DrawuiDividerProps {
  strokeWeight?: StrokeWeight;
  width?: number | string; 
  vertical?: boolean;  
  className?: string;
}
