import ManualSlider from '../UI/ManualSlider'
import { sliderData, testimonialsData } from '../../mock/home-mock'
import AutoSlider from '../UI/AutoSlider'


const FeedBack = () => {




  return (
    <div className='bg-white-tab z-5 pb-[30px] pt-[60px] md:pt-[120px] md:pb-[60px]'>
        <div className="container flex flex-col items-center mx-auto">
        <h2 className="pb-0 md:pb-[20px] whitespace-normal text-base">Why should you choose Hexnode?</h2>
        <ManualSlider testimonialsData={testimonialsData}/>
        <div className='relative flex justify-center items-center overflow-hidden'>
            <div className="gradient-div absolute left-0 bg-gradient-to-r"></div>
            <AutoSlider sliderData={sliderData} />
            <div className="gradient-div absolute right-0 bg-gradient-to-l"></div>
        </div>
        
        </div>
    </div>
  )
}

export default FeedBack