import React, { MouseEventHandler } from "react";
import s from "./button.module.scss";
import { ButtonSize, ButtonVariant } from "@/enums/button";

interface Props {
  children: React.ReactNode;
  className?: string;
  type?: "submit" | "reset" | "button";
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  children,
  className,
  type,
  href,
  onClick,
  variant = ButtonVariant.primary,
  size = ButtonSize.md,
}: Props) => {
  return href ? (
    <a
      className={`${s.button} ${s[variant]} ${s[size]} ${className}`}
      href={href}
    >
      {children}
    </a>
  ) : (
    <button
      className={`${s.button} ${s[variant]} ${s[size]} ${className}`}
      type={type ?? "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
