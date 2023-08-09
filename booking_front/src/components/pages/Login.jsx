import React, { useState } from "react";
import { login } from "../../utils/api";
import { useMessage } from "../../hooks/useMessage";
import { Box, Button } from "@chakra-ui/react";
import { BaseInput } from "../atoms/input/BaseInput";

export const Login = () => {
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

  return (
    <Box w={"50%"} m={"auto"} p={10} borderRadius={"10px"} bg={"white"}>
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
      <p>Email: yakiniku@example.com</p>
      <p>Password: pass</p>
    </Box>
  );
};
