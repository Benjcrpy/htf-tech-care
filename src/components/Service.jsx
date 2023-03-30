import React from 'react'
import service from '../img/service.png'
import Card from './Card'

const Service = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <img src={service} alt="" className='w-[500px] mx-auto my-4'/>
          <div className='flex flex-col justify-center'>
            <p className='text-lime-600/75 font-bold text-5xl'>ABOUT US</p>
            <h1 className='text-slate-900 md:text-4xl sm:text-3xl text-2xl font-bold py-2'>3rd Year Cybersecurity Students of Universidad De Manila</h1>
            <p className='text-slate-900'>Techcare composes of the students of Group 1 under the subject of Technopreneurship, 
            which aims to help students get their gadgets and devices upto optimum capacity.</p>
              
          </div>
        </div>
     
      
    </div>
  )
}

export default Service