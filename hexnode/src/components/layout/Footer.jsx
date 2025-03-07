import React from 'react'
import { footerContent } from '../../mock/home-mock'

const Footer = () => {

  return (
    <footer className='bg-footer-white grid place-items-center p-[30px_0] sm:p-[20px_0]'>
      <div className="container grid grid-cols-12">
        <div className='col-span-12 lg:col-span-6'>
          <div className='flex justify-center lg:justify-start gap-1 m-[0_0_20px] lg:m-0'>
          {
            footerContent.map((item, index) => (
              <React.Fragment  key={index}>
              <a href={item.href} role="link" aria-label={item.label} className='text-xs leading-[24px] font-medium text-footer-gray! cursor-pointer'>{item.label}</a>
              { index !== footerContent.length - 1 && <span className='text-xs leading-[24px] font-medium text-footer-gray mx-1'> - </span> }
              </React.Fragment>
            ))
          }
          </div>
        </div>
        <div className='col-span-12 lg:col-span-6 text-center lg:text-end'>
          <p role="contentinfo" aria-label="Copyright information" className='text-xs leading-[24px] font-medium text-footer-gray'>Copyright © 2024 Mitsogo Inc. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer