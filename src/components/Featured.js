import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import "swiper/components/lazy/lazy.min.css";
import {Link} from 'react-router-dom';
import featured from '../image/location.jpg';
import { AiOutlineSend,AiOutlineArrowRight,AiFillMail } from "react-icons/ai";
import properties from '../Data/Properties'


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);



const Featured = () => {

    const [listing,setListing] = React.useState(properties);

    const mystyle = {
        marginBottom: "1.5rem",
        backgroundColor: "white",
        padding: "0.6rem 1rem",
        textAlign: "left",
    }

    

    return (
        <div className="featured-listing">
            <div className="featured-listing-wrapper">
                <div className="featured-listings">
                    <div className="featured-subtitle">
                        <h6 className="btn-small location-btn">Properties</h6>
                    </div>
                    <div className="featured-title">
                        <h2>Featured Listings</h2>
                    </div>

                    <div className="location-wrap">
                    <div className="location-wrapper">
                    <Swiper
                        spaceBetween={40}
                        loop={true}
                        slidesPerView={'auto'}
                        navigation
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
                            {listing.map((item,index) => {
                                const {price,description,bed,size,category,title,agent,bathrooms,id} = item;
                                return (
                                    <SwiperSlide key={index}>
                                        <div style={mystyle} className="property shadow listing">

                                                <div className="property-category">
                                                    <p>{category}</p>
                                                </div>
                                                <Link to={`/property/${id}`}>
                                                    <img src={featured} alt={title} />
                                                </Link>
                                                
                                                <h5 id="price">{price} <span id="month">/Month</span></h5>
                                                <Link to={`/property/${id}`} className="title-btn">
                                                    <h3 id="title">{title}</h3>
                                                </Link>
                                                
                                                <p id="description">{description}</p>

                                                <div className="featured-descriptions">
                                                    <div className="descriptions">
                                                        <h5>{bed} <br></br>Bedrooms</h5>
                                                        <h5>{bathrooms} <br></br>Bathrooms</h5>
                                                        <h5>{size} <br></br>square Ft</h5>
                                                    </div>
                                                </div>

                                                <div className="agent-section">
                                                    <div className="agent-">
                                                        <div className="agent-container">
                                                            <div className="agent-details">
                                                                <div className="agent-name" id="agent-id">
                                                                    <h6>{agent}</h6>
                                                                    <p>Estate Agents</p>
                                                                </div>
                                                            </div>
                                                            
                                                            <div className="agent-icons">
                                                                <div className="agent-icon">
                                                                    <Link id="icon-1">
                                                                        <AiFillMail className="wishlist fill" />
                                                                    </Link>
                                                                </div>
                                                                <div className="agent-icon">
                                                                    <Link>
                                                                        <AiFillMail className="wishlist fill" />
                                                                    </Link>
                                                                </div>
                                                                <div className="agent-icon">
                                                                    <Link>
                                                                        <AiFillMail className="wishlist fill" />
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                    
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
        </div>
    )
}

export default Featured