import Learnmore from '../Learnmore'
import Model from '../Model'
import React from 'react'

export default function Model3({ renderButton }) {
  return (
    <Model model={"3"} renderButton={renderButton} data={{
      range: 491,
      speed: 6.1,
      maxspeed: 225,
      power: 1020
    }}/>
  )
}
