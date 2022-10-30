import { Link } from "react-router-dom";
import React from 'react'
import './Learnmore.css'

export default function Learnmore({ model }) {
  return (
    <>
      <Link to={"/"+model}>
        <button className='bg-gray-300/75 w-64 h-12 rounded-lg text-lg font-semibold'>
          Dowiedz się więcej
        </button>
      </Link>
    </>
  )
}
