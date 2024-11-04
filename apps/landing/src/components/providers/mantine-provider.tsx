import React from "react";
import { createTheme, MantineProvider } from "@mantine/core";

interface Props {
  children: React.ReactNode;
}

const theme = createTheme({
  primaryColor: "blue",
  cursorType: "pointer",
});
const Mantine = ({ children }: Props) => {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
};

export default Mantine;
