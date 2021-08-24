import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';

const Sidebar = () => {
  const [visible, setvisible] = useState(false)
  return (
    <div className="relative">
      
      {visible === true ? <div>
      <div className="absolute right-0 p-4" onClick={()=>setvisible(!visible)}>
        <GrClose className={"text-black cursor-pointer animate-bounce"}/>
      </div>
        <div className="w-screen h-screen flex flex-col items-center justify-center">
          <h3 className="py-4">This is at center</h3>
          <p className="py-4">This is a paragraph also at center</p>
          <img className="py-4" src="https://www.chipotle.com/content/dam/poc/order/images/logos/cmg-pepper-fill-6.svg" alt="" />
        </div>
      </div> : 
      <div onClick={()=>setvisible(!visible)} className="absolute right-0 p-4">
      <GiHamburgerMenu className={"text-black cursor-pointer"}/>
    </div>}
      
    </div>
  )
}

export default Sidebar
