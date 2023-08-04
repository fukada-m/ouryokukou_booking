import React from 'react'
import { Button } from '@chakra-ui/react'

export const FooterLayout = () => {
  return (
    <Button
      onClick={() => {
        localStorage.removeItem("token");
      }}
    >
      ログアウト
    </Button>
  );
}
