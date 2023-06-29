import React, { useState } from 'react';

export default function Nav (){
  const [showMobileOptions, setShowMobileOptions] = useState(false);

  const handleToggleMobileOptions = () => {
    setShowMobileOptions(!showMobileOptions);
  };

  return (
    <div className='w-full fixed top-0 left-0'>
      <div className='md:flex h-32 justify-between bg-secondary-foreground py-7 md:px-10 px-7'>
        <div className='text-2xl cursor-pointer lg:flex items-center text-white font-[Arial]'>
          <img src='https://www.roshka.com/static/img/all-white-logo.svg' className='w-72' onClick={handleToggleMobileOptions}/>
        </div>
        <div className={`hidden md:contents ${showMobileOptions ? '' : 'hidden-mobile'}`}>
          <div className='text-2xl hover:text-slate-400 cursor-pointer flex items-center text-white font-[Arial]'>
            Bootcamps Realizados
          </div>
        </div>
        {showMobileOptions && (
          <div className='md:hidden'>
            <div className='mt-14 text-2xl hover:text-slate-400 cursor-pointer flex items-center text-white font-[Arial]'>
              Bootcamps Realizados
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
