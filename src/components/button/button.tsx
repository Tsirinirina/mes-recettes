"use client";
import "./button.style.css";

interface ButtonProps {
  children: any;
  style?: string;
  variant?: string;
  size?: string;
  rounded?: string;
  onClick?: any;
  height?: string;
}
export const Button: React.FC<ButtonProps> = ({
  children,
  style,
  variant,
  size,
  onClick,
  rounded,
  height,
}) => {
  return (
    <button
      className={`btn ${variant ? variant : "light"} ${
        size ? size : "s-auto"
      } h-${height ? height : "auto"} rounded-${rounded ? rounded : "sm"}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
