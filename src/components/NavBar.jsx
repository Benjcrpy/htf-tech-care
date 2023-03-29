import React from 'react'
import { AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
import { useState } from "react"


const NavBar = () => {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='bg-slate-900 w-full flex justify-between items-center max-w-[1240] mx-auto h-24 px-4 text-yellow-600'>
        <h1 className="w-full text-3xp font-bold text-[#] cursor-pointer"> HTF "HERE'S THE FUCKER'S" </h1>
        <ul className="hidden md:flex">
            <li className="p-4 cursor-pointer">Home</li>
            <li className="p-4 cursor-pointer ">Services</li>
            <li className="p-4 cursor-pointer">About</li>
            <li className="p-4 cursor-pointer">Contact</li>
        </ul>

        <div onClick={handleNav} className="cursor-pointer block md:hidden">
            {!nav ? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20}/>}
        </div>
        <div  className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-700' : 'fixed left-[-100%]'}>
            <h1 className='w-full text-3xl font-bold text-rose-500'> HTF </h1>
            <ul className="uppercase p-4">
            <li className="p-4 cursor-pointer border-b border-slate-800">Home</li>
            <li className="p-4 cursor-pointer border-b border-slate-800">Services</li>
            <li className="p-4 cursor-pointer border-b border-slate-800">About</li>
            <li className="p-4 cursor-pointer border-b border-slate-800">Contact</li>
        </ul>
        </div>
    </div>
  )
}

export default NavBar