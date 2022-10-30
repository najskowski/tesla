import Buybutton from './Buybutton'
import Learnmore from './Learnmore'
import Species from './Species'
import React from 'react'
import './Model.css'

export default function Model({ model, renderButton, data}) {
  return (
    <div id={'model-'+model} className='model grid p-48 w-screen h-screen'>
      <div className='ml-auto mr-auto appear text-8xl font-medium text-black'>
        MODEL { model }
      </div>
      <div className='ml-auto mr-auto mt-96'>
        { (renderButton === true) &&
          <div className='flex space-x-5'>
            <Buybutton model={model}/>
            <Learnmore model={model}/>
          </div>
        }
      </div>
      <div className='absolute inset-x-0 bottom-0 text-2xl'>
        {(renderButton === false) &&
          <Species data={data}/>
        }
      </div>
    </div>
  )
}
