"use client";
import React from "react";
import s from "./profile-form.module.scss";
import {
  Button,
  Card,
  Fieldset,
  Grid,
  Radio,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
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
                <TextInput
                  label={
                    <Text fw={600} size="xs" className="mb-4">
                      Имя
                    </Text>
                  }
                  placeholder="Введите имя"
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <TextInput
                  label={
                    <Text fw={600} size="xs" className="mb-4">
                      Фамилия
                    </Text>
                  }
                  placeholder="Введите фамилию"
                />
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
                    label={
                      <Text fw={600} size="xs" className="mb-4">
                        Дата рождения
                      </Text>
                    }
                    placeholder="Выберите дату"
                  />
                </DatesProvider>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <TextInput
                  label={
                    <Text fw={600} size="xs" className="mb-4">
                      Город
                    </Text>
                  }
                />
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
          >
            <Grid>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <TextInput
                  label={
                    <Text fw={600} size="xs" className="mb-4">
                      Социальные сети
                    </Text>
                  }
                  placeholder="vk.com"
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Text fw={600} size="xs" className="mb-8">
                  Email для связи
                </Text>
                <Stack>
                  <Radio
                    checked={true}
                    onChange={() => {}}
                    label="Использовать почту аккаунта"
                  />
                  <Radio
                    checked={false}
                    onChange={() => {}}
                    label="Использовать рабочую почту"
                  />
                </Stack>
              </Grid.Col>
            </Grid>
          </Fieldset>
        </Card>
      </form>
    </>
  );
};

export default ProfileForm;
