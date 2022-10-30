import { Link } from "react-router-dom";
import React from 'react'

export default function Buybutton() {
  return (
    <>
      <Link to={"buy"}>
        <button className='bg-black/75 w-64 h-12 rounded-lg text-lg font-semibold text-white/75'>
          Zamów
        </button>
      </Link>
    </>
  )
}
