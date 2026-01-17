import React, { useEffect, useRef, useState } from "react";

import rough from "roughjs/bin/rough";

import type { DrawuiCardProps } from "./DrawuiCard.types";
import { roundedRect } from "../../utils/roughPaths";
import { useDrawuiTheme } from "../../theme";
import styles from "./DrawuiCard.module.css";
import { DrawuiDivider } from "../divider/DrawuiDivider";

export const DrawuiCard: React.FC<DrawuiCardProps> = ({
  strokeWeight = "medium",
  radius = "md",
  width = 300,
  height = 200,
  backgroundColor,
  header,
  footer,
  children,
  ...props
}) => {
  const theme = useDrawuiTheme();
  const svgRef = useRef<SVGSVGElement>(null);
  const [hovered, setHovered] = useState(false);

  // calculation of svg
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
  }, [strokeWeight, radius, width, height, backgroundColor, theme]);

  return (
    <div
      {...props}
      className={`${styles["drawui-card"]} ${props.className ?? ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        width,
        height,
        cursor: "default",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* SVG of the border*/}
      <svg
        ref={svgRef}
        width={width}
        height={height}
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      />

      {/* optional header */}
      {header && (
       <>
          <div
            className={styles["drawui-card-header"]}
            style={{ position: "relative", zIndex: 1 }}
          >
            {header}
          </div>
          <DrawuiDivider width={width}  strokeWeight={"thick"} />
       </>
      )}

      {/* card body */}
      <div
        className={styles["drawui-card-body"]}
        style={{ position: "relative", zIndex: 1, flex: 1 }}
      >
        {children}
      </div>

      {/* optional footer */}
      {footer && (
        <>
          <DrawuiDivider width={width}  strokeWeight={"thick"} />
          <div
            className={styles["drawui-card-footer"]}
            style={{ position: "relative", zIndex: 1 }}
          >
            {footer}
          </div>
       </>
      )}
    </div>
  );
};
