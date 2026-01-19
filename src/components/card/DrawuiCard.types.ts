import type { FillStyles, RadiusToken, StrokeWeight } from "../../theme/types";
import type { ReactNode } from "react";

export interface DrawuiCardProps {
  strokeWeight?: StrokeWeight;
  radius?: RadiusToken;
  width?: number;  // default 300
  height?: number; // default 200
  backgroundColor?: string;
  fillStyle?: FillStyles;
  header?: ReactNode;
  footer?: ReactNode;
  children?: ReactNode;
  className?: string;
}
