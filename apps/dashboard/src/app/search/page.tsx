import React from "react";
import s from "./search.module.scss";
import SearchStatus from "@/app/ui/SearchStatus";

const Search = () => {
  return (
    <div className={s.search}>
      <div className="container">
        <h1 className={s.title}>Найди своего мастера</h1>
        <SearchStatus />
      </div>
    </div>
  );
};

export default Search;
