import React from "react";
import Control from "@/components/inputs/control/Control";

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
      </form>
    </div>
  );
};

export default Login;
