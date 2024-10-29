"use client";
import React, { useRef, useState } from "react";
import s from "./auth-block.module.scss";
import UiButton from "@/components/button/UiButton";
import UserCard from "@/components/cards/UserCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDev } from "@fortawesome/free-brands-svg-icons";
import { mockUser } from "@/mock";
import { publicConfig } from "@/config";
import { useClickOutside } from "@react-hooks-library/core";
import { Route } from "@/enums/navigation";

interface Props {
  className?: string;
}

const AuthBlock = ({ className = "" }: Props) => {
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
            <UserCard user={user} className="cursor-pointer" />
            {isDropdownOpened ? (
              <div className={s.dropdown} ref={dropdownRef}>
                <a
                  className={s.dropdownLink}
                  href={publicConfig.dashHost}
                  target="_blank"
                  onClick={() => onItemClick()}
                >
                  Профиль
                </a>
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
            <UiButton onClick={() => login(mockUser)}>
              <FontAwesomeIcon icon={faDev} title="Войти тестово" />
            </UiButton>
          ) : (
            <></>
          )}
          <UiButton route={Route.LOGIN}>Войти</UiButton>
          <UiButton route={Route.SIGNUP}>Зарегистрироваться</UiButton>
        </>
      )}
    </div>
  );
};

export default AuthBlock;
