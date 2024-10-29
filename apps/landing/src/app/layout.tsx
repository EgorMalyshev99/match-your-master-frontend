import type { Metadata } from "next";
import "../css/global.css";
import "../css/fonts.css";
import "../css/forms.css";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

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
          <main id="content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
