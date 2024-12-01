"use client";
import React, { FormEvent, useState } from "react";
import s from "./profile-form.module.scss";
import {
  Button,
  Fieldset,
  Grid,
  Group,
  Radio,
  Text,
  TextInput,
  Tooltip,
} from "@mantine/core";
import { EmailContactType } from "@/enums/profile_form";
import MultipleSocialInput from "@/components/ui/inputs/multiple-social-input";

const ContactsForm = () => {
  const [isWordEmailUsed, setIsWordEmailUsed] = useState<boolean>(false);
  const onSubmit = async (evt: FormEvent) => {
    console.log(evt);
  };

  return (
    <>
      <form className={s.userInfo} onSubmit={onSubmit}>
        <Fieldset
          legend={
            <Text px="xs" size="md" fw={500}>
              Контакты
            </Text>
          }
        >
          <Grid>
            <Grid.Col span={12}>
              <Text fw={600} size="xs" className="mb-4">
                Социальные сети
              </Text>
              <MultipleSocialInput data={[]} />
            </Grid.Col>
            <Grid.Col span={12}>
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
      </form>
    </>
  );
};

export default ContactsForm;
