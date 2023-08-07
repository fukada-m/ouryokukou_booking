import React from "react";
import {
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { numberOfAdultsState, numberOfChildrenState } from "../../atom/state";

export const SelectMember = () => {
  const [numberOfAdults, setNumberOfAdults] =
    useRecoilState(numberOfAdultsState);
  const [numberOfChildren, setNumberOfChildren] = useRecoilState(
    numberOfChildrenState
  );

  return (
    <>
      <FormLabel fontSize={"2xl"}>大人</FormLabel>
      <NumberInput
        w="80px"
        min={1}
        max={60}
        onChange={(value) => setNumberOfAdults(parseInt(value))}
        value={numberOfAdults}
      >
        <NumberInputField bg={"white"} />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <FormLabel fontSize={"2xl"}>子供</FormLabel>
      <NumberInput
        w="80px"
        min={0}
        max={60}
        onChange={(value) => setNumberOfChildren(parseInt(value))}
        value={numberOfChildren}
      >
        <NumberInputField bg={"white"} />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </>
  );
};
