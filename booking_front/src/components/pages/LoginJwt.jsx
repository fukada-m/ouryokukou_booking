import React, { useState } from "react";
import { login } from "../../utils/api";
import { Box, Button, Image } from "@chakra-ui/react";
import { BaseInput } from "../atoms/input/BaseInput";
import { MainHeading } from "../atoms/heading/MainHeading";
import { useMessage } from "../../hooks/useMessage";
import app_describe from "../../images/app_describe.png";

export const LoginJwt = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { showMessage } = useMessage();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      user: {
        email,
        password,
      },
    };
    const status = await login(data);
    if (!status) {
      showMessage({ title: "ログインに失敗しました", status: "error" });
    }
  };

  return (
    <>
      <Box m="auto" my={5} p={4} w={300} bg={"pink"}>
        <MainHeading>ようこそ</MainHeading>
        <label>
          Email:
          <BaseInput
            w="250px"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <BaseInput
            w="250px"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <Button my={3} onClick={handleSubmit}>
          ログイン
        </Button>
        <p>email: yakiniku@example.com </p>
        <p>password: pass</p>
        <p>ご自由にお試しください</p>
      </Box>
      <Image m={"auto"} src={app_describe} alt="アプリの説明" />
    </>
  );
};
