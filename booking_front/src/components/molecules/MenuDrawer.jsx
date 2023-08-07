import React from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";
import { buttonDispState } from "../../atom/state";

export const MenuDrawer = (props) => {
  const { isOpen, onClose } = props;
  const setButtonDisp = useSetRecoilState(buttonDispState);

  const onClickDispDelete = () => {
    setButtonDisp(() => ({
      delete: true,
      edit: false,
      addTable: false,
      removeTable: false,
      moveTable: false,
    }));
    onClose();
  };
  const onClickDispEdit = () => {
    setButtonDisp(() => ({
      delete: false,
      edit: true,
      addTable: false,
      removeTable: false,
      moveTable: false,
    }));
    onClose();
  };
  const onClickDispAddTable = () => {
    setButtonDisp(() => ({
      delete: false,
      edit: false,
      addTable: true,
      removeTable: false,
      moveTable: false,
    }));
    onClose();
  };
  const onClickDispRemoveTable = () => {
    setButtonDisp(() => ({
      delete: false,
      edit: false,
      addTable: false,
      removeTable: true,
      moveTable: false,
    }));
    onClose();
  };
  const onClickDispMoveTable = () => {
    setButtonDisp(() => ({
      delete: false,
      edit: false,
      addTable: false,
      removeTable: false,
      moveTable: true,
    }));
    onClose();
  };
  return (
    <Drawer placement="right" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Button onClick={onClickDispDelete} w="100%" my={2}>
              削除
            </Button>
            <Button onClick={onClickDispEdit} w="100%" my={2}>
              編集
            </Button>
            <Button onClick={onClickDispAddTable} w="100%" my={2}>
              席を割り振る
            </Button>
            <Button onClick={onClickDispRemoveTable} w="100%" my={2}>
              席を解除
            </Button>
            <Button onClick={onClickDispMoveTable} w="100%" my={2}>
              席の移動
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};
