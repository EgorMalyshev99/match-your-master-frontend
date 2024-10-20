"use client";
import React, { useRef, useState } from "react";
import s from "./auth-block.module.scss";
import useSessionStore from "@/store/session";
import Button from "@/components/button/Button";
import UserCardSm from "@/components/cards/UserCardSm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDev } from "@fortawesome/free-brands-svg-icons";
import { mockUser } from "@/mock";
import { publicConfig } from "@/config";
import { useClickOutside } from "@react-hooks-library/core";
import Link from "next/link";
import { Route } from "@/enums/navigation";

interface Props {
  className?: string;
}

const AuthBlock = ({ className = "" }: Props) => {
  const { user, login, logout, setSignInOpened, setSignUpOpened } =
    useSessionStore();
  const [isDropdownOpened, setIsDropdownOpened] = useState<boolean>(false);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const cardClickHandler = () => {
    setIsDropdownOpened(!isDropdownOpened);
  };

  const onItemClick = () => {
    setIsDropdownOpened(false);
  };

  useClickOutside(dropdownRef, (evt) => {
    const target = evt.target as HTMLElement;
    if (
      !isDropdownOpened ||
      cardRef.current === target ||
      cardRef.current === target.closest("div")
    ) {
      return;
    }
    setIsDropdownOpened(false);
  });

  return (
    <div className={`${s.authBlock} ${className}`}>
      {user ? (
        <div>
          <div className="relative" ref={cardRef} onClick={cardClickHandler}>
            <UserCardSm user={user} className="cursor-pointer" />
            {isDropdownOpened ? (
              <div className={s.dropdown} ref={dropdownRef}>
                <Link
                  className={s.dropdownLink}
                  href={Route.PROFILE}
                  onClick={() => onItemClick()}
                >
                  Профиль
                </Link>
                <button
                  className={s.dropdownLink}
                  type="button"
                  onClick={() => {
                    logout();
                    onItemClick();
                  }}
                >
                  Выйти
                </button>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      ) : (
        <>
          {publicConfig.isDev ? (
            <Button onClick={() => login(mockUser)}>
              <FontAwesomeIcon icon={faDev} title="Войти тестово" />
            </Button>
          ) : (
            <></>
          )}
          <Button onClick={() => setSignInOpened(true)}>Войти</Button>
          <Button onClick={() => setSignUpOpened(true)}>
            Зарегистрироваться
          </Button>
        </>
      )}
    </div>
  );
};

export default AuthBlock;
