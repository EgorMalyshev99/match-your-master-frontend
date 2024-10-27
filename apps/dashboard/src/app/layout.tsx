import type { Metadata } from "next";
import "../css/global.css";
import "../css/fonts.css";
import "../css/forms.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import React from "react";
import { SessionProvider } from "next-auth/react";

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
        <div className="content">{children}</div>
      </body>
    </html>
  );
}
