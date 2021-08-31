import { Link } from "react-router-dom"


const Drops = () => {
    return (
        <div className="nav-drops">
            <ul className="nav-drop shadow">
                <li>
                    <Link>
                        sign in
                    </Link>
                </li>
                <li>
                    <Link>
                        my account  
                    </Link>
                </li>
                <li>
                    <Link>
                        wishlist
                    </Link>
                </li>
            </ul>
        </div>
    )
}


export default Drops