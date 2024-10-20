"use client";
import React from "react";
import { MenuItem, PROFILE_MENU_ITEMS } from "@/const";
import Link from "next/link";
import s from "./user-sidebar.module.scss";
import LogoutButton from "@/components/auth/LogoutButton";
import { usePathname } from "next/navigation";

function UserSidebar() {
  const pathname = usePathname();

  return (
    <aside className={s.sidebar}>
      <div className={s.sidebarLinks}>
        {PROFILE_MENU_ITEMS.map((item: MenuItem, index) => {
          return (
            <Link
              href={item.path}
              className={`${s.sidebarLink} ${pathname === item.path ? s.sidebarLinkActive : ""}`}
              key={index}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
      <div className={s.sidebarFooter}>
        <LogoutButton />
      </div>
    </aside>
  );
}

export default UserSidebar;
