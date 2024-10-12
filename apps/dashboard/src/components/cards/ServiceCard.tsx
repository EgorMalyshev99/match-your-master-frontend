import React from "react";
import s from "./service-card.module.scss";
import Image from "next/image";

interface Props {
  img: string;
  title: string;
  description: string;
  className?: string;
}

const ServiceCard = ({ img, title, description, className }: Props) => {
  return (
    <div className={`${s.card} ${className}`}>
      <Image
        className={s.cardImg}
        src={img}
        width={1000}
        height={200}
        alt={title}
      />
      <div className={s.cardContent}>
        <div className={`${s.title} mb-2`}>{title}</div>
        <div className={s.descriprion}>{description}</div>
      </div>
    </div>
  );
};

export default ServiceCard;
