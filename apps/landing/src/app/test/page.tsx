import s from "./test.module.scss";
import TestComponent from "@/components/test";

const Test = () => {
  return (
    <div className={s.test}>
      <div className="container">
        <TestComponent />
      </div>
    </div>
  );
};

export default Test;
