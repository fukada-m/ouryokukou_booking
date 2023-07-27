import React, { useEffect } from 'react'
import { useSetRecoilState, useRecoilState } from "recoil";

import { nameState } from "../../../atom/state";
import { BaseInput } from "./BaseInput";

export const InputName = () => {
    const [name, setName] = useRecoilState(nameState);

  return (
    <BaseInput value={name} type={"text"} w={"250px"} onChange={(e) => setName(e.target.value)} />
  );
}
