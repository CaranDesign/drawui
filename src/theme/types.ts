export type StrokeWeight  = "thin"    | "medium"  | "thick";
export type RadiusToken   = "none"    | "sm"      | "md"      | "lg"  | "full";
export type SizeToken     = "sm"      | "md"      | "lg"      | "xl";
export type FillStyles    = "hachure" | "solid"   | "zigzag"  | "cross-hatch" | "dots" | "sunburst" | "dashed" | "zigzag-line";

export interface DrawuiButtonSize {
  width: number,
  height: number,
  fontSize: number,
}

export interface DrawuiInputSize {
  height: number,
  fontSize: number,
  paddingX: number,
}
export interface DrawuiStroke {
  color: string;
  width: number;
}

export interface DrawuiRoughness {
  roughness: number;
  bowing: number;
}


export interface DrawuiTheme {
    stroke: Record<StrokeWeight, DrawuiStroke>; 
    roughness: DrawuiRoughness;
  
    fill: {
        background: string;
    };
  
    radius: Record<RadiusToken, number>,

    buttonSize: Record<SizeToken, DrawuiButtonSize>,
  
    inputSize: Record<SizeToken, DrawuiInputSize>,

}