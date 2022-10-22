import React, { useState } from 'react'
import Image from 'next/image'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {GlobeAltIcon,Bars3BottomLeftIcon,UserCircleIcon,UsersIcon,
MagnifyingGlassCircleIcon} from '@heroicons/react/24/solid'
import { DateRangePicker } from 'react-date-range';
import {useRouter} from 'next/dist/client/router'

function Header({placeholder}) {
  const [noOfGuests,setNoOfGuests]=useState(1)
  const [searchInput,setSearchInput]= useState('')
  const [startDate,setStartDate]=useState(new Date())
  const [endDate,setEndDate]=useState(new Date())
  const selectionRange={
    startDate:startDate,
    endDate:endDate,
    key:'selection'
  }
  const handleSelect=(ranges)=>{
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)

  }
  const resetInput=()=>{
    setSearchInput('')
  }
  const router=useRouter()
  const search=()=>{
    router.push({
      pathname:'/search',
      query:{
        location:searchInput,
        endDate:endDate.toISOString(),
        startDate:startDate.toISOString(),
        noOfGuests,
      }
    })
  }

  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 items-center'>
      {/*  LEFT */}
      <div className='relative flex items-center h-10 cursor-pointer my-auto'>
        <Image
          src="https://links.papareact.com/qd3"
          layout='fill'
          objectFit='contain'
          objectPosition='left'
          onClick={()=>router.push('/')}
          />
      </div>
      {/* MIDDLE - Search */}

      <div className='flex  items-center md:border-2 rounded-full justify-around py-2 md:shadow-md'>
        <input placeholder={placeholder || 'Start your Search'} value={searchInput} onChange={e=>setSearchInput(e.target.value)} className='flex-grow text-sm text-gray-500 placeholder-gray-400 outline-none bg-transparent pl-10' type="text"  />
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
      {searchInput&&
        <div className='flex flex-col col-span-3 mx-auto mt-10'>
          
           <DateRangePicker 
           minDate={new Date()}
           ranges={[selectionRange]}
           rangeColors={['#FD5B61']}
           onChange={handleSelect}
           />
           <div className='flex items-center border-b mb-4'>
            <h2 className='text-2xl flex-grow font-semibold'>Number of Guest</h2>
           <UsersIcon className='h-5'/>
           <input
            value={noOfGuests}
            onChange={(e)=>setNoOfGuests(e.target.value)}
            min={1}
            type="number" className='w-12 pl-2 text-lg outline-none text-red-400' />
           </div>
           <div className='flex'>
            <button onClick={resetInput} className='flex-grow text-gray-500'>Cancel</button>
            <button onClick={search} className='flex-grow text-red-400'>Search</button>
            </div>
        </div>
      }
      
      
    </header>
  )
}

export default Header
