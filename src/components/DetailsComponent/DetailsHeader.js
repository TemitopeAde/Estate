import {Link} from 'react-router-dom'
import { FaCommentAlt } from "react-icons/fa";
import {FcCalendar} from "react-icons/fc";


const DetailsHeader = (props) => {

    const {newCategory} = props
    return (
        <div className="details-subtitle">
            <ul className="flex-between">
                {newCategory.map((item,index) => {
                    return (
                        <li key={index}>
                            <Link to="" className="btn">
                                {item}
                            </Link>
                        </li>
                    )
                })}
                
                {/* <li>
                    <Link className="btn-orange">
                        FOR RENT
                    </Link>
                </li>
                <li>
                    <FcCalendar  className="calendar" />
                    <h5>{new Date().getDay()}</h5>
                </li>
                <li>
                    <FaCommentAlt className="calendar" />
                    <h5>30 Comments</h5>
                </li> */}
            </ul>
        </div>
    )
}

export default DetailsHeader