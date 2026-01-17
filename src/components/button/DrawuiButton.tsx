// src/components/DrawuiButton.tsx
import React, { useEffect, useRef, useState } from "react";

import rough from "roughjs/bin/rough";


import type { DrawuiButtonProps } from "./DrawuiButton.types";
import { roundedRect } from "../../utils/roughPaths";
import styles from "./DrawuiButton.module.css";
import { useDrawuiTheme } from "../../theme";

export const DrawuiButton: React.FC<DrawuiButtonProps> = ({
  strokeWeight = "medium",
  radius = "md",
  size = "sm",
  backgroundColor,
  children,
  ...props
}) => {
  const theme = useDrawuiTheme();
  const svgRef = useRef<SVGSVGElement>(null);
  const [hovered, setHovered] = useState(false);

  // retrieve parameters from default theme
  const width    = theme.buttonSize[size].width;
  const height   = theme.buttonSize[size].height;
  const fontSize = theme.buttonSize[size].fontSize;

  useEffect(() => {
    if (!svgRef.current) return;

    const rc = rough.svg(svgRef.current);
    svgRef.current.innerHTML = "";

    const stroke = theme.stroke[strokeWeight];

    const node = rc.path(
      roundedRect(0, 0, width, height, theme.radius[radius]),
      {
        stroke: stroke.color,
        strokeWidth: stroke.width,
        fill: backgroundColor ?? theme.fill.background,
        roughness: hovered
          ? theme.roughness.roughness + 1
          : theme.roughness.roughness,
        bowing: theme.roughness.bowing,
      }
    );

    svgRef.current.appendChild(node);
  }, [hovered, strokeWeight, radius, theme]);

  return (
    <button
      {...props}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`${styles["drawui-button"]} ${props.className ?? ""}`} //dinamic user className merging
      style={{
        position: "relative",
        width,
        height,
        border: "none",
        background: "transparent",
        cursor: "pointer",
      }}
    >
      <svg
        ref={svgRef}
        width={width}
        height={height}
        style={{ position: "absolute", inset: 0 }}
      />
      <span
        style={{
          position: "relative",
          fontSize: fontSize,
          pointerEvents: "none",
        }}
      >
        {children}
      </span>
    </button>
  );
};
