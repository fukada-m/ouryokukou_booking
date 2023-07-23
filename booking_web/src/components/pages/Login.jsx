import React, {memo} from 'react'
import { Link } from 'react-router-dom'

export const Login = memo(() => {
  return (
    <div>
      Login画面
      <Link to="/allBooking">Loginして全ての予約を表示</Link>
    </div>
  );
})

