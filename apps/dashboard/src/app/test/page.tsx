import s from "./test.module.scss";
import TestComponent from "@/components/test";
import { Container } from "@mantine/core";

const Test = () => {
  return (
    <div className={s.test}>
      <Container size="lg">
        <TestComponent />
      </Container>
    </div>
  );
};

export default Test;
