import ModelS from '../Components/Model-S/ModelS'
import Model3 from '../Components/Model-3/Model3'
import ModelX from '../Components/Model-X/ModelX'
import ModelY from '../Components/Model-Y/ModelY'
import useScrollSnap from 'react-use-scroll-snap'
import React, { useRef } from 'react'

export default function Home() {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 10, delay: 0 });
  return (
    <div ref={scrollRef} className='snap-mandatory snap-x'>
      <ModelS renderButton={true} class='snap-center'/>
      <Model3 renderButton={true} class='snap-center'/>
      <ModelX renderButton={true} class='snap-center'/>
      <ModelY renderButton={true} class='snap-center'/>
    </div>
  )
}
