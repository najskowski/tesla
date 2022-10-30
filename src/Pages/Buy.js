import { Link, Navigate  } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import bg from './buy-page-background.png'
import svg from './tesla-logo.svg'
import Summary from './Summary'
import './Buy.css'

export default function Buy() {
  const [results, setResults] = useState({
    model: 'undefined',
    name: 'undefined',
    surname: 'undefined',
    emailname: 'undefined',
    emailhost: 'undefined'
  })
  const [render, setRender] = useState(true);
  const handleChange = (e) => {
    const value = e.target.value;
    setResults({
      ...results,
      [e.target.id]: value
    })
  }
  const isUndefined = () => {
    for(const value of Object.values(results)) {
      if(value === 'undefined') {
        return true;
      }
    }
    return false;
  }
  const handleSubmit = () => {
    console.log(render);
    setRender(false);
  }

  return (
    <>
      <div id='buy-page' style={{ backgroundImage: `url(${bg})` }} className='w-screen h-screen grid content-center items-center'>
        { (render) &&
          <div className='parent ml-auto mr-auto bg-white p-8 w-1/3 grid content-center justify-center'>
            <img 
              src={svg}
              width="200px"
              alt="logo"
              className='mb-10'
            />
            <form className='space-y-2 space-x-2' autoComplete="off" >
              <div>
                <label htmlFor='model' className='block'>Model</label>
                <select onChange={handleChange} id="model" required>
                  <option value=''>wybierz model</option>
                  <option value='S-model'>Model S</option>
                  <option value='3-model'>Model 3</option>
                  <option value='X-model'>Model X</option>
                  <option value='Y-model'>Model Y</option>
                </select>
              </div>
              <div>
                <label htmlFor='name' className='block'>Imię</label>
                <input id='name' type='text' className='block ' onChange={handleChange} required></input>
              </div>
              <div>
                <label htmlFor='surname' className='block'>Nazwisko</label>
                <input id='surname' type='text' className='block ' onChange={handleChange} required></input>
              </div>
              <div className='block'>
                <label htmlFor='emailname' className='block'>Adres e-mail</label>
                <div className='flex'>
                  <input id='emailname' type='text' className='flex' onChange={handleChange} required></input>
                  <span className='font-bold text-lg text-gray'>
                    &nbsp;@&nbsp;
                  </span>
                  <input id='emailhost' type='text' className='flex' onChange={handleChange} required></input>
                </div>
              </div>
            </form>
            <div className='block'>
              <input onClick={handleSubmit} type='submit'/>
            </div>
          </div>
        }
        { (!render) &&
          <div className='parent ml-auto mr-auto bg-white p-8 w-1/3'>
            <img 
              src={svg}
              width="200px"
              alt="logo"
              className='ml-auto mr-auto mt-12 mb-10'
            />
            <div className='p-3' autoComplete="off" >
              <h2 className='text-2xl text-[#121212]'>PODSUMOWANIE</h2>
              <div className='py-5'>
                <table className='text-left'>
                  <tbody>
                    <tr className='w-[100%]'>
                      <th className='p-1 w-24'>Model:</th><td>{results.model[0] ?? null}</td>
                    </tr>
                    <tr className='w-[100%]'>
                      <th className='p-1 w-24'>Imię:</th><td>{results.name ?? null}</td>
                    </tr>
                    <tr className='w-[100%]'>
                      <th className='p-1 w-24'>Nazwisko:</th><td>{results.surname ?? null}</td>
                    </tr>
                    <tr className='w-[100%] p-1'>
                      <th className='p-1 w-24'>Email:</th><td>{results.emailname ?? null}@{results.emailhost ?? null}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='grid justify-center align-middle py-14'>
                <Link to='/'>
                  <button className='bg-[#cc0000bf] text-white w-40 h-10 font-bold'>
                    POWRÓT
                  </button>
                </Link>
              </div>
            </div>
          </div>
        }
      </div>
    </>
  )
}
