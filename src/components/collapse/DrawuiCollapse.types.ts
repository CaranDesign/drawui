import type { ReactNode } from "react";
import type { FillStyles, RadiusToken, StrokeWeight } from "../../theme/types";

export interface DrawuiCollapseProps {
  header: ReactNode;
  children: ReactNode;
  strokeWeight?: StrokeWeight;
  fillStyle?: FillStyles;
  radius?: RadiusToken;
  className?: string;
  width?: number; 
}
