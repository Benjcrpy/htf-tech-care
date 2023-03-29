import React from 'react'
import Typed from 'react-typed'

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-yellow-600 font-bold p-2'>LET US SERVICE YOU UGH</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Let us give you a yummy</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Fast, para labasan </p>
                <Typed className='md:text-5xl sm:text-4xl text-xl font-bold pl-2 text-red-600' 
                strings={['SARAP','UGH','DADDY']} typeSpeed={120} backSpeed={120} loop/>
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Quisquam dignissimos praesentium explicabo eaque odio mollitia 
                eveniet exercitationem doloremque, accusantium animi dolores officia 
                ratione harum tempora earum ad iste reiciendis iusto!</p>
            <button className='bg-yellow-200 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Contact Now!</button>
        </div>
    </div>
  )
}

export default Hero