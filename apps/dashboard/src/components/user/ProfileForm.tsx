"use client";
import React from "react";
import s from "./profile-form.module.scss";
import { Button, Card, Fieldset, Grid, Text, TextInput } from "@mantine/core";
import { DateInput, DatesProvider } from "@mantine/dates";
import "dayjs/locale/ru";

const ProfileForm = () => {
  const onSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    console.log(evt);
  };

  return (
    <>
      <form className={s.userInfo} onSubmit={onSubmit}>
        <Card shadow="md" padding="lg" radius="md">
          <Fieldset
            legend={
              <Text px="xs" size="md" fw={500}>
                Основная информация
              </Text>
            }
            mb="lg"
          >
            <Grid>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <TextInput label="Имя" placeholder="Введите имя" />
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <TextInput label="Фамилия" placeholder="Введите фамилию" />
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <DatesProvider
                  settings={{
                    locale: "ru",
                    firstDayOfWeek: 0,
                    weekendDays: [0],
                    timezone: "UTC",
                  }}
                >
                  <DateInput
                    valueFormat="DD.MM.YYYY"
                    defaultLevel="year"
                    label="Дата рождения"
                    placeholder="Выберите дату"
                  />
                </DatesProvider>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <TextInput label="Город" />
              </Grid.Col>
              <Grid.Col span={12}>
                <Button type="submit" size="sm">
                  Сохранить
                </Button>
              </Grid.Col>
            </Grid>
          </Fieldset>

          <Fieldset
            legend={
              <Text px="xs" size="md" fw={500}>
                Контакты
              </Text>
            }
          ></Fieldset>
        </Card>
      </form>
    </>
  );
};

export default ProfileForm;
