import React, { MouseEventHandler } from "react";
import s from "./ui-button.module.scss";
import { ButtonSize, ButtonVariant } from "@/enums/button";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
  className?: string;
  type?: "submit" | "reset" | "button";
  href?: string;
  route?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

const UiButton = ({
  children,
  className,
  type,
  href,
  route,
  onClick,
  variant = ButtonVariant.primary,
  size = ButtonSize.md,
}: Props) => {
  if (href) {
    return (
      <a
        className={`${s.button} ${s[variant]} ${s[size]} ${className}`}
        href={href}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  if (route) {
    return (
      <Link
        href={route}
        className={`${s.button} ${s[variant]} ${s[size]} ${className}`}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={`${s.button} ${s[variant]} ${s[size]} ${className}`}
      type={type ?? "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default UiButton;
