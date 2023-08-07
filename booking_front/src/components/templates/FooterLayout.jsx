import React from "react";
import { Button } from "@chakra-ui/react";

export const FooterLayout = () => {
  return (
    <Button
      mx={5}
      bg={"white"}
      onClick={() => {
        localStorage.removeItem("token");
        window.location.href = "/";
      }}
    >
      ログアウト
    </Button>
  );
};
