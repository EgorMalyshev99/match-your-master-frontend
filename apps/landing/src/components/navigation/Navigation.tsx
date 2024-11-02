"use client";
import React from "react";
import s from "./navigation.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HEADER_MENU_ITEMS } from "@/const";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className={s.nav}>
      {HEADER_MENU_ITEMS.map((element) => (
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
