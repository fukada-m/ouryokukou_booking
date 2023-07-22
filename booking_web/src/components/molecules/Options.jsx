import React from 'react'
import { Box, Button } from '@chakra-ui/react'
import { buttonDispState, optionDispState } from '../../atom/state';
import { useSetRecoilState, useRecoilValue } from 'recoil';

export const Options = () => {
    const setButtonDisp = useSetRecoilState(buttonDispState)
    const optionDisp = useRecoilValue(optionDispState)

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
      {optionDisp.delete && (
        <Button onClick={onClickDispDelete} p="2" m="1">
          削除
        </Button>
      )}
      {optionDisp.edit && (
        <Button onClick={onClickDispEdit} p="2" m="1">
          編集
        </Button>
      )}
      {optionDisp.addTable && (
        <Button onClick={onClickDispAddTable} p="2" m="1">
          席を割り振る
        </Button>
      )}
      {optionDisp.removeTable && (
        <Button onClick={onClickDispRemoveTable} p="2" m="1">
          席を解除
        </Button>
      )}
      {optionDisp.moveTable && (
        <Button onClick={onClickDispMoveTable} p="2" m="1">
          席の移動
        </Button>
      )}
    </Box>
  );
}
