import React from 'react'
import { Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay } from '@chakra-ui/react'

export const MenuDrawer = (props) => {
    const { isOpen, onClose } = props;
  return (
    <Drawer placement="right" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Button w="100%">予約を削除</Button>
            <Button w="100%">席を追加</Button>
            <Button w="100%">席を削除</Button>
            <Button w="100%">編集</Button>
            <Button w="100%">席の移動</Button>
            <Button w="100%">来店</Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}
