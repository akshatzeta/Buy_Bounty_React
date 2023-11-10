import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            
            <div className="footer-division team-container">
                <h3>Zeta</h3>
                <button className="footer-btn">Akshat NITW</button>
                <button className="footer-btn">Parag DSCE</button>
            </div>

            <div className="footer-division quicklinks">
                <h3>Quick links</h3>
                <button className="footer-btn btn-home">Home</button>
                <button className="footer-btn btn-about">About</button>
                <button className="footer-btn btn-shop">Shop</button>
            </div>

            <div className="footer-division extralinks">
                <h3>Extra links</h3>
                <button className="footer-btn btn-Login">Login</button>
                <button className="footer-btn btn-Register">Register</button>
                <button className="footer-btn btn-Cart">Cart</button>
                <button className="footer-btn btn-Orders">Orders</button>
            </div>


        </div>
    )



}

export default Footer;