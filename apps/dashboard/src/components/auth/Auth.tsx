"use client";
import React from "react";
import useAuthStore from "@/store/auth";
import ReactModal from "react-modal";
import SignIn from "@/components/auth/SignIn";
import SignUp from "@/components/auth/SignUp";

const Auth = () => {
  const { signInOpened, setSignInOpened, signUpOpened, setSignUpOpened } =
    useAuthStore();

  return (
    <>
      {signInOpened && (
        <ReactModal isOpen={signInOpened}>
          <div className="flex justify-end">
            <button type="button" onClick={() => setSignInOpened(false)}>
              Закрыть
            </button>
          </div>
          <div className="modal-content">
            <SignIn />
          </div>
        </ReactModal>
      )}
      {signUpOpened && (
        <ReactModal isOpen={signUpOpened}>
          <div className="flex justify-end">
            <button type="button" onClick={() => setSignUpOpened(false)}>
              Закрыть
            </button>
          </div>
          <div className="modal-content">
            <SignUp />
          </div>
        </ReactModal>
      )}
    </>
  );
};

export default Auth;
