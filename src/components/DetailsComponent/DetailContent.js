import { GrLocation } from "react-icons/gr";
import { IoBedSharp,IoStar } from "react-icons/io5";
import { Link } from "react-router-dom";
import {useState, useEffect} from "react";
import { YoutubePlayer } from "reactjs-media";


const DetailContent = (props) => {
    const [value,setValue] = useState(0)
    const {
        newState,
        newArea,
        newImage,
        newFloorPlan,
        newBed,
        newBath,
        newDescription,
        newLocation,
        newAmenities,
        newFeatures,
        newCategory,
        newDate,
        newStatus,
        newTitle,
        newYearBuilt,
        newId,
        newVideo,
        newRooms,
        newPrice
    } = props
    const {image,category} = newFloorPlan[value]
    
    return (
        <div className="detailcontent">
            <div className="detailcontentwrap">
                <div className="detailcontentcontainer">
                    <div className="content-one-flex">
                        <h3>{newTitle}</h3>

                        <div className="location">
                            <GrLocation />
                            <small><h6>{newLocation}</h6></small>
                        </div>

                        

                        <div className="details-description">
                            <div className="details-description-wrap">
                                <div className="title">
                                    <h3>Description</h3>
                                </div>

                                <div className="text">
                                    <p>{newDescription}</p>
                                </div>

                                <div className="property-detail">
                                    <div className="title">
                                        <h3>Property Detail</h3>
                                    </div>

                                    <div className="text">
                                        <div className="text-wrap">
                                            <div className="text-one">
                                                <p>Property ID: <span>{newId}</span></p>
                                                <p>Home Area: <span>{newArea} sqft</span></p>
                                                <p>Rooms: <span>{newRooms}</span></p>
                                                <p>Bath: <span>{newBath}</span></p>
                                                <p>Years built: <span>{newYearBuilt}</span></p>
                                            </div>
                                            <div className="text-one">
                                                <p>Price: <span>{newPrice}</span></p>
                                                <p>Beds: <span>{newBed}</span></p>
                                                <p>Property Status:<span>For Sale</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="facts-and-features">
                                    <div className="title">
                                        <h3>Facts and features</h3>
                                    </div>

                                    <div className="content">
                                        {newFeatures.map((item,index) => {
                                            console.log(item)
                                            return (
                                                <div className="content-items" key={index}>
                                                    <div className="icon">
                                                        <IoBedSharp />
                                                    </div>
                                                    
                                                    <div className="det">
                                                        <h5>{item.type}</h5>
                                                        <p>{item.width}x{item.length} sq feet</p>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>


                                <div className="floor-plan">
                                    <div className="floor-plan-wrap">
                                        <div className="floor-plan-container">
                                            <div className="title">
                                                <h3>Floor Plans</h3>
                                            </div>

                                            <div className="floor-nav">
                                                <ul className="floor-ul">
                                                    
                                                    {newFloorPlan.map((item,index) => {
                                                        
                                                        return (
                                                            <li key={index} onClick={() => setValue(index)}>
                                                                <Link className={`floor-nav-btn ${index===value && 'active-btn'}`}>
                                                                    {item.category}
                                                                </Link>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </div>

                                            <div className="plan-image">
                                                <img src={image} alt={category} />
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="amenities-container">
                                    <div className="title">
                                        <h3>Amenities</h3>
                                    </div>

                                    <div className="amenities">
                                        <div className="amenities-box">
                                            {newAmenities.map((item,index) => {
                                                return (
                                                    <li key={index}>
                                                        <IoBedSharp /><p>{item}</p>
                                                    </li>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>

                                <div className="video-container">
                                    <div className="video-box">
                                        <div className="title">
                                            <h3>Property Video</h3>
                                        </div>

                                        <div className="video">
                                            <YoutubePlayer
                                                src={newVideo} 
                                                width="100%"
                                                height={400}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="customer-review">
                                    <div className="customer-review-container">
                                        <div className="title">
                                            <h3>customer review</h3>
                                        </div>

                                        <div className="customer-reviews">
                                            <div className="customer-reviews-box">
                                                <div className="reviews">
                                                    <div className="customer-details">
                                                        <h3>adam smit</h3>
                                                        <Link className="shadow">
                                                            September 3, 2021
                                                        </Link>
                                                    </div>
                                                    <div className="review-stamp">
                                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error.</p>
                                                    </div>
                                                </div>
                                                <div className="reviews">
                                                    <div className="customer-details">
                                                        <h3>adam smit</h3>
                                                        <Link className="shadow">
                                                            September 3, 2021
                                                        </Link>
                                                    </div>
                                                    <div className="review-stamp">
                                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="addreview">
                                            <div className="add-review-container">
                                                <div className="add-review-box">
                                                    <div className="title">
                                                        <h3>add a review</h3>
                                                    </div>

                                                    <div className="review-form-box">
                                                        <form>
                                                            <textarea placeholder="Enter your review" className=""></textarea>
                                                            <input placeholder="Name" type="text" name="name" id="review-name" className="shadow" />
                                                            <input placeholder="Email" type="text" name="email" id="review-name" className="shadow" />
                                                            <small>
                                                                <label htmlFor="save">
                                                                    <input type="checkbox" name="" id="save" />
                                                                    <span>Save my credentials for next time</span>
                                                                </label>
                                                            </small>
                                                            <button type="submit" className="shadow btn">Submit</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                

                <div className="details-flex">
                    <div className="details-flex-container">
                        <div className="details-flex-box-1">
                            <div className="title">
                                <h3>top rated product</h3>
                            </div>

                            <div className="top-rated-cont">
                                <div className="top-rated-box">
                                
                                    <div className="top-rated">
                                        <div className="top-rated-img">
                                            <Link>
                                                <img src={newImage} alt={newTitle} />
                                            </Link>
                                        </div>
                                        
                                        <div className="top-rated-wrap">
                                            <div className="rating-star">
                                                <IoStar />
                                                <IoStar />
                                                <IoStar />
                                                <IoStar />
                                                <IoStar />
                                            </div>

                                            <h5>
                                                <Link>
                                                    {newTitle}
                                                </Link>
                                            </h5>
                                            <p>{newPrice} <span id="naira">Naira</span></p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                

            </div>
        </div>
    )
}

export default DetailContent