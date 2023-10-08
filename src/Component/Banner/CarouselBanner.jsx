import { useEffect, useState } from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay, A11y, EffectFade } from 'swiper/modules';
import './carouseBanner.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
// aos animation
import AOS from 'aos';
import 'aos/dist/aos.css';



const CarouselBanner = () => {
    const [sliders, setSliders] = useState([])

    useEffect(() => {
        fetch('/bannerSlider.json')
            .then(res => res.json())
            .then(data => setSliders(data))

            // AOS.init({
            //     duration:500,
            //   });
    }, [])

    // useEffect(()=>{
        

    // },[])


    return (
        <div >
            <Swiper
                modules={[EffectFade, Navigation, Pagination, Autoplay, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                effect={'fade'}
                navigation
                pagination={{ clickable: true }}
                loop={true}
            //   scrollbar={{ draggable: true }}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            >

                {
                    sliders.map(slider => (
                        <SwiperSlide key={slider.id}>
                            <div className="bg-cover bg-no-repeat min-h-[500px]" style={{ backgroundImage: `url(${slider.thumb_img})` }}>
                                <div className='bg-[#242424a1] min-h-[500px] flex flex-col items-center justify-center p-5'>
                                    <div className="max-w-7xl mx-auto" >
                                        <h1 className='text-center text-4xl md:text-6xl font-semibold text-white p-5'>{slider.title}</h1>
                                        <div className="w-full flex justify-center mt-10" >
                                            <input type="text" placeholder="Search Here...." className="p-3 rounded-l-xl w-2/3 md:w-2/4" />
                                            <button className="py-3 px-6 rounded-r-xl bg-[#FF325E] text-white font-bold">Search</button>
                                        </div>
                                    </div>
                                </div >
                            </div>
                            {/* <img src={} alt="" /> */}
                        </SwiperSlide>
                    )
                    )
                }
            </Swiper>
        </div>
    );
};

export default CarouselBanner;