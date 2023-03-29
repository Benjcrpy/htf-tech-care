import React from 'react'
import Typed from 'react-typed'

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-lime-400/75 text-6xl font-bold p-2 uppercase'>Lorem ipsum dolor sit</p>
            <h1 className='md:text-5xl sm:text-4  xl text-4xl font-bold md:py-6'>Lorem ipsum dolor sit amet, consectetur</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Fast, para labasan </p>
                <Typed className='md:text-5xl sm:text-4xl text-xl font-bold pl-2 text-lime-600' 
                strings={['SARAP.','UGH.','DADDY.']} typeSpeed={120} backSpeed={120} loop/>
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-400 p-7'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Quisquam dignissimos praesentium explicabo eaque odio mollitia 
                eveniet exercitationem doloremque, </p>

            <button className='bg-lime-400 hover:bg-lime-700 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:text-slate-300'>Contact Now!</button>
        </div>
    </div>
  )
}

export default Hero