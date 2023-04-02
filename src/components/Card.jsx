import React from 'react'
import hard1 from '../img/hard1.png';



const Card = () => {
  return (
    <div className='bg-slate-800 w-full py-[10rem] px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 text-white'>
       <div className='w-full bg-slate-900 shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-500'>
         <img className='w-20  mx-auto mt-[-3rem]' src={hard1} alt=""/>
         <h2 className='text-2xl font-bold text-center py-8'>HARDWARE CARE</h2>
         <p className='text-center text-4xl font-bold'></p>
         <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>Cleaning</p>
            <p className='py-2 border-b mx-8'>Repair</p>
            <p className='py-2 border-b mx-8'>Built Computer</p>
         </div>
         <button className='bg-lime-400 hover:bg-lime-700 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:text-slate-300'>Try Now!</button>
        </div>
        <div className='w-full bg-slate-900 shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-500'>
         <img className='w-20  mx-auto mt-[-3rem]' src={hard1} alt=""/>
         <h2 className='text-2xl font-bold text-center py-8'>SOFTWARE CARE</h2>
         <p className='text-center text-4xl font-bold'></p>
         <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>Built Website</p>
            <p className='py-2 border-b mx-8'>Commission</p>
            <p className='py-2 border-b mx-8'>Formatting</p>
            <p className='py-2 border-b mx-8'>Booting</p>
            <p className='py-2 border-b mx-8'>Crack Apps</p>
            <p className='py-2 border-b mx-8'>FAQ’s</p>
         </div>
         <button className='bg-lime-400 hover:bg-lime-700 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:text-slate-300'>Try Now!</button>
        </div>
        <div className='w-full bg-slate-900 shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-500'>
         <img className='w-20  mx-auto mt-[-3rem]' src={hard1} alt=""/>
         <h2 className='text-2xl font-bold text-center py-8'>HardWare Component</h2>
         <p className='text-center text-4xl font-bold'></p>
         <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>GPU </p>
            <p className='py-2 border-b mx-8'>Cpu</p>
            <p className='py-2 border-b mx-8'>RAm</p>
         </div>
         <button className='bg-lime-400 hover:bg-lime-700 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:text-slate-300'>Try Now!</button>
        </div>
      </div>
    </div>
  )
}

export default Card