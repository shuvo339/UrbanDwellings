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
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const Banner = () => {
    return (
        <div className='my-8'>
        <Swiper navigation={true} pagination={{clickable:true}} modules={[Navigation, Autoplay, Pagination]} loop={true} autoplay={{delay:3000}}>
          <SwiperSlide><div className='relative w-full'>
            <img src={banner1} alt="" />
            <div className='absolute top-[10%] left-0 md:left-[12%] lg:left-[17%] bg-black bg-opacity-30 rounded-lg'>
                <h2 data-aos="fade-down" data-aos-duration="1000" className='text-4xl text-white font-bold px-6 py-3'>Find Your Ideal Residential Haven with Us</h2>
                <p  data-aos="fade-up" data-aos-duration="1000" className='text-white max-w-[500px] mx-auto pb-3 opacity-90'>Embrace the comfort and luxury of home. Explore our range of residential properties tailored to your needs!</p>
            </div>
            </div>
        </SwiperSlide>
          <SwiperSlide><div className='relative w-full'>
            <img src={banner2} alt="" />
            <div className='absolute top-[10%] left-0 md:left-[11%] lg:left-[16%] bg-black bg-opacity-30 rounded-lg'>
                <h2 data-aos="fade-left" data-aos-duration="1000" data-aos-delay="3000" className='text-4xl text-white font-bold px-6 py-3'>Explore Our Collection of Residential Gems!</h2>
                <p  data-aos="fade-right" data-aos-duration="1000" data-aos-delay="3000" className='text-white max-w-[500px] mx-auto pb-3 opacity-90'>Step into the life you haveve always wanted. Find your dream home in our curated selection</p>
            </div>
            </div>
        </SwiperSlide>
          <SwiperSlide><div className='relative w-full'>
            <img src={banner4} alt="" />
            <div className='absolute top-[10%] left-0 md:left-[9%] lg:left-[14%] bg-black bg-opacity-30 rounded-lg'>
                <h2 className='text-4xl text-white font-bold px-6 py-3'>Uncover Exquisite Property for Every Lifestyle!</h2>
                <p className='text-white max-w-[500px] mx-auto pb-3 opacity-90'>Discover comfort and style in our diverse residential offerings. Your dream home is just a click away!</p>
            </div>
            </div>
        </SwiperSlide>
        </Swiper>
      </div>
    );
};

export default Banner;