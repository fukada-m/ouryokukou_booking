import React, { useState, useRef } from "react";
import {
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from "@chakra-ui/react";
import { useDeleteBooking } from "../../../hooks/useDeleteBooking";

export const DeleteButton = (props) => {
  const { bookingId } = props;
  const { destroy } = useDeleteBooking();

  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef();

  const onClickDelete = async () => {
    destroy(bookingId);
  };

  const handleConfirmDelete = () => {
    onClickDelete();
    onClose();
  };

  return (
    <>
      <Button
        bg={"white"}
        p={8}
        fontSize={"2xl"}
        onClick={() => setIsOpen(true)}
      >
        削除
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              削除の確認
            </AlertDialogHeader>
            <AlertDialogBody>
              本当に削除しますか？この操作は後で元に戻すことはできません。
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                キャンセル
              </Button>
              <Button colorScheme="red" onClick={handleConfirmDelete} ml={3}>
                削除
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};
