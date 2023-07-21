import React from 'react'
import { Box, Button } from '@chakra-ui/react'
import { buttonDispState } from '../../atom/state';
import { useSetRecoilState } from 'recoil';

export const Options = () => {
    const setButtonDisp = useSetRecoilState(buttonDispState)

    const onClickDispDelete = () => {
        setButtonDisp(() => ({delete: true, edit: false, addTable: false, removeTable: false, moveTable: false}));
    }
    const onClickDispEdit = () => {
        setButtonDisp(() => ({delete: false, edit: true, addTable: false, removeTable: false, moveTable: false}));
    }
    const onClickDispAddTable = () => {
        setButtonDisp(() => ({delete: false, edit: false, addTable: true, removeTable: false, moveTable: false}));
    }
    const onClickDispRemoveTable = () => {
        setButtonDisp(() => ({delete: false, edit: false, addTable: false, removeTable: true, moveTable: false}));
    }
    const onClickDispMoveTable = () => {
        setButtonDisp(() => ({delete: false, edit: false, addTable: false, removeTable: false, moveTable: true}));
    }


  return (
    <Box display={{ base: "none", md: "block" }}>
      <Button onClick={onClickDispDelete} m="1">削除</Button>
      <Button onClick={onClickDispEdit}m="1">編集</Button>
      <Button onClick={onClickDispAddTable} m="1">席を割り振る</Button>
      <Button onClick={onClickDispRemoveTable} m="1">席を解除</Button>
      <Button onClick={onClickDispMoveTable} m="1">席の移動</Button>
    </Box>
  );
}
