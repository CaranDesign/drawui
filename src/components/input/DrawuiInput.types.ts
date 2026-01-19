import type { StrokeWeight, RadiusToken, SizeToken, FillStyles } from "../../theme/types";
import type { InputHTMLAttributes } from "react";

export interface DrawuiInputProps extends InputHTMLAttributes<HTMLInputElement> {
  strokeWeight?: StrokeWeight;
  radius?: RadiusToken;
  inputSize: SizeToken;
  fillStyle?: FillStyles;
  backgroundColor?: string;
}
