import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const SliderBanner = ({slider}) => {
    const {thumb_img}=slider
    return (
        <div>
            <Swiper
                spaceBetween={50}
                slidesPerView={4}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                   <img src={thumb_img} alt="" />
                </SwiperSlide>
                

            </Swiper>
        </div>
    );
};

export default SliderBanner;