"use client";
import React from "react";
import s from "./navigation.module.scss";
import Link from "next/link";
import { Route } from "@/enums/route";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();
  const elements = [
    {
      route: Route.HOME,
      label: "Главная",
    },
    {
      route: Route.SEARCH,
      label: "Поиск",
    },
    {
      route: Route.FAQ,
      label: "FAQ",
    },
    {
      route: Route.CONTACTS,
      label: "Контакты",
    },
  ];

  return (
    <nav className={s.nav}>
      {elements.map((element) => (
        <Link
          key={element.route}
          href={element.route}
          className={`${s.navLink} ${pathname === element.route ? s.navLinkActive : ""}`}
        >
          {element.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
