"use client";
import React from "react";
import useSessionStore from "@/store/session";
import ReactModal from "react-modal";
import SignIn from "@/components/auth/SignIn";
import SignUp from "@/components/auth/SignUp";

const Auth = () => {
  const { signInOpened, setSignInOpened, signUpOpened, setSignUpOpened } =
    useSessionStore();

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
