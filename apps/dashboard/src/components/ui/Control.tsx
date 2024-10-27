import React, { HTMLInputTypeAttribute } from "react";
import s from "./control.module.scss";

interface Props {
  id?: string;
  type?: HTMLInputTypeAttribute;
  name: string;
  className?: string;
  placeholder?: string;
}

const Control = ({
  id,
  type = "text",
  name,
  className = "",
  placeholder,
}: Props) => {
  return (
    <input
      type={type}
      id={id ?? ""}
      name={name}
      className={`${s.control} ${className}`}
      placeholder={placeholder ?? ""}
    />
  );
};

export default Control;
