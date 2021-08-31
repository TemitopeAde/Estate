
import React from "react";
import location from '../image/location.jpg'
import {Link} from 'react-router-dom';
import { AiOutlineSend } from "react-icons/ai";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import "swiper/components/lazy/lazy.min.css"


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


const Properties = ({property}) => {
    
    const mystyle = {
        marginBottom: "1.5rem",
        backgroundColor: "white",
        padding: "0.6rem 1rem",
        textAlign: "left",
    }

    const btnStyle = {
        color: 'var(--p-bg)'
    }

    return (
        <div className="properties-location">
            <div className="location-wrapper">
                <div className="location-container">
                    <h6 className="btn-small location-btn">Area Properties</h6>
                </div>

                <div className="location-title">
                    <h2>Properties By Location</h2>
                </div>

                <div className="location-wrap">
                    <div className="location-wrapper">
                    <Swiper
                        spaceBetween={50}
                        loop={true}
                        slidesPerView={'auto'}
                        navigation
                        autoplay={3990}
                        lazy={true}
                        pagination={{ clickable: true }}
                        
                        breakpoints={{
                            "@0.00": {
                                "slidesPerView": 1,
                                "spaceBetween": 20
                            },

                            "768": {
                                "slidesPerView": 2,
                                "spaceBetween": 20
                            },
                            "992": {
                                "slidesPerView": 3,
                                "spaceBetween": 40
                            },
                            "1200": {
                                "slidesPerView": 3,
                                "spaceBetween": 50
                            }
                        }}
                    >
                        <div className="locations-container">
                            {property.map((item,index) => {
                                const {id,state,area} = item;
                                return (
                                    <SwiperSlide key={index}>
                                        <div style={mystyle} className="property shadow">
                                            <img src={location} alt={state} />
                                            <h5>{state}</h5>
                                            <h4>{area}</h4>
                                            <Link style={btnStyle}  className="view" to={`/property/${id}`}>
                                                View Propery
                                                <AiOutlineSend />
                                            </Link>
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

export default Properties