import type { StrokeWeight, RadiusToken, SizeToken } from "../../theme/types";
import type { InputHTMLAttributes } from "react";

export interface DrawuiInputProps extends InputHTMLAttributes<HTMLInputElement> {
  strokeWeight?: StrokeWeight;
  radius?: RadiusToken;
  inputSize: SizeToken;
  backgroundColor?: string;
}
