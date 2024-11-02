import React from "react";
import s from "./search.module.scss";
import { Container } from "@mantine/core";
import SearchStatus from "@/components/SearchStatus";

const Search = () => {
  return (
    <div className={s.search}>
      <Container size="xl">
        <h1 className={s.title}>Найди своего мастера</h1>
        <SearchStatus />
      </Container>
    </div>
  );
};

export default Search;
