import {Link} from 'react-router-dom'
import image from '../image/hero.jpg'
import SwiperCore, { EffectFade, Autoplay,Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import {AiFillFastForward} from "react-icons/ai";
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([EffectFade, Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const Hero = () => {
    return (
<section className="hero-section">
            <div className="hero-component section">
            <Swiper
                // autoplay={{ delay: 3800 }}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                loop={true}
                // effect={'fade'}
            >

            <SwiperSlide>
                <div className="hero-wrapper">
                    <div className="hero-container">
                        <div className="hero-subtitle">
                            <AiFillFastForward className="subtitle-icon"/>
                            <h4>Real Estate Agency</h4>
                        </div>
                        <div className="hero-title">
                            <h1>The right place of house finding</h1>
                        </div>
                        <div className="hero-text">
                            <p>Lorem ipsum dolor sit, amet consectetur 
                                adipisicing elit. Architecto repudiandae ullam quia?
                            </p>
                        </div>

                        <div className="hero-buttons">
                            <Link className="btn hero-btn shadow">
                                our services
                            </Link>
                            <Link className="btn-light hero-btn shadow">
                                learn more
                            </Link>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src={image} alt="hero" />
                    </div>
                </div>
            </SwiperSlide>

            
            <SwiperSlide>
                <div className="hero-wrapper">
                    <div className="hero-container">
                        <div className="hero-subtitle">
                            <AiFillFastForward className="subtitle-icon"/>
                            <h4>Real Estate Agency</h4>
                        </div>
                        <div className="hero-title">
                            <h1>Find your dream house by us</h1>
                        </div>
                        <div className="hero-text">
                            <p>Lorem ipsum dolor sit, amet consectetur 
                                adipisicing elit. Architecto repudiandae ullam quia?
                            </p>
                        </div>

                        <div className="hero-buttons">
                            <Link className="btn hero-btn shadow">
                                Make an enquiry
                            </Link>
                            
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src={image} alt="hero" />
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>  
        </div>

        </section>
    )
}

export default Hero