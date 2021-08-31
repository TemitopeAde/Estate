import image from '../image/21.png'
import {Link} from 'react-router-dom'
import { AiOutlineSend,AiOutlineArrowRight } from "react-icons/ai";
import service2 from '../image/22.png';
import services3 from '../image/23.png'

const Services = () => {
    return (
        <div className="services-container">
            <div className="services-wrapper">
                <div className="services-container">
                    <div className="services-subtitle">
                        <h6 className="btn-small services-btn">Our Services</h6>
                    </div>
                    <div className="services-title">
                        <h2>Our Main Focus</h2>
                    </div>
                </div>

                <div className="services-flex">
                    <div className="services shadow">
                        <img src={image} alt="services" />
                        <h2>Buy a home</h2>
                        <p>over 1 million+ homes for sale available on the website, 
                            we can match you with a house you will want to call home.
                        </p>
                        <div className="services-link">
                            <Link>
                                Find A Home
                                <AiOutlineSend className="services-icon" />
                            </Link>
                        </div>
                        
                        <div id="line"></div>
                    </div>
                    <div className="services shadow">
                        <img src={service2} alt="services" />
                        <h2>Rent a home</h2>
                        <p>over 1 million+ homes for sale available on the website, 
                            we can match you with a house you will want to call home.
                        </p>
                        <div className="services-link">
                            <Link>
                                Find A Home
                                <AiOutlineSend className="services-icon" />
                            </Link>
                        </div>
                        <div id="line"></div>
                    </div>
                    <div className="services shadow">
                        <img src={services3} alt="services" />
                        <h2>Sell a home</h2>
                        <p>over 1 million+ homes for sale available on the website, 
                            we can match you with a house you will want to call home.
                        </p>
                        <div className="services-link">
                            <Link>
                                Find A Home
                                <AiOutlineSend className="services-icon" />
                            </Link>
                        </div>
                        <div id="line"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Services