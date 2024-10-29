"use client";

import { useEffect, useState } from "react";
import { publicConfig } from "@/config";
import { API_PATHS } from "@/enums/api";
import { Button, Flex } from "@mantine/core";

const Test = () => {
  const [data, setData] = useState<string | null>("{}");
  const [loading, setLoading] = useState<boolean>(false);

  const requestData = () => {
    setLoading(true);
    fetch(`${publicConfig.apiHost}/${API_PATHS.test}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.error(error);
        setData("{}");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    requestData();
  }, []);

  return (
    <Flex align="center" justify="center" direction="column">
      {loading ? (
        <div className="font-medium text-lg">Loading...</div>
      ) : data ? (
        <pre>{JSON.stringify(data)}</pre>
      ) : (
        <div className="font-medium text-lg">Empty :(</div>
      )}
      <Button className="mt-4" onClick={() => requestData()}>
        Запросить данные
      </Button>
    </Flex>
  );
};

export default Test;
