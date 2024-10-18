import React from 'react'

import { Link } from "react-router-dom"

export default function Todo() {
  return (
    <div className="container">
      <Link to="create">Создать запись</Link>
    </div>
  )
}
