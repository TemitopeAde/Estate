import {AiFillAlipayCircle} from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsFillBootstrapFill, BsFillCursorFill } from "react-icons/bs";

const Footer = ()=> {
    return (
        <div className="footer-container">
            <div className="footer-wrapper">
                <div className="footer-boxes">
                    <div className="footer-one">
                        <div className="footer-title">
                            <AiFillAlipayCircle />
                            <h5>ESTATE</h5>
                        </div>
                        <div className="footer-dsc">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, exercitationem.</p>
                        </div>
                        <ul>
                            <li>
                                <Link>
                                    <AiFillAlipayCircle />
                                    <span>Brooklyn, New York, United States</span>
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <AiFillAlipayCircle />
                                    <span>07038347584</span>
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <AiFillAlipayCircle />
                                    <span>adesiyantope2014@gmail.com</span>
                                </Link>
                            </li>
                        </ul>

                        <div className="footer-soc">
                            <div className="footer-social-icon">
                                <Link>
                                    <BsFillBootstrapFill />
                                </Link>
                            </div>
                            <div className="footer-social-icon">
                                <Link>
                                    <BsFillBootstrapFill />
                                </Link>
                            </div>
                            <div className="footer-social-icon">
                                <Link>
                                    <BsFillBootstrapFill />
                                </Link>
                            </div>
                        </div>                    
                    </div>

                    <div className="footer-two">
                        <div className="footer-wrap">
                            <div className="footer-box">
                                <div className="footer-title">
                                    <h5>company</h5>
                                </div>

                                <ul>
                                    <li>
                                        <Link>
                                            Promotional Offers
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            Wish List
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            FAQ
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            All Products
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            Terms and condition
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            Privacy and policy
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="footer-three">
                        <div className="footer-wrapper">
                            <div className="footer-box">
                                <div className="footer-title">
                                    <h5>newsletter</h5>
                                </div>

                                <div className="footer-dsc">
                                    <p>Subscribe to our weekly newsletter and receive updates via email</p>

                                    <div className="footer-form">
                                        <form>
                                            <input type="text" placeholder="Email" />

                                            <button type="submit">
                                                <BsFillCursorFill />
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dream-home">
                    <div className="dream-home-container">
                        <div className="dream-content">
                            <h3>Looking for a dream home?</h3>
                            <p>We can help you realize your dream of a new home</p>
                        </div>
                        <div className="dream-button">
                            <Link className="shadow">
                                Explore Properties
                            </Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer