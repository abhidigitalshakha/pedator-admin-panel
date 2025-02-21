import React from 'react'
import { menuItems } from '../constants/global.constant'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
      {
        menuItems?.map((item,index)=>(
            <div className='flex flex-col' key={index}>
                <span className='hidden lg:block text-gray-500 font-medium my-4'>{item.title}</span>
                {
                    item.items?.map((subItem,index)=>(
                        <Link to={subItem.href} className=' flex items-center justify-center gap-3 md:justify-start text-gray-400 py-2 md:px-4' key={index}>
                            <img src={subItem.icon} alt="icon-Image" className='w-[20px]' />
                            <span className='hidden lg:block'>{subItem.label}</span>
                        </Link>
                    ))
                }
            </div>
        ))
      }
    </div>
  )
}

export default Menu
