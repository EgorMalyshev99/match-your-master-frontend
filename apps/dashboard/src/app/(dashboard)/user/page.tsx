"use client";
import React from "react";
import { useSession } from "next-auth/react";

const User = () => {
  const { data } = useSession();

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default User;
