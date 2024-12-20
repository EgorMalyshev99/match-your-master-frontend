import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import { config } from "@fortawesome/fontawesome-svg-core";
import Provider from "@/components/providers/provider";
import { ColorSchemeScript } from "@mantine/core";
import "@/scss/index.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

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
      <head>
        <ColorSchemeScript />
      </head>
      <body className="page-body">
        <Provider>
          <div className="content">
            <Header />
            <main id="content">{children}</main>
            <Footer />
          </div>
        </Provider>
      </body>
    </html>
  );
}
