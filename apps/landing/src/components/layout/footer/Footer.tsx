import s from "./footer.module.scss";
import { Container } from "@mantine/core";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <Container size="xl"></Container>
    </footer>
  );
};

export default Footer;
