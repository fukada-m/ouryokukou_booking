import React from "react";
import { Textarea, FormLabel } from "@chakra-ui/react";
import { noteState } from "../../atom/state";
import { useRecoilState } from "recoil";

export const TextNote = () => {
  const [note, setNote] = useRecoilState(noteState);
  return (
    <>
      <FormLabel fontSize={"2xl"}>備考</FormLabel>
      <Textarea
        bg={"white"}
        w={"300px"}
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
    </>
  );
};
