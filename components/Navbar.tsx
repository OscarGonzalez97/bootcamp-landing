import React, { useState } from 'react';

export default function Nav (){
  const [showOptions, setShowOptions] = useState(false);

  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex h-32 justify-between bg-secondary-foreground py-4 md:px-10 px-7'>
        <div className='text-2xl cursor-pointer lg:flex items-center text-white font-[Arial] text-gray-800'>
          <img src='https://www.roshka.com/static/img/all-white-logo.svg' alt='' onClick={handleToggleOptions}/>
        </div>
        {showOptions && (
          <React.Fragment>
            <div className='text-2xl hover:text-slate-400 cursor-pointer flex items-center text-white font-[Arial] text-gray-800'>
              Bootcamps
            </div>
            <div className='text-2xl hover:text-slate-400 cursor-pointer flex items-center text-white font-[Arial] text-gray-800'>
              Bootcamps Realizados
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};
