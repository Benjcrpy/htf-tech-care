import React from 'react'
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa'
import htf from '../img/htf.png';
import d1 from '../img/d1.png';

export const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
      <img src={d1} alt="" className="w-40 object-cover cursor-pointer"/> 
      <p>Easy, Relax, Calm</p>
      <div className='flex justify-between md:w-[30%] my-6'>
        <FaFacebookSquare/>
        <FaInstagramSquare/>
        <FaTwitterSquare/>
      </div>
      </div>
      <div className='lg:col-span-2 flex justify-between'>
        <div>
            <h6 className='font-medium text-slate-300 uppercase'>About HardWare</h6>
                <ul>
                    <li>Cleaning</li>
                    <li>Repair</li>
                    <li>Built Computer</li>
                </ul>
        </div>
        <div>
            <h6 className='font-medium text-slate-300 uppercase'>About SoftWare</h6>
                <ul>
                    <li>Built Website</li>
                    <li>Commission</li>
                    <li>Formatting</li>
                    <li>Booting</li>
                    <li>Crack App's</li>
                    <li>FAQ's</li>
                </ul>
        </div>
        <div>
            <h6 className='font-medium text-slate-300 uppercase'>Contact Us</h6>
                <ul>
                    <li>htfcare@gmail.com</li>
                    <li>093848234152</li>
                    <li>Facebook: htf-care</li>
                    <li>Instagram: htf-care-tech</li>
                </ul>
        </div>
      </div>
    </div>
  )
}
