import React from 'react'
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa'
import htf from '../img/htf.png';
import d1 from '../img/d1.png';

export const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
      <img src={d1} alt="" className="w-40 object-cover cursor-pointer"/> 
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab est assumenda.</p>
      <div className='flex justify-between md:w-[30%] my-6'>
        <FaFacebookSquare/>
        <FaInstagramSquare/>
        <FaTwitterSquare/>
      </div>
      </div>
      <div className='lg:col-span-2 flex justify-between'>
        <div>
            <h6 className='font-medium text-gray-400'>Service</h6>
                <ul>
                    <li>Lorem ipsum dolor sir amet</li>
                    <li>Lorem ipsum dolor sir amet</li>
                    <li>Lorem ipsum dolor sir amet</li>
                    <li>Lorem ipsum dolor sir amet</li>
                    <li>Lorem ipsum dolor sir amet</li>
                </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>Service</h6>
                <ul>
                    <li>Lorem ipsum dolor sir amet</li>
                    <li>Lorem ipsum dolor sir amet</li>
                    <li>Lorem ipsum dolor sir amet</li>
                    <li>Lorem ipsum dolor sir amet</li>
                    <li>Lorem ipsum dolor sir amet</li>
                </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>Service</h6>
                <ul>
                    <li>Lorem ipsum dolor sir amet</li>
                    <li>Lorem ipsum dolor sir amet</li>
                    <li>Lorem ipsum dolor sir amet</li>
                    <li>Lorem ipsum dolor sir amet</li>
                    <li>Lorem ipsum dolor sir amet</li>
                </ul>
        </div>
      </div>
    </div>
  )
}
