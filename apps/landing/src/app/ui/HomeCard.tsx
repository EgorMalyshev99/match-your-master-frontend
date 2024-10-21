"use client";
import React from "react";
import ServiceCard from "@/components/cards/ServiceCard";
import useSearchStore from "@/store/search";
import { useRouter } from "next/navigation";
import { Route } from "@/enums/navigation";

interface Props {
  title: string;
  img: string;
  description: string;
  filter: string;
}

const HomeCard = ({ title, img, description, filter }: Props) => {
  const { setFilter } = useSearchStore();
  const router = useRouter();
  const cardClickHandler = () => {
    setFilter(filter);
    router.push(Route.SEARCH);
  };

  return (
    <div onClick={cardClickHandler} className="cursor-pointer h-full">
      <ServiceCard
        img={img}
        title={title}
        description={description}
        className="h-full"
      />
    </div>
  );
};

export default HomeCard;
