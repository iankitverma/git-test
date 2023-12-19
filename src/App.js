/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';

function Navbar() {
    const [visible, setvisible] = useState(false)
    return (
        <div>
        <div className="flex items-center justify-between px-16 py-6 text-blue-800 bg-gradient-to-r from-yellow-500 via-white to-green-500 ">
            <div className="text-2xl">
                Captain TW
            </div>
            <div className="hidden text-xl lg:gap-6 lg:flex">
                <a href="#" className="hover:text-black">Industries</a>
                <a href="#" className="hover:text-black">Services</a>
                <a href="#" className="hover:text-black">Product Platform</a>
                <a href="#" className="hover:text-black">Career</a>
                <a href="#" className="hover:text-black">Insights</a>
            </div>
            <div className="flex">
                <div className="hidden p-2 text-white border-2 border-white rounded-xl lg:block">Countact Us</div>
                <span className="block lg:hidden" onClick={()=>{setvisible(!visible)}}>
                    <GiHamburgerMenu/>
                </span>
            </div>
        </div>
        {visible === true ?  <div className="flex flex-col items-center justify-center gap-6 py-2 text-xl text-blue-800 bg-gray-300 bg-gradient-to-r from-yellow-500 via-white to-green-500 lg:hidden">
                <a href="#" className="py-1">Industries</a>
                <a href="#" className="py-1">Services</a>
                <a href="#" className="py-1">Product Platform</a>
                <a href="#" className="py-1">Career</a>
                <a href="#" className="py-1">Insights</a>
            </div> : ""}
           
        </div>
    )
}

export default Navbar
