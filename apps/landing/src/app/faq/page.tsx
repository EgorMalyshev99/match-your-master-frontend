import React from "react";
import s from "./faq.module.scss";
import { Container, Text } from "@mantine/core";

const Faq = () => {
  return (
    <div className={s.faq}>
      <Container size="xl">
        <Text fw={500} size="xl" ta="center" mb="lg">
          FAQ
        </Text>
        <Text>Раздел в разработке</Text>
      </Container>
    </div>
  );
};

export default Faq;
