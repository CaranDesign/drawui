import type { StrokeWeight } from "../theme/types";

export interface DrawuiIconProps {
  size?: number;          // width e height
  strokeWeight?: StrokeWeight;
  color?: string;         // overright color of the theme
  className?: string;
}
