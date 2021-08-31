import React from 'react';
import { AiFillCaretRight,AiFillAlipayCircle,AiFillMail } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Advert = () => {
    return (
        <div className="advert">
            <div className="advert-wrapper">
                <div className="advert-detail flex-between">
                    <div className="email">
                        <div className="email-container center">
                            <AiFillMail className="advert-icon" /><a>info@gmail.com</a>
                        </div>
                        
                    </div>
                    <div className="address">
                        <div className="address-container center">
                            <AiFillCaretRight className="advert-icon" /><a>Poly road, ede</a>
                        </div>
                    </div>
                </div>
                <div className="advert-socials">
                    <div className="advert-social-wrapper flex-around">
                        <div className="social-listing">
                            <Link to="/" className="btn-small">
                                Add Listing
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Advert

