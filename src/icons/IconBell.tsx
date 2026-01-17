import React, { useEffect, useRef } from "react";
import rough from "roughjs/bin/rough";
import { useDrawuiTheme } from "../theme";
import type { DrawuiIconProps } from "./types";

export const IconBell: React.FC<DrawuiIconProps> = ({
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

    const bell = rc.path(
      "M6 18 H18 L16 12 A6 6 0 0 0 8 12 Z",
      {
        stroke: strokeColor,
        strokeWidth: stroke.width,
        roughness: theme.roughness.roughness,
        bowing: theme.roughness.bowing,
        fill: "transparent",
      }
    );
    svgRef.current.appendChild(bell);

    const clapper = rc.circle(12, 18, 2, {
      stroke: strokeColor,
      strokeWidth: stroke.width,
      roughness: theme.roughness.roughness,
      bowing: theme.roughness.bowing,
      fill: "transparent",
    });
    svgRef.current.appendChild(clapper);
  }, [theme, strokeWeight, color]);

  return (
    <svg ref={svgRef} width={size} height={size} viewBox="0 0 24 24" className={className} />
  );
};
