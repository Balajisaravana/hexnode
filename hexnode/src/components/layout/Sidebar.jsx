import React, { useState } from 'react';

import Button from '../UI/Button';
import { closeLogo } from '../../constant';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full bg-white text-blue text-center pt-16  transition-transform duration-[1s] ease-outout ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } w-full md:w-1/2 lg:hidden`}
    >
        <button onClick={onClose} aria-label='close navigation' className="absolute top-4 right-4 text-blue">
           <img  src={closeLogo} alt=""  role='button'/>
        </button>
      <div className='h-[2px] w-full bg-white-tab mb-5 rounded-[5px] ' ></div>
        <Button>
        <a role="link" aria-label="Start a 14-day free trial" href="https://www.hexnode.com/mobile-device-management/cloud/signup/" className={`action-btn font-medium text-white! text-[15px] leading-[24px]  `}>
        14 day free trial
    </a>
        </Button>

        <div className="flex justify-center items-center mt-5 mb-3">
            <a target="_self" rel="nofollow" role="link" aria-label="Login" className="inline-block text-black!" href="https://www.hexnode.com/mobile-device-management/sign-in/">Login</a>
        </div>
    </div>
  );
};

export default Sidebar;