import { Link } from "react-router-dom"
import { BsFillGrid3X3GapFill } from "react-icons/bs";

const Fullnav = () => {
    return (
        <div className="fullnav-wrap">
            <div className="fullnavbox">
                <div className="fullnav-container">
                    <ul>
                        <li>
                            <Link>
                                Search
                            </Link>
                        </li>
                        <li>
                            <Link>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link>
                                Shop
                            </Link>
                        </li>
                        <li>
                            <Link>
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link>
                                Pages
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Fullnav