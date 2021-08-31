import React from "react";
import {AiFillFastForward} from "react-icons/ai";



const Search = () => {
    return (
        <div className="search-form">
            <div className="search-form-container">
                <div className="form shadow">
                    <form className="search-form">
                        <input type="text" placeholder="Search here" className="search-input" />
                        <button type="submit" className="search-submit"><AiFillFastForward /></button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Search