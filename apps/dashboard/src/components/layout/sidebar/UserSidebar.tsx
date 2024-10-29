"use client";
import React from "react";
import { MenuItem, PROFILE_MENU_ITEMS } from "@/const";
import Link from "next/link";
import s from "./user-sidebar.module.scss";
import LogoutButton from "@/components/auth/LogoutButton";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function UserSidebar() {
  const pathname = usePathname();

  return (
    <aside className={s.sidebar}>
      <div className={s.sidebarLinks}>
        {PROFILE_MENU_ITEMS.map((item: MenuItem, index) => {
          const { path, label, icon } = item;
          return (
            <Link
              href={path}
              className={`${s.sidebarLink} ${pathname === path ? s.sidebarLinkActive : ""}`}
              key={index}
            >
              <FontAwesomeIcon icon={icon} className="mr-6" />
              {label}
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
