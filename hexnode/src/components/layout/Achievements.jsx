import { AchievementsData } from "../../mock/home-mock"



const Achievements = () => {

  return (
    <div className='bg-black-400 grid place-items-center md:py-[30px]' role="complementary" aria-labelledby="achievements-title">
      <h2 id="achievements-title" className="sr-only">Our Achievements</h2>
        <div className='container'>
        <div className='grid grid-cols-12 divide-y-1 lg:divide-y-0 lg:divide-x-1 divide-white/20'>
        {
            AchievementsData.map((data, index) => (
                <a key={index} href={data?.href} role="link" aria-label={data?.content} className="lg:col-span-4 col-span-12
                    px-[0px] py-[40px] md:py-[20px] md:px-[10px] lg:px-[25px] xl:px-[45px]" >
                    <div className='transition-transform duration-300 hover:-translate-y-1'>
                    <div className='flex items-center min-w-[82px] max-w-[156px] max-h-[25px] mb-[15px]'>
                        <img loading="lazy"  src={data?.src} alt={data?.alt} className='object-fit' />
                    </div>
                    <p className='font-normal text-white/60 text-sm'>{data?.content}</p>
                    </div>
                </a>
            ))
 
        }
        </div>
        </div>
    </div>
  )
}

export default Achievements