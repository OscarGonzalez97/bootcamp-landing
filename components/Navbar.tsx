"use client"

import React, { useState } from 'react';
import Image from 'next/image';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-secondary-foreground sm:flex sm:justify-between  sm:items-center sm:px-4 sm:py-3">
      <div className="flex  items-center w-full justify-between px-4 py-3 sm:p-0">
        <div className='flex-grow'>
          <Image src='https://www.roshka.com/static/img/all-white-logo.svg'alt='logo' width={100}  height={100} className='w-72'/>
        </div>
        <div className="sm:hidden">
          <button onClick={() => setIsOpen(!isOpen)} type="button" className="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
            <svg className="h-6 w-6 fill-secondary" viewBox="0 0 24 24">
              {isOpen ? (
              <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
        <nav className='hidden sm:flex'>
          <div className='text-2xl hover:text-slate-400 cursor-pointer flex items-center text-white font-[Arial]'>
            Bootcamps Realizados
          </div>
        </nav>
      </div>
      <nav className={isOpen ? 'block' : 'hidden'}>
        <a href="#" className="block px-2 py-1 text-white font-semibold  rounded hover:bg-gray-800">Bootcamps Realizados</a>
      </nav>
    </header>
  )
}
