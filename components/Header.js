import React, { useEffect } from 'react'
import Image from 'next/image'
import {MagnifyingGlassIcon,GlobeAltIcon,UserCircleIcon,UsersIcon,Bars3Icon } from "@heroicons/react/24/solid"
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';

function Header({placeholder}) {
  const [SearchInput , setSearchInput] = useState('');
  const [startDate , setStartDate] = useState(new Date());
  const [endDate , setEndDate] = useState(new Date());
  const [guests , setGuests] = useState(1);

  const router = useRouter();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key:'selection'
  }

  const handleSelect = (ranges) =>
  {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput('');
  }

  const search = () =>
  {
    console.log(router)
    router.push({
      pathname: "/Search",
      query: {
        location: SearchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        guests,  
      },
    });
  };

  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10'>

      <div onClick = {() => router.push('/')} className='relative flex items-center cursor-pointer my-auto objectFit-contain h-10 '>
        <Image
        src='https://links.papareact.com/qd3'
        width={100}
        height={100}
        />
        </div>

      <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
        <input
        value={SearchInput}
        onChange={(e) => setSearchInput(e.target.value)} 
         className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400'
        type='text'
         placeholder={placeholder || 'Start your search'}
        />
        <MagnifyingGlassIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2'/>
      </div>

      <div className='flex items-center space-x-4 justify-end text-gray-500'>

        <p className='hidden md:inline cursor-pointer'> Become a host</p>
        <GlobeAltIcon className='h-6'/>

      <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
      <Bars3Icon className='h-6'/>
      <UserCircleIcon className='h-6'/>  
      </div>

      </div>

      {SearchInput && (
        <div className='flex flex-col col-span-3 mx-auto'>
          <DateRangePicker
          ranges={[selectionRange]}
          minDate={new Date()}
          rangeColors={["#FD5B61 "]}
          onChange={handleSelect}
          />
          
          <div className='flex items-center border-b mb-4'>
            <h2 className='text-2xl flex-grow font-semibold'> Number of Guests </h2>
            <UsersIcon className='h-5'/>
            <input 
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            min={1}
            type='number' 
            className='w-12 pl-2 text-lg outline-none text-red-400'
            />
        </div>

        <div className='flex'>
          <button onClick={resetInput} className='flex-grow text-gray-500'>Cancle</button>
          <button onClick={search} className='flex-grow text-red-400'>Search</button>
        </div>

        </div>
      )}


    </header>
  )
}

export default Header
