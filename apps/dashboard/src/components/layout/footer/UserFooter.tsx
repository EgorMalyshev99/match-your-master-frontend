import s from "./user-footer.module.scss";
import { Container } from "@mantine/core";

const UserFooter = () => {
  return (
    <footer className={s.footer}>
      <Container size="lg"></Container>
    </footer>
  );
};

export default UserFooter;
