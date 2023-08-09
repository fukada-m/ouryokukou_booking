import React, { useCallback } from "react";
import { login } from "../../utils/api";
import { Box, Button, Heading, Image } from "@chakra-ui/react";
import { useMessage } from "../../hooks/useMessage";
import appImage from "../../images/appImage.png";
import createBooking from "../../images/createBooking.png";
import { useNavigate } from "react-router-dom";

export const Top = () => {
  const { showMessage } = useMessage();
  const navigate = useNavigate();
  const onClickNavigate = useCallback(() => navigate("/login"), []);

  const post = async (data) => {
    const status = await login(data);
    if (!status) {
      showMessage({ title: "ログインに失敗しました", status: "error" });
    }
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
      <Button m={"auto"} my={10} display={"block"} onClick={onClickGestLogin}>
        ゲストログインして試してみる
      </Button>
      <Image m={"auto"} mb={5} src={appImage} alt="全予約画面の説明" />
      <Heading my={5}>ボタン操作でわかりやすい</Heading>
      <p>
        右上の4つのボタンのいずれかを押すと各予約に機能を実行するためのボタンを表示します。
      </p>
      <Image m={"auto"} my={10} src={createBooking} alt="新規予約画面の説明" />
      <Heading my={5}>予約の作成が簡単</Heading>
      <p>
        名前を入力するだけであとは予約の日時、人数、カテゴリーを選択するだけで予約を作成できます。
      </p>
      <Button m={"auto"} my={10} display={"block"} onClick={onClickGestLogin}>
        ゲストログインして試してみる
      </Button>
      <Button m={"auto"} my={10} onClick={onClickNavigate} display={"block"}>
        スタッフ用ログイン画面に移動
      </Button>
    </Box>
  );
};
