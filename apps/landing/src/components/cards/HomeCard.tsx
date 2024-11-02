"use client";
import React from "react";
import useSearchStore from "@/store/search";
import { useRouter } from "next/navigation";
import { Route } from "@/enums/navigation";
import { Card, Text } from "@mantine/core";
import Image from "next/image";
import s from "./home-card.module.scss";

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
    <div onClick={cardClickHandler} className={s.cardWrapper}>
      <Card padding="lg" radius="md" className={s.card} withBorder>
        <Card.Section>
          <Image
            className={s.cardImage}
            src={img}
            width={400}
            height={200}
            alt={title}
          />
        </Card.Section>

        <Text fw={500} size="lg" className="mb-2">
          {title}
        </Text>
        <Text size="sm">{description}</Text>
      </Card>
    </div>
  );
};

export default HomeCard;
