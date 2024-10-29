"use client";
import React from "react";
import Control from "@/components/inputs/control/Control";
import UiButton from "@/components/button/UiButton";
import { ButtonSize, ButtonVariant } from "@/enums/button";

const Login = () => {
  return (
    <div className="flex justify-center items-center py-8">
      <form action="">
        <div className="form-group">
          <label className="label" htmlFor="login">
            Email
          </label>
          <Control id="login" name="login" placeholder="Введите Email" />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="password">
            Пароль
          </label>
          <Control
            id="password"
            type="password"
            name="password"
            placeholder="Введите пароль"
          />
        </div>
        <UiButton
          className="w-full"
          variant={ButtonVariant.primary}
          size={ButtonSize.lg}
        >
          Log in
        </UiButton>
      </form>
    </div>
  );
};

export default Login;
