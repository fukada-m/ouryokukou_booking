import React from 'react'
import { Link } from 'react-router-dom'

export const Page404 = () => {
  return (
    <div>
      ページが見つかりません
      <Link to="/allBooking">全ての予約を表示に戻る</Link>
    </div>
  );
}

