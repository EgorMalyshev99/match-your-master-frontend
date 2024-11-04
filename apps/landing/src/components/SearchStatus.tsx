"use client";
import React from "react";
import useSearchStore from "@/store/search";

const SearchStatus = () => {
  const { filter } = useSearchStore();

  return <div>Фильтр: {filter ?? "Не выбран"}</div>;
};

export default SearchStatus;
