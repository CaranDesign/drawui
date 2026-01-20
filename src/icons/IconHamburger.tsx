import React, { useEffect, useRef } from "react";
import rough from "roughjs/bin/rough";
import { useDrawuiTheme } from "../theme";
import type { DrawuiIconProps } from "./types";

export const IconHamburger: React.FC<DrawuiIconProps> = ({
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

    const options = {
      stroke: strokeColor,
      strokeWidth: stroke.width,
      roughness: theme.roughness.roughness,
      bowing: theme.roughness.bowing,
    };

    // top line
    svgRef.current.appendChild(
      rc.line(4, 7, 20, 7, options)
    );

    // middle line
    svgRef.current.appendChild(
      rc.line(4, 12, 20, 12, options)
    );

    // bottom line
    svgRef.current.appendChild(
      rc.line(4, 17, 20, 17, options)
    );
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
