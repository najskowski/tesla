import { Link } from 'react-router-dom'
import svg from './tesla-9.svg'
import React from 'react'

export default function Header() {
  return (
    <div className="fixed flex-wrap w-screen p-12 brightness-0">
      <Link to='/'>
        <img src={svg} width="150px" alt="logo" />
      </Link>
    </div>
  )
}
