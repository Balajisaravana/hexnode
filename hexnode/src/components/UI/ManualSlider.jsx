import {useState, useEffect} from 'react'
import { arrows } from '../../constant'

export default function ManualSlider({testimonialsData}) {
    const [currentIndex, setCurrentIndex] = useState(0)
    
        useEffect(() => {
            const interval = setInterval(()=>{
                goToNext()
            }, 10000)
    
            return () => clearInterval(interval)
            
        }, [])
    
        const goToNext = () => {
            setCurrentIndex((prev) => prev < testimonialsData.length - 1 ? prev + 1 : 0) 
        }
    
        const goToPrev = () => {
            setCurrentIndex((prev) => prev > 0 ? prev - 1 : testimonialsData.length - 1)
        }
    
        if (testimonialsData.length === 0) return null;
  return (

        <div className="pt-[40px] pb-[80px] grid grid-cols-12 place-items-center md:pb-0">
            <div className=' col-span-6 md:col-span-1 order-5 md:order-1 pt-5 md:pt-0 flex justify-end md:block'>
                <button onClick={goToPrev} aria-controls="testimonial-content"  aria-label="Previous Testimonial" role="button" tabIndex="0" 
                 className='bg-white w-14 h-14 rounded-xl grid place-items-center cursor-pointer shadow-md hover:scale-105 transition-transform'>
                    <img loading="lazy" src={arrows.prevArrow} alt="" aria-hidden="true" />
                </button>      
            </div>
                <div className='col-span-12 md:col-span-10 order-4 md:order-2 bg-white grid grid-cols-12 gap-1 md:gap-5 rounded-[18px]'>
                    <div className='col-span-12 md:col-span-4'>
                    <div className='w-full max-w-[400px]  max-md:max-w-full md:max-w-[320px] h-full leading-[0px] overflow-hidden rounded-t-[18px] md:rounded-tr-none md:rounded-tl-[18px] md:rounded-bl-[18px]'>                   
                            <img loading="lazy" className='align-middle object-cover w-full h-full' src={testimonialsData[currentIndex]?.image} alt={`Testimonial from ${testimonialsData[currentIndex]?.name}, ${testimonialsData[currentIndex]?.designation} at ${testimonialsData[currentIndex]?.company}`} />
                        </div> 
                    </div>
                    <div   id="testimonial-content"  role="region" aria-labelledby="testimonial-author"  className='col-span-12 md:col-span-8'>
                        <blockquote className="pt-5 sm:pt-10 pb-8 sm:pb-12 max-w-full md:max-w-lg lg:max-w-xl" aria-labelledby="testimonial-author">
                            "{testimonialsData[currentIndex].quote}"
                        </blockquote>
                       <div className='h-[2px] w-full bg-white-tab mt-[-20px] rounded-[5px]' ></div>
                        <h6 className='pb-[5px] sm:pb-0 text-blue font-bold ' id="testimonial-author" >{testimonialsData[currentIndex]?.name}</h6>
                        <p className='testimonial-para'>{testimonialsData[currentIndex]?.designation}</p>
                        <p className='pb-5 testimonial-para'>{testimonialsData[currentIndex]?.company}</p>
                    </div>
                </div>
            <div className="col-span-6 md:col-span-1 order-6 md:order-3 pt-5 md:pt-0 flex justify-start md:block">
                <button onClick={goToNext} aria-controls="testimonial-content"  aria-label="Next Testimonial" role="button" tabIndex="0" className='bg-white w-14 h-14 rounded-xl grid place-items-center cursor-pointer shadow-md  hover:scale-105 transition-transform'>
                    <img loading="lazy" src={arrows.nextArrow} alt="" aria-hidden="true" />
                </button>   
            </div>
        </div>
    
  )
}





