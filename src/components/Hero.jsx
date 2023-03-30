import React from 'react'
import Typed from 'react-typed'

const Hero = () => {
  return (
    <div className='bg-slate-800 text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-lime-400/75 text-6xl font-bold p-2 uppercase'>Welcome To TechCare</p>
            <h1 className='md:text-5xl sm:text-4  xl text-4xl font-bold md:py-6'>The Brought to you by CYB-32 </h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-4xl sm:text-4xl text-xl font-bold'>The Techcare will always</p>
                <Typed className='md:text-5xl sm:text-4xl text-xl font-bold pl-2 text-lime-600 uppercase' 
                strings={['Repairs.','Reformat.','Rebuys.']} typeSpeed={120} backSpeed={120} loop/>
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-400 p-7'>This website is your key to get your electronics get fixed , 
            To avail our services kindly contact us using the button below! Always remember We at TechCare we Care.</p>

            <button className='bg-lime-400 hover:bg-lime-700 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:text-slate-300'>Contact Now!</button>
        </div>
        
    </div>
    
  )
}

export default Hero