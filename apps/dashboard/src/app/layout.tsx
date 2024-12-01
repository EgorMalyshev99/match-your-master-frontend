import React from "react";
import type { Metadata } from "next";
import { config } from "@fortawesome/fontawesome-svg-core";
import { ColorSchemeScript } from "@mantine/core";
import Provider from "@/components/providers/provider";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@/scss/index.scss";

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
    <html lang="ru" suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
      </head>
      <body className="page-body">
        <Provider>
          <div className="content">{children}</div>
        </Provider>
      </body>
    </html>
  );
}
