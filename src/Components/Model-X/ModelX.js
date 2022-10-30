import React from 'react'
import Model from '../Model'

export default function ModelX({ renderButton }) {
  return (
    <Model model={"X"} renderButton={renderButton} data={{
      range: 528,
      speed: 2.6,
      maxspeed: 284,
      power: 1020
    }}/>
  )
}
