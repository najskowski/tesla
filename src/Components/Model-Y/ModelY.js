import React from 'react'
import Model from '../Model'

export default function ModelY({ renderButton }) {
  return (
    <Model model={"Y"} renderButton={renderButton} data={{
      range: 600,
      speed: 2.1,
      maxspeed: 322,
      power: 1020
    }}/>
  )
}
