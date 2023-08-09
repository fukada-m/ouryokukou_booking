import React, { useState } from "react";
import { login } from "../../utils/api";
import { Box, Button, Heading, Image } from "@chakra-ui/react";
import { BaseInput } from "../atoms/input/BaseInput";
import { useMessage } from "../../hooks/useMessage";
import app_image from "../../images/app_image.png";

export const LoginJwt = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { showMessage } = useMessage();

  const post = async (data) => {
    const status = await login(data);
    if (!status) {
      showMessage({ title: "ログインに失敗しました", status: "error" });
    }
  };

  const onClickUserLogin = (event) => {
    event.preventDefault();
    const data = {
      user: {
        email,
        password,
      },
    };
    post(data);
  };

  const onClickGestLogin = (event) => {
    event.preventDefault();
    const data = {
      user: {
        email: "yakiniku@example.com",
        password: "pass",
      },
    };
    post(data);
  };

  return (
    <Box p={{ base: 10, md: 20 }} bg={"pink"}>
      <Heading color={"gray.600"} fontSize={"5xl"} my={10} textAlign={"center"}>
        鴨緑江Booking
      </Heading>
      <Heading my={10} color={"gray.500"} textAlign={"center"}>
        簡単操作でいつでもどこでも予約の管理ができます
      </Heading>
      <Button
        m={"auto"}
        display={"block"}
        my={10}
        pt={5}
        pb={10}
        onClick={onClickGestLogin}
      >
        ゲストログインして試してみる
      </Button>
      <Image m={"auto"} mb={5} src={app_image} alt="アプリの説明" />
      <Heading my={15}>ボタン操作でわかりやすい</Heading>
      <p>
        右上の4つのボタンを押すと各予約に機能を実行するためのボタンを表示します。
      </p>

      <Box m={{ base: 5, md: 10 }} p={10} borderRadius={"10px"} bg={"white"}>
        <Box display={"block"}>
          Email
          <BaseInput
            w="250px"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Box>
        <Box my={5} display={"block"}>
          Password:
          <BaseInput
            w="250px"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Box>
        <Button my={3} onClick={onClickUserLogin}>
          ログイン
        </Button>
      </Box>
    </Box>
  );
};
