import s from "./header.module.scss";
import Navigation from "@/components/navigation/Navigation";
import Image from "next/image";
import Link from "next/link";
import { Route } from "@/enums/navigation";
import { Container, Flex } from "@mantine/core";

const Header = () => {
  return (
    <header className={s.header}>
      <Container size="xl">
        <div className={s.headerInner}>
          <Flex align="center">
            <Link href={Route.HOME} className="mr-20">
              <Image src="/img/logo.webp" width={70} height={70} alt="Logo" />
            </Link>
            <Navigation />
          </Flex>
        </div>
      </Container>
    </header>
  );
};

export default Header;
