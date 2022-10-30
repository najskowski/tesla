import React from 'react'
import './Species.css'

export default function Species({ data }) {
  return (
    <div className='spec flex tracking-widest text-white pt-16 justify-evenly from-black via-black/75 bg-gradient-to-t h-48'>
      <div id="range">
        <div className='font-medium text-center'>
          {data.range}km
          <div className='font-light text-base p-3'>
            Zasięg (szac. WLTP)
          </div>
        </div>
      </div>
      <div id="speed">
        <div className='font-medium text-center'>
          {data.speed}s
          <div className='font-light text-base p-3'>
            0-100 km/h*
          </div>
        </div>
      </div>
      <div id="maxspeed">
        <div className='font-medium text-center'>
          {data.maxspeed}km/h
          <div className='font-light text-base p-3'>
            Maksymalna prędkość
          </div>
        </div>
      </div>
      <div id="power">
        <div className='font-medium text-center'>
          {data.power}hp
          <div className='font-light text-base p-3'>
            Moc szczytowa
          </div>
        </div>
      </div>
    </div>
  )
}
