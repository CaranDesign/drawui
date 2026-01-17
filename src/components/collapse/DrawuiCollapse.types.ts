import type { ReactNode } from "react";
import type { RadiusToken, StrokeWeight } from "../../theme/types";

export interface DrawuiCollapseProps {
  header: ReactNode;
  children: ReactNode;
  strokeWeight?: StrokeWeight;
  radius?: RadiusToken;
  className?: string;
  width?: number; 
}
