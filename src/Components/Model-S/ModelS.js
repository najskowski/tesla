import Learnmore from '../Learnmore'
import Model from '../Model'
import React from 'react'

export default function ModelS({ renderButton }) {
  return (
    <Model model={"S"} renderButton={renderButton} data={{
      range: 600,
      speed: 2.1,
      maxspeed: 322,
      power: 1020
    }}/>
  )
}