import React from "react";
import buttonStyles from "./button.tw-style";

interface Props {
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  variant?: "default" | "primary" | "secondary" | "danger" | undefined;
  clickHandler?: Function;
  children: React.ReactChild | React.ReactChild[];
}

function Button({
  type = "button",
  children,
  variant = "default",
  className = "",
  clickHandler = () => {},
}: Props) {
  const styles = buttonStyles[variant];
  return (
    <button
      type={type}
      className={`${styles} ${className}`}
      onClick={() => clickHandler()}
    >
      {children}
    </button>
  );
}

export default Button;
