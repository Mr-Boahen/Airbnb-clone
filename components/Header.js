import React from 'react'
import Image from 'next/image'
import {GlobeAltIcon,Bars3BottomLeftIcon,UserCircleIcon,UsersIcon,
  MagnifyingGlassCircleIcon} from '@heroicons/react/24/solid'

function Header() {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 items-center'>
      {/*  LEFT */}
      <div className='relative flex items-center h-10 cursor-pointer my-auto'>
        <Image
          src="https://links.papareact.com/qd3"
          layout='fill'
          objectFit='contain'
          objectPosition='left'
          />
      </div>
      {/* MIDDLE - Search */}

      <div className='flex  items-center md:border-2 rounded-full justify-around py-2 md:shadow-md'>
        <input className='flex-grow text-sm text-gray-500 placeholder-gray-400 outline-none bg-transparent pl-10' type="text" placeholder='Start your search' />
        <MagnifyingGlassCircleIcon className='h-8 text-red-400  cursor-pointer  md:mx-2'/>
        
      </div>
      {/* RIGHT */}
     
      <div className='flex space-x-4 items-center justify-end text-gray-500'>
      <p className='cursor-pointer hidden md:inline'>Become a host</p>
      <GlobeAltIcon className='h-6  cursor-pointer' />
      <div className='flex items-center space-x-2 border-2 rounded-full p-2'>
       <Bars3BottomLeftIcon className='h-6 cursor-pointer'/>
       <UserCircleIcon className='h-6 cursor-pointer'/>
      </div>
      </div>
      
    </header>
  )
}

export default Header
