import React, {memo} from 'react'
import { Link as RouterLink  } from 'react-router-dom'
import { Box, Heading, chakra } from '@chakra-ui/react'

export const Login = memo(() => {
  const Link = chakra(RouterLink);

  return (
    <Box m="auto" p={4} w={300} bg={'pink'}>
      <Heading my={10}p={4}>Login画面</Heading>
      <Link p={4} m={6} bg={"white"} borderRadius={15} _hover={{bg: "gray.200", opacity: "0.8"}} to="/allBooking">ログイン</Link>
    </Box>
  );
})

