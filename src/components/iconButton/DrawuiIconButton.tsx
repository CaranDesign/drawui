import React, { useEffect, useRef, useState } from "react";
import rough from "roughjs/bin/rough";

import type { DrawuiIconButtonProps } from "./DrawuiIconButton.types";
import { roundedRect } from "../../utils/roughPaths";
import styles from "./DrawuiIconButton.module.css";
import { useDrawuiTheme } from "../../theme";

export const DrawuiIconButton: React.FC<DrawuiIconButtonProps> = ({
  strokeWeight = "medium",
  radius = "md",
  size = "sm",
  icon,
  backgroundColor,
  ...props
}) => {
  const theme = useDrawuiTheme();
  const svgRef = useRef<SVGSVGElement>(null);
  const [hovered, setHovered] = useState(false);

  // dimensioni dal tema (larghezza = altezza per icon button quadrato)
  const width = theme.buttonSize[size].height;

  useEffect(() => {
    if (!svgRef.current) return;

    const rc = rough.svg(svgRef.current);
    svgRef.current.innerHTML = "";

    const stroke = theme.stroke[strokeWeight];

    const node = rc.path(
      roundedRect(0, 0, width, width, theme.radius[radius]),
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
  }, [hovered, strokeWeight, radius, theme, width, backgroundColor]);

  return (
    <button
      {...props}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`${styles["drawui-button"]} ${props.className ?? ""}`}
      style={{
        position: "relative",
        width,
        height: width,          // height and width are equal
        border: "none",
        background: "transparent",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
      }}
    >
      <svg
        ref={svgRef}
        width={width}
        height={width}
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
        }}
      />
      <span
        style={{
          position: "relative",
          pointerEvents: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </span>
    </button>
  );
};
