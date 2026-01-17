import type { RadiusToken, SizeToken, StrokeWeight } from "../../theme/types";

export interface DrawuiButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  strokeWeight?: StrokeWeight;
  size?: SizeToken;
  radius?: RadiusToken;
  backgroundColor?: string;
}
