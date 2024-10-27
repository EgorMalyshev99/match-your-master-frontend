import React from "react";
import Control from "@/components/ui/Control";
import Button from "@/components/ui/Button";
import { ButtonSize, ButtonVariant } from "@/enums/button";
import GithubAuthButton from "@/components/auth/GithubAuthButton";

const Login = () => {
  return (
    <div className="flex justify-center items-center py-8">
      <form action="">
        <div className="form-group">
          <label className="label" htmlFor="login">
            Логин
          </label>
          <Control id="login" name="login" placeholder="Введите логин" />
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
        <Button
          className="w-full"
          variant={ButtonVariant.primary}
          size={ButtonSize.lg}
        >
          Log in
        </Button>
        <div className="mt-2">
          <GithubAuthButton className="w-full" />
        </div>
      </form>
    </div>
  );
};

export default Login;
