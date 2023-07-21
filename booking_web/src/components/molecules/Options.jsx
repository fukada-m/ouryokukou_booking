import React from 'react'
import { Box, Button } from '@chakra-ui/react'

export const Options = () => {
  return (
    <Box display={{ base: "none", md: "block" }}>
      <Button m="1">予約を削除</Button>
      <Button m="1">席を追加</Button>
      <Button m="1">席を削除</Button>
      <Button m="1">編集</Button>
      <Button m="1">席の移動</Button>
      <Button m="1">来店</Button>
    </Box>
  );
}
