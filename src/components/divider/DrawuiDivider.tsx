import React, { useEffect, useRef } from "react";
import rough from "roughjs/bin/rough";

import type { DrawuiDividerProps } from "./DrawuiDivider.types";
import styles from "./DrawuiDivider.module.css";
import { useDrawuiTheme } from "../../theme";

export const DrawuiDivider: React.FC<DrawuiDividerProps> = ({
  strokeWeight = "medium",
  width = "100%",
  vertical = false,
  className,
  fillStyle,
}) => {
  const theme = useDrawuiTheme();
  const svgRef = useRef<SVGSVGElement>(null);


  useEffect(() => {
    if (!svgRef.current) return;
    svgRef.current.innerHTML = "";

    const rc = rough.svg(svgRef.current);
    const stroke = theme.stroke[strokeWeight];

    if (vertical) {
      const height = typeof width === "number" ? width : 100; // fallback a 100px
      const node = rc.line(0, 0, 0, height, {
        stroke: stroke.color,
        strokeWidth: stroke.width,
        roughness: theme.roughness.roughness,
        bowing: theme.roughness.bowing,
      });
      svgRef.current.appendChild(node);
    } else {
      const w = typeof width === "number" ? width : 300; // fallback 300px
      const node = rc.line(0, 0, w, 0, {
        stroke: stroke.color,
        strokeWidth: stroke.width,
        roughness: theme.roughness.roughness,
        bowing: theme.roughness.bowing,
        fillStyle:fillStyle,
      });
      svgRef.current.appendChild(node);
    }
  }, [theme, strokeWeight, width, vertical]);

  return (
    <div
      className={`${styles["drawui-divider"]} ${
        vertical ? styles.vertical : styles.horizontal
      } ${className ?? ""}`}
      style={{ width: vertical ? undefined : width }}
    >
      <svg
        ref={svgRef}
        width={vertical ? 2 : width}  // width for horizontal divider
        height={vertical ? width : 2} // height for vertical divider
        style={{ display: "block" }}
      />
    </div>
  );
};
