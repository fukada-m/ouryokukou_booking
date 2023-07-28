import React from 'react'
import { Heading } from '@chakra-ui/react'

export const MainHeading = (props) => {
    const { children } = props

  return (
    <Heading as="h1" px={5} color={"gray.600"} fontSize={{ base: "2xl", md: "3xl" }}>
        {children}
    </Heading>
  );
}

