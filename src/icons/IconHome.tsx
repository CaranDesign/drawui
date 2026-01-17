import React, { useEffect, useRef } from "react";
import rough from "roughjs/bin/rough";
import { useDrawuiTheme } from "../theme";
import type { DrawuiIconProps } from "./types";

export const IconHome: React.FC<DrawuiIconProps> = ({
  size = 24,
  strokeWeight = "medium",
  color,
  className,
}) => {
  const theme = useDrawuiTheme();
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;
    const rc = rough.svg(svgRef.current);
    svgRef.current.innerHTML = "";

    const stroke = theme.stroke[strokeWeight];
    const strokeColor = color ?? stroke.color;

    // Casa semplice sketchy
    const path = rc.path(
      "M2 12 L12 2 L22 12 V22 H2 Z",
      {
        stroke: strokeColor,
        strokeWidth: stroke.width,
        roughness: theme.roughness.roughness,
        bowing: theme.roughness.bowing,
        fill: "transparent",
      }
    );

    svgRef.current.appendChild(path);
  }, [theme, strokeWeight, color]);

  return (
    <svg
      ref={svgRef}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
    />
  );
};
