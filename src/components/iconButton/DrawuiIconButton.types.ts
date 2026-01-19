import type { FillStyles, RadiusToken, SizeToken, StrokeWeight } from "../../theme/types";

export interface DrawuiIconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  strokeWeight?: StrokeWeight;
  size?: SizeToken;
  icon: React.ReactNode;
  fillStyle?: FillStyles;
  radius?: RadiusToken;
  backgroundColor?: string;
}
