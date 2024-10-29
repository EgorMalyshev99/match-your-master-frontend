import React from "react";
import Control from "@/components/inputs/control/Control";
import { ButtonSize, ButtonVariant } from "@/enums/button";
import UiButton from "@/components/button/UiButton";

const Signup = () => {
  return (
    <div className="flex justify-center items-center py-8">
      <form action="">
        <div className="form-group">
          <label className="label" htmlFor="login">
            Email
          </label>
          <Control id="login" name="login" placeholder="Придумайте Email" />
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
        <UiButton
          className="w-full"
          variant={ButtonVariant.primary}
          size={ButtonSize.lg}
        >
          Sign up
        </UiButton>
      </form>
    </div>
  );
};

export default Signup;
