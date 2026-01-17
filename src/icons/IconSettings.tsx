import React, { useEffect, useRef } from "react";
import rough from "roughjs/bin/rough";
import { useDrawuiTheme } from "../theme";
import type { DrawuiIconProps } from "./types";

export const IconSettings: React.FC<DrawuiIconProps> = ({
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

    const gear = rc.circle(12, 12, 14, {
      stroke: strokeColor,
      strokeWidth: stroke.width,
      roughness: theme.roughness.roughness,
      bowing: theme.roughness.bowing,
      fill: "transparent",
    });

    svgRef.current.appendChild(gear);

    // gear theets
    for (let i = 0; i < 8; i++) {
      const angle = (i * Math.PI * 2) / 8;
      const x1 = 12 + 7 * Math.cos(angle);
      const y1 = 12 + 7 * Math.sin(angle);
      const x2 = 12 + 10 * Math.cos(angle);
      const y2 = 12 + 10 * Math.sin(angle);
      const tooth = rc.line(x1, y1, x2, y2, {
        stroke: strokeColor,
        strokeWidth: stroke.width,
        roughness: theme.roughness.roughness,
        bowing: theme.roughness.bowing,
      });
      svgRef.current.appendChild(tooth);
    }
  }, [theme, strokeWeight, color]);

  return (
    <svg ref={svgRef} width={size} height={size} viewBox="0 0 24 24" className={className} />
  );
};
