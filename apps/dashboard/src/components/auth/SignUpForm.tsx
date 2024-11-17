"use client";
import React from "react";
import s from "./sign-in-form.module.scss";
import { Button, PasswordInput, Select, Text, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { validateEmail, validatePassword } from "@/lib/validation";
import { DateInput, DatesProvider } from "@mantine/dates";
import { GENDERS } from "@/constants/common";

interface Props {
  className?: string;
}

interface Inputs {
  first_name: string;
  last_name: string;
  date_of_birth: string;
  gender: string;
  city: string;
  email: string;
  password: string;
  repeat_password: string;
}

const SignUpForm = ({ className }: Props) => {
  const form = useForm<Inputs>({
    mode: "uncontrolled",
    initialValues: {
      first_name: "",
      last_name: "",
      date_of_birth: "",
      gender: "",
      city: "",
      email: "",
      password: "",
      repeat_password: "",
    },
    validateInputOnChange: true,
    validate: {
      email: validateEmail,
      password: validatePassword,
      repeat_password: (value, values) => {
        if (!value) {
          return "Необходимо повторно ввести пароль";
        }

        if (value !== values.password) {
          return "Пароли не совпадают";
        }

        return null;
      },
    },
  });

  const handleSubmit = async (values: Inputs) => {
    const formData = new FormData();
    formData.append("email", values.email);
    formData.append("password", values.password);
    console.log(formData);
  };

  return (
    <div className={`${s.signUp} ${className}`}>
      <form className={s.form} onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          label={
            <Text fw={600} size="sm" className="mb-3">
              Имя
            </Text>
          }
          placeholder="Введите имя"
          key={form.key("first_name")}
          {...form.getInputProps("first_name")}
          mb="xs"
        />
        <TextInput
          label={
            <Text fw={600} size="sm" className="mb-3">
              Фамилия
            </Text>
          }
          placeholder="Введите фамилию"
          key={form.key("last_name")}
          {...form.getInputProps("last_name")}
          mb="xs"
        />
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
              <Text fw={600} size="sm" className="mb-3">
                Дата рождения
              </Text>
            }
            placeholder="Выберите дату"
            {...form.getInputProps("date_of_birth")}
            mb="xs"
          />
        </DatesProvider>
        <Select
          label={
            <Text fw={600} size="sm" className="mb-3">
              Ваш пол
            </Text>
          }
          data={GENDERS}
          defaultValue="male"
          allowDeselect={false}
        />
        <TextInput
          label={
            <Text fw={600} size="sm" className="mb-3">
              Город
            </Text>
          }
          key={form.key("city")}
          {...form.getInputProps("city")}
          placeholder="Ваш город"
          mb="xs"
        />
        <TextInput
          label={
            <Text fw={600} size="sm" className="mb-3">
              Email
            </Text>
          }
          type="email"
          placeholder="Введите Email"
          key={form.key("email")}
          {...form.getInputProps("email")}
          mb="xs"
        />
        <PasswordInput
          label={
            <Text fw={600} size="sm" className="mb-3">
              Пароль
            </Text>
          }
          {...form.getInputProps("password")}
          key={form.key("password")}
          placeholder="Введите пароль"
          mb="sm"
        />
        <PasswordInput
          label={
            <Text fw={600} size="sm" className="mb-3">
              Повторите пароль
            </Text>
          }
          {...form.getInputProps("repeat_password")}
          key={form.key("repeat_password")}
          placeholder="Повторите пароль"
          mb="sm"
        />
        <Button className="mt-10" fullWidth size="md" type="submit">
          Зарегистрироваться
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
