import React from 'react'
import { IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export const MenuIconButton = (props) => {
    const { onOpen } = props;
  return (
    <IconButton
      aria-label="オプションボタン"
      icon={<HamburgerIcon />}
      size="lg"
      variant="unstyled"
      display={{ base: "block", md: "none" }}
      onClick={onOpen}
    />
  );
}

