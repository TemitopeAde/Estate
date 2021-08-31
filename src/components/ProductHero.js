import {Link} from 'react-router-dom'
import { AiOutlineArrowRight } from "react-icons/ai";



const ProductHero = () => {
    return (
        <div className="product-hero-container center">
            <div className="product-hero-wrapper">
                <h2>product details</h2>
                <div className="hero-product-btn flex-around">
                    <h5>
                        <Link to="/">
                            Home
                        </Link>
                    </h5>
                    <h6>
                        <AiOutlineArrowRight />
                    </h6>
                    <div className="hero-detail">
                        <h5>Product details</h5>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ProductHero