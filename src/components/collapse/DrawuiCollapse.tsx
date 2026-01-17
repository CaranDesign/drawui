import React, { useEffect, useRef } from "react";
import rough from "roughjs/bin/rough";
import { roundedRect } from "../../utils/roughPaths";
import { useDrawuiTheme } from "../../theme";
import type { DrawuiCollapseProps } from "./DrawuiCollapse.types";
import styles from "./DrawuiCollapse.module.css";

export const DrawuiCollapse: React.FC<DrawuiCollapseProps> = ({
  header,
  children,
  strokeWeight = "medium",
  radius = "md",
  width = 300,
  className,
}) => {
  const theme = useDrawuiTheme();
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const rc = rough.svg(svgRef.current);
    svgRef.current.innerHTML = "";

    const stroke = theme.stroke[strokeWeight];

    const node = rc.path(
      roundedRect(0, 0, width, 40, theme.radius[radius]),
      {
        stroke: stroke.color,
        strokeWidth: stroke.width,
        fill: "transparent",
        roughness: theme.roughness.roughness,
        bowing: theme.roughness.bowing,
      }
    );

    svgRef.current.appendChild(node);
  }, [theme, strokeWeight, radius, width]);

  return (
    <div className={`${styles["drawui-collapse"]} ${className ?? ""}`} style={{ width }}>
      <details>
        <summary style={{ position: "relative" }}>
          <svg
            ref={svgRef}
            width={width}
            height={40}
            style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
          />
          <span style={{ position: "relative", zIndex: 1 }}>{header}</span>
        </summary>
        <div className={styles["drawui-collapse-content"]}>{children}</div>
      </details>
    </div>
  );
};
