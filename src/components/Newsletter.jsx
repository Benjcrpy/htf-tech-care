import React from 'react'

const Newsletter = () => {
  return (
    <div className='bg-white w-full py-16 text-white'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-slate-500'>Let's Talk About</h1>
                <p className='text-slate-500'>We will care about your system</p>
            </div>
            <div className='my-4 gap-2'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='py-3 my-4 flex w-full bg-black border-2 border-slate-500 rounded-md text-white' 
                    type="email" 
                    placeholder="Enter your email"/>
                    <button className='bg-lime-400 hover:bg-lime-700 w-[200px] border-2 border-slate-700 rounded-md font-medium ml-4 my-6 px-6 py-3 text-black hover:text-slate-300'>Notify us!</button>
                </div>
                <p className='text-slate-500'>Let's communicate</p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter