import React from "react";
import { User } from "@/models/user";
import s from "./user-info.module.scss";

interface Props {
  user: User;
}

const UserInfo = ({ user }: Props) => {
  const { firstName, lastName, age, qualification, city } = user;

  const mainInfo = [
    {
      label: "Имя",
      value: `${firstName} ${lastName}`,
    },
    {
      label: "Возраст",
      value: age,
    },
    {
      label: "Квалификация",
      value: qualification,
    },
    {
      label: "Город",
      value: city,
    },
  ];

  return (
    <div className={s.userInfo}>
      <div className="mb-4">
        <div className={`${s.userInfoTitle} mb-2`}>Основная информация</div>
        <ul className={s.userInfoList}>
          {mainInfo.map(({ label, value }, index) => (
            <li className={s.userInfoItem} key={index}>
              {label}: {value}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div className={`${s.userInfoTitle} mb-2`}>Контакты</div>
        <ul className={s.userInfoList}>
          <li className={s.userInfoItem}>
            Телефон:{" "}
            <a className="text-primary-400" href={`tel:${user.phone}`}>
              {user.phone}
            </a>
          </li>
          <li className={s.userInfoItem}>
            Email:{" "}
            <a className="text-primary-400" href={`mailto:${user.email}`}>
              {user.email}
            </a>
          </li>
          <li className={s.userInfoItem}>
            Telegram:{" "}
            <a
              className="text-primary-400"
              href={`https://t.me/${user.telegram}`}
            >
              {user.telegram}
            </a>
          </li>
          <li className={s.userInfoItem}>Город: {user.city}</li>
        </ul>
      </div>
    </div>
  );
};

export default UserInfo;
