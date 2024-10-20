import React from "react";
import Image from "next/image";
import s from "./phone-card.module.scss";

interface Props {
  children?: React.ReactNode;
}
const PhoneCard = ({ children }: Props) => {
  return (
    <div className={s.phoneCard}>
      <Image
        className={s.phoneImage}
        width={370}
        height={726}
        src="/img/iphone-template.png"
        alt="Phone"
      />
      <div className={s.phoneContent}>{children}</div>
    </div>
  );
};

export default PhoneCard;
