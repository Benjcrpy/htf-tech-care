import React from 'react'
import { AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
import { useState } from "react"
import htf from '../img/htf.png';



const NavBar = () => {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className=' w-full flex justify-between items-center max-w-[1240] mx-auto h-24 px-4'>
  
        <img src={htf} alt="" className="w-40 object-cover cursor-pointer"/> 
        <ul className="hidden md:flex">
            <li to={"/"} className="p-4 cursor-pointer text-slate-300 hover:text-lime-700">Home</li>
            <li className="p-4 cursor-pointer text-slate-300 hover:text-lime-700">Services</li>
            <li className="p-4 cursor-pointer text-slate-300 hover:text-lime-700">About</li>
            <li className="p-4 cursor-pointer text-slate-300 hover:text-lime-700">Contact</li>
        </ul>

        <div onClick={handleNav} className="cursor-pointer block md:hidden text-slate-300">
            {!nav ? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20}/>}
        </div>
        <div  className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-700' : 'fixed left-[-100%]'}>
            <img src={htf} alt=""/> 
            <ul className="uppercase p-4 text-white">
            <li className="p-4 cursor-pointer">Home</li>
            <li className="p-4 cursor-pointer">Services</li>
            <li className="p-4 cursor-pointer">About</li>
            <li className="p-4 cursor-pointer">Contact</li>
        </ul>
        </div>
    </div>
  )
}

export default NavBar