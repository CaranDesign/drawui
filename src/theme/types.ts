export type StrokeWeight = "thin" | "medium" | "thick";
export type RadiusToken = "none" | "sm" | "md" | "lg" | "full";
export type SizeToken = "sm" | "md" | "lg" | "xl";

export interface DrawuiButtonSize {
  width: number,
  height: number,
  fontSize:number,
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

    buttonSize: Record<SizeToken, DrawuiButtonSize>

}