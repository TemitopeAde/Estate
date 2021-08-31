import SwiperCore, { EffectFade, Autoplay,Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import "swiper/components/lazy/lazy.min.css"
import ProductSliderData from '../Data/ProductSlider'
import {useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([EffectFade, Navigation, Pagination, Scrollbar, A11y, Autoplay]);



const ProductSlider = () => {

    const [slider] = useState(ProductSliderData)

    return (
        <Swiper
            spaceBetween={50}
            loop={true}
            slidesPerView={1}
            // autoplay={{ delay: 4000 }}
            pagination={{ clickable: true }}
            breakpoints={{
                "@0.00": {
                    "slidesPerView": 1,
                    "spaceBetween": 10
                },

                "768": {
                    "slidesPerView": 2,
                    "spaceBetween": 20
                },
                "992": {
                    "slidesPerView": 3,
                    "spaceBetween": 20
                },
                "1200": {
                    "slidesPerView": 3,
                    "spaceBetween": 20
                }
            }}
        
            >
            <div className="product-sliders padding-small">
                <div className="product-slider shadow">
                    {slider.map((item,index) => {
                        const {image} = item
                        return (
                            <SwiperSlide key={index} >
                                <div className="sliders">
                                    <img src={image} alt="img" />
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </div>
            </div>
        </Swiper>
    )
}


export default ProductSlider