import React from "react";
import s from "./contacts.module.scss";
import { Container, Text } from "@mantine/core";

const Contacts = () => {
  return (
    <div className={s.contacts}>
      <Container size="xl">
        <Text fw={500} size="xl" ta="center" mb="lg">
          Контакты
        </Text>
        <Text>Раздел в разработке</Text>
      </Container>
    </div>
  );
};

export default Contacts;
