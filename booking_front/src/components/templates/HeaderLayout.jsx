import React, { useEffect } from "react";
import { Header } from "../organisms/layout/Header";

export const HeaderLayout = (props) => {
  const { children } = props;
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      window.location.href = "/";
    }
  }, [token]);

  return (
    <>
      <Header />
      {children}
    </>
  );
};
