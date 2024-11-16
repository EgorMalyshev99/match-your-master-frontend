"use client";
import React, { FormEvent, useEffect, useState } from "react";
import s from "./profile-form.module.scss";
import {
  Button,
  Card,
  Fieldset,
  FileInput,
  Grid,
  Group,
  Radio,
  Text,
  TextInput,
  Tooltip,
} from "@mantine/core";
import { DateInput, DatesProvider } from "@mantine/dates";
import "dayjs/locale/ru";
import { EmailContactType } from "@/enums/profile_form";
import { useForm } from "@mantine/form";
import { validateRequired } from "@/lib/validation";
import { useProfileStore } from "@/store/profile";
import { getUserProfileData } from "@/lib/requests";
import { api } from "@/lib/api";

interface Inputs {}

const ProfileForm = () => {
  const [isWordEmailUsed, setIsWordEmailUsed] = useState<boolean>(false);
  const { first_name, last_name, birth_date, city, setData } =
    useProfileStore();

  const form = useForm<Inputs>({
    mode: "uncontrolled",
    initialValues: {
      first_name: first_name,
      last_name: last_name,
      birth_date: birth_date,
      city: city,
    },
    validateInputOnChange: true,
    validate: {
      first_name: validateRequired,
      last_name: validateRequired,
      birth_date: validateRequired,
      city: validateRequired,
    },
  });

  const submitHandler = (values: Inputs) => {
    console.log(values);
  };

  useEffect(() => {
    getUserProfileData().then((data) => {
      setData(data);
    });
  }, [setData]);

  const onSubmit = async (evt: FormEvent) => {
    evt.preventDefault();

    const formData = new FormData(evt.target as HTMLFormElement);
    const response = await api.post(
      "http://api.match-your-master.local/user/image/avatar/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
    console.log(response.data);
  };

  return (
    <>
      <form action="" onSubmit={onSubmit}>
        <FileInput
          name="image"
          label="Input label"
          description="Input description"
          placeholder="Input placeholder"
        />
        <button type="submit">отправить</button>
      </form>

      <form className={s.userInfo} onSubmit={form.onSubmit(submitHandler)}>
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
                  {...form.getInputProps("first_name")}
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
                  {...form.getInputProps("last_name")}
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
                    valueFormat="YYYY-MM-DD"
                    defaultLevel="year"
                    label={
                      <Text fw={600} size="xs" className="mb-4">
                        Дата рождения
                      </Text>
                    }
                    placeholder="Выберите дату"
                    {...form.getInputProps("birth_date")}
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
                  {...form.getInputProps("city")}
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
                <Radio.Group name="email_contact_type" mb="sm">
                  <Group>
                    <Tooltip label="Почта, которую вы указали при регистрации">
                      <Radio
                        checked={true}
                        onChange={() => {
                          setIsWordEmailUsed(false);
                        }}
                        label="Почта аккаунта"
                        value={EmailContactType.self}
                      />
                    </Tooltip>
                    <Tooltip label="Укажите рабочую почту">
                      <Radio
                        checked={false}
                        onChange={() => {
                          setIsWordEmailUsed(true);
                        }}
                        label="Рабочая почта"
                        value={EmailContactType.work}
                      />
                    </Tooltip>
                  </Group>
                </Radio.Group>
                {isWordEmailUsed ? (
                  <TextInput type="email" placeholder="Рабочая почта" />
                ) : (
                  ""
                )}
              </Grid.Col>
              <Grid.Col span={12}>
                <Button type="submit" size="sm">
                  Сохранить
                </Button>
              </Grid.Col>
            </Grid>
          </Fieldset>
        </Card>
      </form>
    </>
  );
};

export default ProfileForm;
