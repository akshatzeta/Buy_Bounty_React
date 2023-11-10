import React from "react";
import './Navbar.css';
import NavbarImage from '../../assets/logo.png';
import { FaSearch, FaHeart, FaCartPlus, FaUser } from 'react-icons/fa';

const Navbar = () => {
    return(
        <div className="navbar-container">
            <img 
                src={NavbarImage} 
                alt=""
                className="navbar-image" 
            />

            <div className="navigation-section">
                <button className="navbar-btn btn-home">Home</button>
                <button className="navbar-btn btn-about">About</button>
                <button className="navbar-btn btn-orders">Order</button>
                <button className="navbar-btn btn-shop">Shop</button>
            </div>

            <div className="logo-section">
                <FaSearch className="logo logo-search" />
                <FaHeart className="logo logo-about" />
                <FaCartPlus className="logo logo-cart" />
                <FaUser className="logo logo-user" />
            </div>
        </div>
    )
}

export default Navbar;