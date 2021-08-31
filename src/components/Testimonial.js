import React from 'react';
import testimonial from '../Data/Testimonial';
import testimony from '../image/location.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade, Autoplay,Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import "swiper/components/lazy/lazy.min.css"


SwiperCore.use([EffectFade, Navigation, Pagination, Scrollbar, A11y, Autoplay]);



const Testimonials = () => {
    return (
        <div className="testimonial-container">
            <div className="testimonial-wrapper">
                <div className="testimonial-container">
                    <div className="testimonial-subtitle">
                        <h6 className="btn-small location-btn">our testimonial</h6>
                    </div>

                    <div className="location-title">
                        <h2>clients feedback</h2>
                    </div>

                    <div className="testimonial-item">
                        <Swiper
                            // effect={'fade'}
                            spaceBetween={50}
                            loop={true}
                            slidesPerView={1}
                            autoplay={{ delay: 4000 }}
                            pagination={{ clickable: true }}
                        >
                        <div className="testimonial-item-container">
                            {testimonial.map((item,index) => {
                                const {id,post,text,name} = item
                                return (
                                    <SwiperSlide key={index}>
                                        <div className="testimonial-items">
                                            <img src={testimony} alt="test" />
                                            <p className="text">{text}</p>
                                            <h2>{name}</h2>
                                            <p className="post">{post}</p>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </div>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials