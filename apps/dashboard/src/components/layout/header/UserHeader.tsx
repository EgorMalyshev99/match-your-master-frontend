import s from "./user-header.module.scss";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Route } from "@/enums/navigation";

const UserHeader = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <Link href={Route.HOME}>
          <Image
            className={s.sidebarLogo}
            src="/img/logo.webp"
            width={45}
            height={45}
            alt="Logo"
          />
        </Link>
      </div>
    </header>
  );
};

export default UserHeader;
