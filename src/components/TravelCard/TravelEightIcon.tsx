import React from "react";

interface Props {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

const TravelEightIcon: React.FC<Props> = ({
  size = 20,
  color = "#1b1f3b",
  strokeWidth = 2,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Top elongated loop */}
    <ellipse cx="12" cy="8" rx="5" ry="6" />
    {/* Bottom smaller loop */}
    <ellipse cx="12" cy="18" rx="3" ry="3" />
  </svg>
);

export default TravelEightIcon;
