import React from "react";
import SignIn from "@/components/auth/SignInForm";
import s from "./login.module.scss";

const Login = async () => {
  return (
    <div className={s.login}>
      <div className="container">
        <SignIn />
      </div>
    </div>
  );
};

export default Login;
