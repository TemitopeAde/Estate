import React,  {useState} from 'react'
import {Link} from 'react-router-dom';
import {AiFillAlipayCircle, AiOutlineLike, AiOutlineWhatsApp} from "react-icons/ai";
import Search from './Search';
import Drops from './Drop';
import Fullnav from './Fullnav';
import { BsFillGrid3X3GapFill, BsFillXCircleFill,BsMoon,BiMoon } from "react-icons/bs";
import { FaSearch,FaUserCircle } from "react-icons/fa";


const Navbar =() =>{
    const [search,setSearch] = useState(false)
    const [visible,setVisible] = useState(false)
    const [icon,setIcon] = useState(true)

    return (
        
        <div className="navbar">

        <div className="full-icon">
            <div className="ful-icon" onClick={() => setIcon(!icon)}>
                {icon? <BsFillGrid3X3GapFill className="toggle-icon" />: <BsFillXCircleFill className="toggle-icon" />}
            </div>
        </div>

            <div className={icon? 'full-nav': 'full-nav toggle-icon-nav'}>
                <Fullnav />
            </div>

            <div className="wrapper">
                <header className="shadow">
                    <nav>
                        <div className="logo">
                            <div className="logo-wrapper">
                                <div className="center">
                                    <AiFillAlipayCircle className="logo-img" />
                                    <Link to="/" className="logo-text">
                                        ESTATE
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="navs">
                            <div className="nav-wrapper">
                                <ul className="navs-items">
                                    <li className="navs-link">
                                        <Link className="">
                                            About
                                        </Link>
                                    </li>
                                    <li className="navs-link">
                                        <Link className="">
                                            Shop
                                        </Link>
                                    </li>
                                    <li className="navs-link">
                                        <Link className="">
                                            Contact
                                        </Link>
                                    </li>
                                    <li className="navs-link">
                                        <Link className="">
                                            Pages
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="navlinks">
                            <div className="navitems">
                                <Link className="navlink shadow" onClick={() => setSearch(!search)}>
                                    <FaSearch className="nav-icon"/>
                                </Link>
                            
                            </div>
                            
                            {/* <div className="navitems">
                                <Link className="navlink shadow" onMouseOver ={() => setVisible(!visible)}>
                                    <FaUserCircle className="nav-icon"/>
                                </Link>
                                {visible? <Drops /> : ''}
                                
                            </div> */}
                            <div className="navitems">
                                <Link className="navlink shadow">
                                    <AiOutlineWhatsApp className="nav-icon"/>
                                </Link>
                            </div>
                            <div className="navitems">
                                <Link className="navlink shadow">
                                    <BsMoon className="nav-icon"/>
                                </Link>
                            </div>
                            
                        </div>
                    </nav>
                </header>
                
                    <div className="search-component">
                        {search? <Search />: ''} 
                    </div>
                
        
            </div>
        </div>
    )
}

export default Navbar
