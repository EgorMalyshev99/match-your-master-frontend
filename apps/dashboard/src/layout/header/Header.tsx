import s from "./header.module.scss";
import Navigation from "@/components/navigation/Navigation";
import Image from "next/image";
import AuthButtons from "@/components/auth/AuthButtons";
import Link from "next/link";
import { Route } from "@/enums/route";

const Header = () => {
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.headerInner}>
          <div className="flex items-center">
            <Link href={Route.HOME} className="mr-8">
              <Image src="/img/logo.webp" width={70} height={70} alt="Logo" />
            </Link>
            <Navigation />
          </div>
          <AuthButtons className="ml-auto" />
        </div>
      </div>
    </header>
  );
};

export default Header;
