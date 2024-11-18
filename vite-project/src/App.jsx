import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './header'
import {Test} from './test'

import './App.css'
import { ToggleSwitch } from './toggle'
import { SearchBAR} from './test1'
 
function Hero(){
  return(
    <>
    <div div className='w-full  bg-yellow-100'>
  <div className='w-full  bg-yellow-100 flex justify-center items-center'>
    <img src="./hero-image.jpeg" alt="artboard"  className='hero-image w-[500px]'/>  
  </div>

  <div className="w-[600px]  flex justify-around m-auto p-10">
    <button type="button" className="adopt-button bg-yellow-500 flex justify-center items-center px-5 rounded-xl">
        Adopt Me
        <img src="dog-3343_256.gif" alt="Dog GIF" className="gif-icon w-[50px]"/>
      </button>
      
      <button type="button" className="adopt-button bg-yellow-500 flex justify-center items-center px-5 rounded-xl">
        Foster Me
        <img src="cat-133_256.gif" alt="cat" className="gif-icon2 w-[50px]"/>
      </button>
      
    </div>
    </div>
  </>
  )
}
const location =(
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.2038106045734!2d77.27765297534789!3d30.116980974887184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ef98c708c9bdf%3A0x1dd67177e62b8df5!2sSri%20Rama%20Krishna%20Senior%20Secondary%20School!5e0!3m2!1sen!2sin!4v1731229542035!5m2!1sen!2sin" width="50" height=""  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>)
const Stray =(props)=>{
  return(
    <>
    <div className=' inline-flex'>
    <div className='w-[250px] h-auto bg-slate-500 m-10 p-10  '>
    <img src={props.img} alt="molu" className='card1 w-48' />
    <h2>Name:{props.name}</h2>
    <h3>Age:{props.age}</h3>
    <h3>{location}</h3>
    </div>
    </div>
    </>
  )
}

function App() {
  
  return (
   
    <>
   {/* <div className='flex justify-between  '>
        <div>
        <img src="./logo.png" alt="logo" className='w-[150px] m-5'  />
        </div>

        <div>
            <ul className='flex mt-20 gap-10 m-10 bg-blue-500  justify-center items-center'>
                <li className=' text-2xl font-semibold'>Home</li>
                <li className=' text-2xl font-semibold'>Adopt</li>
                <li className='text-2xl font-semibold'>Foster</li>
                <li className=' text-2xl font-semibold'>Donate</li>
            </ul>
        </div>
    </div>
    
    <Hero/>
    <Stray name="molu" age="7 months" img="molu.jpg" />
    <Stray name="golu" age="8 months" img="group-1.jpeg" />
    <Stray name="kolu" age="9 months" img="group-2.jpeg" />
    <Stray name="bolu" age="10 months" img="logo.png" />
    <Stray name="dolu" age="11 months" img="hero-image.jpeg" />

    <Header/> */}
    {/* <ToggleSwitch/> */}
     {/* <ReactUseEffect/> */}
     <SearchBAR/>
  
   </>
  )
}

export default App
