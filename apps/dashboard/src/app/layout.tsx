import type { Metadata } from "next";
import "../css/global.css";
import "../css/fonts.css";
import "../css/forms.css";
import s from "./layout.module.scss";
import Header from "@/layout/header/Header";
import Footer from "@/layout/footer/Footer";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import UserSidebar from "@/layout/sidebar/UserSidebar";
import UserContent from "@/layout/content/UserContent";
import React from "react";

config.autoAddCss = false;
export const metadata: Metadata = {
  title: "Match your master",
  description: "Match your master",
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ru">
      <body className="page-body">
        <div className="content">
          <Header />
          <main id="content">
            <div className={s.layout}>
              <UserSidebar />
              <UserContent>{children}</UserContent>
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
