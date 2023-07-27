import React, { useEffect } from 'react'
import { useSetRecoilState, useRecoilState } from "recoil";

import { dateState } from "../../../atom/state";
import { BaseInput } from './BaseInput';

export const InputDate = () => {
  const [date, setDate] = useRecoilState(dateState);


  return (
    <BaseInput value={date} type={"date"} w={"150px"} onChange={(e) => setDate(e.target.value)} />
  );
}
