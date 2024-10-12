import React from "react";
import Control from "@/components/inputs/control/Control";

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
      </form>
    </div>
  );
};

export default Signup;
