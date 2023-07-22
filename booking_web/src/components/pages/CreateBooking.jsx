import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { Heading } from "@chakra-ui/react";

import { createBooking } from "../../utils/api";
import { getWeek } from "../../utils/date";
import { optionDispState } from "../../atom/state";


export const CreateBooking = () => {
  const navigate = useNavigate();
  const setOptionDisp = useSetRecoilState(optionDispState);

  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [name, setName] = useState();
  const [numberOfAdults, setNumberOfAdults] = useState(1);
  const [numberOfChildren, setNumberOfChildren] = useState(1);
  const [bookingCategoryId, setBookingCategoryId] = useState("1");
  const [tableId, setTableId] = useState();
  const [note, setNote] = useState();

  const tableNum = [
    { id: "", name: "未定" },
    { id: 1, name: "1番" },
    { id: 2, name: "2番" },
    { id: 3, name: "3番" },
    { id: 5, name: "5番" },
    { id: 11, name: "11番" },
    { id: 12, name: "12番" },
    { id: 13, name: "13番" },
    { id: 14, name: "14番" },
    { id: 15, name: "15番" },
    { id: 16, name: "16番" },
    { id: 21, name: "21番" },
  ];

  const create = async () => {
    const week = getWeek(date);
    const data = {
      booking: {
        date,
        week,
        time,
        name,
        number_of_adults: numberOfAdults,
        number_of_children: numberOfChildren,
        booking_category_id: bookingCategoryId,
        note,
      },
      table: {
        id: [tableId],
      },
    };

    const res = await createBooking(data);
    if (res.status === "SUCCESS") {
      // alert("予約の作成が完了しました");
      navigate("/allBooking");
    } else {
      alert("予約の作成に失敗しました");
    }
  };

  useEffect(() => {
    setOptionDisp({
      delete: false,
      edit: false,
      addTable: false,
      removeTable: false,
      moveTable: false,
    });
  }, []);

  return (
    <>
      <Heading as="h1" fontSize={{ base: "lg", md: "xl" }}>
        新規予約
      </Heading>
      <div>
        <input type="date" onChange={(e) => setDate(e.target.value)} />
        <input type="time" onChange={(e) => setTime(e.target.value)} />
        <label>名前</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <br />
        <label>大人</label>
        <input
          type="number"
          value={numberOfAdults}
          onChange={(e) => setNumberOfAdults(e.target.value)}
          min={1}
          max={99}
        />
        <label>子供</label>
        <input
          type="number"
          value={numberOfChildren}
          onChange={(e) => setNumberOfChildren(e.target.value)}
          min={0}
          max={99}
        />
        <br />
        <label>予約カテゴリー</label>
        <input
          type="radio"
          value="1"
          checked={bookingCategoryId === "1"}
          onChange={() => setBookingCategoryId("1")}
        />
        <label>LINE</label>

        <input
          type="radio"
          value="2"
          checked={bookingCategoryId === "2"}
          onChange={() => setBookingCategoryId("2")}
        />
        <label>電話</label>
        <br />
        <label>卓番</label>
        <select value={tableId} onChange={(e) => setTableId(e.target.value)}>
          {tableNum.map((table) => (
            <option key={table.id} value={table.id}>
              {table.name}
            </option>
          ))}
        </select>
        <br />
        <label>備考</label>
        <textarea onChange={(e) => setNote(e.target.value)} />
        <button onClick={create}>登録</button>
      </div>
    </>
  );
};
