import React, { useEffect, useRef } from "react";
import rough from "roughjs/bin/rough";
import { useDrawuiTheme } from "../theme";
import type { DrawuiIconProps } from "./types";

export const IconUser: React.FC<DrawuiIconProps> = ({
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

    const head = rc.circle(12, 8, 6, {
      stroke: strokeColor,
      strokeWidth: stroke.width,
      roughness: theme.roughness.roughness,
      bowing: theme.roughness.bowing,
      fill: "transparent",
    });
    svgRef.current.appendChild(head);

    const shoulders = rc.path(
      "M4 20 Q12 16 20 20",
      {
        stroke: strokeColor,
        strokeWidth: stroke.width,
        roughness: theme.roughness.roughness,
        bowing: theme.roughness.bowing,
        fill: "transparent",
      }
    );
    svgRef.current.appendChild(shoulders);
  }, [theme, strokeWeight, color]);

  return (
    <svg ref={svgRef} width={size} height={size} viewBox="0 0 24 24" className={className} />
  );
};
