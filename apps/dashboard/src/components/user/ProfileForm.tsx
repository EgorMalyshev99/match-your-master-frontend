"use client";
import React from "react";
import "dayjs/locale/ru";
import { Button, Fieldset, Grid, Text, TextInput } from "@mantine/core";
import { DateInput, DatesProvider } from "@mantine/dates";
import { useForm, zodResolver } from "@mantine/form";
import { useProfileStore } from "@/store/profile";
import { User } from "@/models/user";
import s from "./profile-form.module.scss";
import {
  ProfileUpdateInputs,
  profileUpdateSchema,
} from "@/models/validation/profile";

interface Props {
  user: User;
}
const ProfileForm = ({ user }: Props) => {
  const { updateProfile, isUpdateLoading } = useProfileStore();
  const { first_name, last_name, gender, date_of_birth, city } = user;
  const form = useForm<ProfileUpdateInputs>({
    mode: "uncontrolled",
    initialValues: {
      first_name: first_name,
      last_name: last_name,
      gender: gender,
      date_of_birth: new Date(date_of_birth),
      city: city,
    },
    validateInputOnChange: true,
    validate: zodResolver(profileUpdateSchema),
  });

  const submitHandler = async (values: ProfileUpdateInputs) => {
    const data = {
      ...values,
      date_of_birth: new Date(values.date_of_birth).toISOString().split("T")[0],
    };

    await updateProfile(data);
  };

  return (
    <form className={s.userInfo} onSubmit={form.onSubmit(submitHandler)}>
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
              disabled={isUpdateLoading}
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
              disabled={isUpdateLoading}
              placeholder="Введите фамилию"
              {...form.getInputProps("last_name")}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <DatesProvider
              settings={{
                locale: "ru",
                firstDayOfWeek: 0,
                weekendDays: [5, 6],
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
                disabled={isUpdateLoading}
                {...form.getInputProps("date_of_birth")}
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
              disabled={isUpdateLoading}
              {...form.getInputProps("city")}
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <Button type="submit" size="sm" disabled={isUpdateLoading}>
              Сохранить
            </Button>
          </Grid.Col>
        </Grid>
      </Fieldset>
    </form>
  );
};

export default ProfileForm;
