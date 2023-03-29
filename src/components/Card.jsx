import React from 'react'
import hard1 from '../img/hard1.png';
import soft1 from '../img/soft1.png';


const Card = () => {
  return (
    <div className='w-full py-[10rem] px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 text-white'>
       <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale(105)'>
         <img className='w-20 mx-auto mt-[-3rem]' src={hard1} alt=""/>
         <h2 className='text-2xl font-bold text-center py-8'>HARDWARE CARE</h2>
         <p className='text-center text-4xl font-bold'>1M</p>
         <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>as</p>
            <p className='py-2 border-b mx-8'>as</p>
            <p className='py-2 border-b mx-8'>as</p>
         </div>
         <button>Try Now!</button>
        </div>
      </div>
    </div>
  )
}

export default Card