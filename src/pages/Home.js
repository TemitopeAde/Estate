import React from 'react';
import Find from '../components/Find';
import Services from '../components/Services';
import Properties from '../components/Properties';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import Featured from '../components/Featured';
import Testimonials from '../components/Testimonial';
import Fullnav from '../components/Fullnav';
import Hero from '../components/Hero'
import Foooter from '../components/Footer'
import {useGlobalContext} from '../Context'
import properties from "../Data/Properties"

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


const Home = () => {
    const {property,setProperty} = useGlobalContext();

    return (
        <div>

        <Hero />

        <div className="find-wrapper">
            <Find />
        </div>
        
        <div className="our-services">
            <Services />
        </div>

        <div className="properties">
            <Properties property={property} />
        </div>

        <div className="featured-listings">
            <Featured />
        </div>

        <div className="testimonial">
            <Testimonials />
        </div>

        <footer>
            <Foooter />
        </footer>
            

        </div>
    )
}


export default Home