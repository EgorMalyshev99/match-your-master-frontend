import React from "react";
import MantineProvider from "@/components/providers/mantine-provider";

interface Props {
  children: React.ReactNode;
}
const Provider = ({ children }: Props) => {
  return <MantineProvider>{children}</MantineProvider>;
};

export default Provider;
