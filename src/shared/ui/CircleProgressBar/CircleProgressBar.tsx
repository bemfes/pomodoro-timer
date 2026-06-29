import React, { FC } from "react";
import styles from "./CircleProgressBar.module.css";

interface CircleProgressBarProps {
  percentage: number;
  strokeColorActive: string;
  strokeColorBg: string;
  strokeWidth: number;
  children: React.ReactNode;
  radius: number;
  className?: string;
}

const CircleProgressBar: FC<CircleProgressBarProps> = ({
  percentage,
  strokeColorActive,
  strokeColorBg,
  strokeWidth,
  children,
  radius,
  className,
}) => {
  const circleRadius = radius - strokeWidth / 2;
  const viewBox = `0 0 ${radius * 2} ${radius * 2}`;

  const circleLength = 2 * Math.PI * circleRadius;

  const strokeDasharray = circleLength;
  const strokeDashoffset = circleLength * (1 - percentage / 100);
  return (
    <div className={`${styles.progress} ${className}`}>
      <svg viewBox={viewBox} className={styles.svg}>
        <circle
          fill="none"
          strokeWidth={strokeWidth}
          stroke={strokeColorBg}
          cx={radius}
          cy={radius}
          r={circleRadius}
        />
        <circle
          strokeDashoffset={strokeDashoffset}
          strokeDasharray={strokeDasharray}
          strokeLinecap="round"
          fill="none"
          strokeWidth={strokeWidth}
          stroke={strokeColorActive}
          className={styles.active}
          cx={radius}
          cy={radius}
          r={circleRadius}
        />
      </svg>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default CircleProgressBar;
