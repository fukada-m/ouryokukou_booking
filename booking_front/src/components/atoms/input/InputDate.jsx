import React from "react";
import { useRecoilState } from "recoil";

import { dateState } from "../../../atom/state";
import { BaseInput } from "./BaseInput";

export const InputDate = () => {
  const [date, setDate] = useRecoilState(dateState);

  return (
    <BaseInput
      value={date}
      type={"date"}
      w={"125px"}
      placeholder={"日付"}
      onChange={(e) => setDate(e.target.value)}
    />
  );
};
