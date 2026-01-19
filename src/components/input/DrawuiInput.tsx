import React, { useEffect, useRef, useState } from "react";
import rough from "roughjs/bin/rough";

import type { DrawuiInputProps } from "./DrawuiInput.types";
import { roundedRect } from "../../utils/roughPaths";
import styles from "./DrawuiInput.module.css";
import { useDrawuiTheme } from "../../theme";

export const DrawuiInput: React.FC<DrawuiInputProps> = ({
  strokeWeight = "medium",
  backgroundColor,
  radius = "md",
  inputSize = "md",
  className,
  fillStyle,
  style,
  ...props
}) => {
  const theme = useDrawuiTheme();
  const svgRef = useRef<SVGSVGElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);

  const height    =  theme.inputSize[inputSize].height;
  const fontSize  =  theme.inputSize[inputSize].fontSize;
  const paddingX  =  theme.inputSize[inputSize].paddingX;

  useEffect(() => {
    if (!svgRef.current || !wrapperRef.current) return;

    const width = wrapperRef.current.offsetWidth;
    const rc = rough.svg(svgRef.current);
    svgRef.current.innerHTML = "";

    const stroke = theme.stroke[strokeWeight];

    const node = rc.path(
      roundedRect(0, 0, width, height, theme.radius[radius]),
      {
        stroke: stroke.color,
        strokeWidth: stroke.width,
        fill: backgroundColor ?? theme.fill.background,
        roughness: focused
          ? theme.roughness.roughness + 1
          : theme.roughness.roughness,
        bowing: theme.roughness.bowing,
        fillStyle:fillStyle,
      }
    );

    svgRef.current.appendChild(node);
  }, [focused, hovered, strokeWeight, radius, inputSize, theme, backgroundColor]);

  return (
    <div
      ref={wrapperRef}
      className={`${styles["drawui-input"]} ${className ?? ""}`}
      style={{ height, ...style }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <svg
        ref={svgRef}
        width="100%"
        height={height}
        style={{ position: "absolute", inset: 0 }}
      />

      <input
        {...props}
        className={styles["drawui-input-field"]}
        style={{
          height,
          fontSize,
          paddingLeft: paddingX,
          paddingRight: paddingX,
        }}
        onFocus={(e) => {
          setFocused(true);
          props.onFocus?.(e);
        }}
        onBlur={(e) => {
          setFocused(false);
          props.onBlur?.(e);
        }}
      />

    </div>
  );
};
