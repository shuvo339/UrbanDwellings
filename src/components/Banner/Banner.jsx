import banner1 from '../../assets/banner-1.jpg'
import banner2 from '../../assets/banner-2.jpg'
import banner4 from '../../assets/banner-4.jpg'
import banner5 from '../../assets/banner-5.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './Banner.css';

// import required modules
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

const Banner = () => {
    return (
        <div className='my-8'>
        <Swiper navigation={true} pagination={{clickable:true}} modules={[Navigation, Autoplay, Pagination]} loop={true} autoplay={{delay:3000}}>
          <SwiperSlide><div className='relative w-full'>
            <img src={banner1} alt="" />
            <div className='absolute top-[8%] left-0 md:left-[15%] lg:left-[25%]'>
                <h2 className='text-4xl text-white font-bold px-6'>Welcome to Your Dream Home!</h2>
            </div>
            </div>
        </SwiperSlide>
          <SwiperSlide><div className='relative w-full'>
            <img src={banner2} alt="" />
            <div className='absolute top-[8%] left-0 md:left-[20%] lg:left-[30%]'>
                <h2 className='text-4xl text-white font-bold px-6'>Discover Your Next Heaven!</h2>
            </div>
            </div>
        </SwiperSlide>
          <SwiperSlide><div className='relative w-full'>
            <img src={banner4} alt="" />
            <div className='absolute top-[8%] left-0 md:left-[12%] lg:left-[20%]'>
                <h2 className='text-4xl text-white font-bold px-6'>Unlock the Door to Your Future Home!</h2>
            </div>
            </div>
        </SwiperSlide>
          <SwiperSlide><div className='relative w-full'>
            <img src={banner5} alt="" />
            </div>
        </SwiperSlide>
        </Swiper>
      </div>
    );
};

export default Banner;