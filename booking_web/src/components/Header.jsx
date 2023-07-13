import React from 'react'
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <h1>Header</h1>
      <Link to="/allBooking">全ての予約を表示</Link>
      <span> | </span>
      <Link to="/todayBooking">今日の予約を表示</Link>
      <span> | </span>
      <Link to="/createBooking">新規予約を作成</Link>
    </div>
  );
}

