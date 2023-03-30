import React from 'react'
import service from '../img/service.png'
import Card from './Card'

const Service = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <img src={service} alt="" className='w-[500px] mx-auto my-4'/>
          <div className='flex flex-col justify-center'>
            <p className='text-lime-600/75 font-bold'>Lorem ipsum dolor sit amet consectetur</p>
            <h1 className='text-slate-900 md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Lorem ipsum dolor sit amet consectetur</h1>
            <p className='text-slate-900'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Quia tempore at, incidunt fugiat deleniti hic molestiae natus. 
              Nesciunt adipisci fuga enim debitis aliquam aperiam, 
              praesentium a maiores laboriosam voluptate quaerat?</p>
              <button className='bg-black hover:bg-lime-700 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white
               hover:text-slate-900'>Contact Now!</button>
          </div>
        </div>
     
      
    </div>
  )
}

export default Service