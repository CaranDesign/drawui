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
  height, //optional, card adjust height itself by content
  backgroundColor,
  header,
  footer,
  fillStyle,
  children,
  ...props
}) => {
  const theme = useDrawuiTheme();
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dynamicHeight, setDynamicHeight] = useState(height ?? 200);

  // Calculate dynamic height
  useEffect(() => {
    if (!containerRef.current || height) return; // if height is declared in props use it

    const updateHeight = () => {
      if (containerRef.current) {
        const contentHeight = containerRef.current.scrollHeight;
        setDynamicHeight(contentHeight);
      }
    };

    // first calculation
    updateHeight();

    // react to change of resize
    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  }, [children, header, footer, height]);

  // redraw svg when dimension changes
  useEffect(() => {
    if (!svgRef.current) return;

    const rc = rough.svg(svgRef.current);
    svgRef.current.innerHTML = "";

    const stroke = theme.stroke[strokeWeight];
    const finalHeight = height ?? dynamicHeight;

    const node = rc.path(
      roundedRect(0, 0, width, finalHeight, theme.radius[radius]),
      {
        stroke: stroke.color,
        strokeWidth: stroke.width,
        fill: backgroundColor ?? theme.fill.background,
        roughness:theme.roughness.roughness,
        bowing: theme.roughness.bowing,
        fillStyle: fillStyle,
      }
    );

    svgRef.current.appendChild(node);
  }, [
    strokeWeight,
    radius,
    width,
    dynamicHeight,
    height,
    backgroundColor,
    theme,
    fillStyle,
  ]);

  const finalHeight = height ?? dynamicHeight;

  return (
    <div
      {...props}
      ref={containerRef}
      className={`${styles["drawui-card"]} ${props.className ?? ""}`}
      style={{
        position: "relative",
        width,
        minHeight: height ? height : "auto",
        height: height ? height : "auto",
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
        height={finalHeight}
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
          <DrawuiDivider width={width} strokeWeight={"thick"} />
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
          <DrawuiDivider width={width} strokeWeight={"thick"} />
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