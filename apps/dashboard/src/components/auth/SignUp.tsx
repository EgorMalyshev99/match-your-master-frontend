import React from "react";
import Control from "@/components/inputs/control/Control";
import { ButtonSize, ButtonVariant } from "@/enums/button";
import Button from "@/components/button/Button";

const Signup = () => {
  return (
    <div className="flex justify-center items-center py-8">
      <form action="">
        <div className="form-group">
          <label className="label" htmlFor="login">
            Логин
          </label>
          <Control id="login" name="login" placeholder="Придумайте логин" />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="password">
            Пароль
          </label>
          <Control
            id="password"
            type="password"
            name="password"
            placeholder="Придумайте пароль"
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="password">
            Повторите пароль
          </label>
          <Control id="password" type="password" name="password" />
        </div>
        <Button
          className="w-full"
          variant={ButtonVariant.primary}
          size={ButtonSize.lg}
        >
          Sign up
        </Button>
      </form>
    </div>
  );
};

export default Signup;
