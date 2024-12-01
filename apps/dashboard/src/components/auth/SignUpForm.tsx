"use client";
import React, { useState } from "react";
import s from "@/components/auth/sign-up-form.module.scss";
import {
  Alert,
  Button,
  PasswordInput,
  Select,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { DateInput, DatesProvider } from "@mantine/dates";
import { GENDERS } from "@/constants/common";
import { api } from "@/lib/axiosInstance";
import { NEXT_API_PATHS } from "@/constants/routes";
import { SignUpInputs, signUpSchema } from "@/models/auth";
import { signIn } from "next-auth/react";
import { Route } from "@/enums/navigation";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { useWindowScroll } from "@mantine/hooks";

interface Props {
  className?: string;
}

const SignUpForm = ({ className }: Props) => {
  const router = useRouter();
  const [, scrollTo] = useWindowScroll();
  const [errorSummary, setErrorSummary] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(false);
  const form = useForm<SignUpInputs>({
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
    validate: zodResolver(signUpSchema),
  });
  const validateCustom = (values: typeof form.values) => {
    let hasValid = true;
    if (values.password !== values.repeat_password) {
      form.setFieldError("repeat_password", "Пароли не совпадают");
      hasValid = false;
    } else {
      form.clearFieldError("repeat_password");
    }

    return hasValid;
  };

  const handleSubmit = async (values: typeof form.values) => {
    setErrorSummary("");
    if (!validateCustom(values)) {
      return;
    }

    const data = {
      ...values,
      date_of_birth: new Date(values.date_of_birth).toISOString().split("T")[0],
    };

    try {
      setDisabled(true);
      const response = await api.post(NEXT_API_PATHS.signup, data);
      if (response.data.success) {
        const authResponse = await signIn("credentials", {
          email: values.email,
          password: values.password,
          callbackUrl: Route.PROFILE,
          redirect: false,
        });
        if (authResponse?.error) {
          console.error(authResponse.error);
        } else {
          router.refresh();
          router.push(Route.PROFILE);
        }
      } else {
        setErrorSummary("Эта почта занята");
        scrollTo({ y: 0 });
      }
    } catch (error) {
      console.error(error);
      setErrorSummary("Эта почта занята");
      scrollTo({ y: 0 });
    } finally {
      setDisabled(false);
    }
  };

  return (
    <div className={`${s.signUp} ${className}`}>
      {errorSummary ? (
        <Alert
          variant="light"
          color="red"
          title="Ошибка"
          icon={<FontAwesomeIcon icon={faExclamationTriangle} />}
          mb="sm"
        >
          <Text size="sm" c="red">
            {errorSummary}
          </Text>
        </Alert>
      ) : (
        ""
      )}
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
          disabled={disabled}
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
          disabled={disabled}
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
            maxDate={new Date()}
            placeholder="Выберите дату"
            key={form.key("date_of_birth")}
            {...form.getInputProps("date_of_birth")}
            disabled={disabled}
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
          key={form.key("gender")}
          {...form.getInputProps("gender")}
          disabled={disabled}
          mb="xs"
        />
        <TextInput
          label={
            <Text fw={600} size="sm" className="mb-3">
              Город
            </Text>
          }
          key={form.key("city")}
          {...form.getInputProps("city")}
          disabled={disabled}
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
          disabled={disabled}
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
          disabled={disabled}
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
          disabled={disabled}
          placeholder="Повторите пароль"
          mb="sm"
        />
        <Button
          className="mt-10"
          fullWidth
          size="md"
          disabled={disabled}
          type="submit"
        >
          Зарегистрироваться
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
