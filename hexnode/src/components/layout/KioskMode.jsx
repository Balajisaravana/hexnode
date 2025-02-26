// import React, {useState} from 'react'
// import { kioskModeData } from '../../mock/home-mock';
// import ButtonLink from '../UI/ButtonLink';


// const KioskMode = () => {
//     const [currentIndex, setCurrentIndex] = useState(1);

//   return (
//     <div className='bg-white grid place-items-center pb-[60px] lg:pb-[120px]' role="region" aria-labelledby="kiosk-possibilities">
//         <div className="container grid place-items-center">
//         <h2 className="antialiased text-[32px] md:text-[40px] leading-[40px] md:leading-[1.3] text-center font-bold text-blue pb-[20px] md:pb-[20px]">
//             What additional possibilities does the <br /> Kiosk mode offer?
//         </h2>
//         <div className='md:mt-[40px] transition-all duration-300 ease-out grid gap-5 grid-cols-12'>
//             <div className="group col-span-12 lg:col-span-5 p-4 relative" role="tabpanel" aria-labelledby={`feature-${kioskModeData[currentIndex - 1]?.id}`}>
//                 {kioskModeData[currentIndex - 1] &&
//                     <div className="rounded-[10px] overflow-hidden transition-all duration-[0.5s] ease-out">
//                         <img loading="lazy" src={kioskModeData[currentIndex - 1].image} alt={kioskModeData[currentIndex - 1].title} />
//                         {kioskModeData[currentIndex - 1].point && 
//                             <span className='absolute right-0 top-[50%] text-start mb-[10px] last:mb-[0px] group-hover:-translate-y-1 border border-solid backdrop-blur-xl bg-white/90 border-footer-white rounded-lg py-[15px] pr-[30px] 
//                                 pl-5 sm:pl-6 transition-all duration-300 ease-out'>
//                                 <div className='mr-2 inline-flex'><svg xmlns="http://www.w3.org/2000/svg" width="14.393" height="10.111"><path fill="none" stroke="#60c458" stroke-width="2" d="M.697 4.107 5.45 8.718l8.247-8" data-name="tick - icon"></path></svg></div>
//                                 {kioskModeData[currentIndex - 1].point}
//                             </span>
//                         }
//                     </div>
//                 }
//             </div>
//             <div className="col-span-12 lg:col-span-7">
//                 {kioskModeData.map((data)=> (
//                     <React.Fragment key={data.id}>
//                     <h3 onClick={()=> setCurrentIndex(data.id)} role="button" 
//                             aria-controls={`feature-${data.id}`} 
//                             aria-expanded={currentIndex === data.id} 
//                             className="text-black cursor-pointer font-bold text-[24px] leading-[36px] lg:text-[26px] lg:leading-[40px] pt-[15px] lg:pt-5 first:pt-0 text-left transition-all duration-300 ease-out">
//                         {data.title}
//                     </h3>
//                     <div className='border-b border-white-tab border-solid last:border-b-0 py-[10px] lg:py-[15px] first:pt-0 last:pb-0'>
//                     { currentIndex === data.id &&
//                                 <>
//                                     <p className="text-text-gray font-normal text-[18px] leading-7 pt-5 pb-[10px]">{data.content}</p>
//                                     <ButtonLink title="TRY FOR FREE" href="https://www.hexnode.com/mobile-device-management/cloud/signup/" />
                                
//                                 </>
//                     }
//                     </div>                
//                     </React.Fragment>
//                 ))}

//             </div>
//         </div>
//         </div>
//     </div>
//   )
// }

// export default KioskMode

import React, { useState } from "react";
import { kioskModeData } from "../../mock/home-mock";
import ButtonLink from "../UI/ButtonLink";

const KioskMode = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  return (
    <div className="bg-white grid place-items-center pb-16 lg:pb-28" role="region" aria-labelledby="kiosk-possibilities">
      <div className="container grid place-items-center">
        <h2 id='kiosk-possibilities' className="antialiased text-[32px] md:text-[40px] leading-[40px] md:leading-[1.3]md:leading-[1.3] text-center font-bold text-blue pb-[20px] md:pb-[20px]">
          What additional possibilities does the <br /> Kiosk mode offer?
        </h2>
        <div className="md:mt-10 grid gap-5 grid-cols-12">

          <div className="group col-span-12 lg:col-span-5 p-4 relative" role="tabpanel" aria-labelledby={`feature-${kioskModeData[currentIndex - 1]?.id}`}>
            {kioskModeData[currentIndex - 1] && (
              <div className="rounded-lg overflow-hidden transition-all duration-500 ease-out transform scale-95 group-hover:scale-100">
                <img loading="lazy" className="w-full h-auto rounded-lg" src={kioskModeData[currentIndex - 1].image} alt={kioskModeData[currentIndex - 1].title} />
                {kioskModeData[currentIndex - 1].point && (
                  <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-start border border-solid backdrop-blur-xl bg-white/90 border-gray-200 rounded-lg py-3 pr-6 pl-4 sm:pl-5 transition-all duration-300 ease-out opacity-0 group-hover:opacity-100 group-hover:translate-y-[-5px]" role="dialog">
                    <span className="mr-2 inline-flex">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14.393" height="10.111">
                        <path fill="none" stroke="#60c458" strokeWidth="2" d="M.697 4.107 5.45 8.718l8.247-8"></path>
                      </svg>
                    </span>
                    {kioskModeData[currentIndex - 1].point}
                  </span>
                )}
              </div>
            )}
          </div>


          <div className="col-span-12 lg:col-span-7">
            {kioskModeData.map((data) => (
              <React.Fragment key={data.id}>
                <h3
                  onClick={() => setCurrentIndex(data.id)}
                  role="button"
                  aria-controls={`feature-${data.id}`}
                  aria-expanded={currentIndex === data.id}

                  className="text-black cursor-pointer font-bold text-[24px] leading-[36px] lg:text-[26px] lg:leading-[40px] pt-[15px] lg:pt-5 first:pt-0 text-left transition-all duration-300 ease-out"
                               
                >
                  {data.title}
                </h3>
                <div className="border-b border-white-tab py-3 last:border-b-0">
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${currentIndex === data.id ? "opacity-100 max-h-[500px]" : "opacity-0 max-h-0"}`}>
                    <p
                     className=" text-[#333333] font-normal text-[18px] leading-7 pt-5 pb-[10px]"
                    
                    >{data.content}</p>
                    <ButtonLink title="TRY FOR FREE" href="https://www.hexnode.com/mobile-device-management/cloud/signup/" />
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KioskMode;


