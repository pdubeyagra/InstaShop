import React from 'react'
import './Footer.scss'
import footer_logo from '../../Assets/logo_big.png'
import Instagram_Icon from '../../Assets/instagram_icon.png'
import pininterest_Icon from '../../Assets/pintester_icon.png'
import whatsapp_Icon from '../../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='Footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>InstaShop</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icon-container">
                <img src={Instagram_Icon} alt="" />
            </div>
            <div className="footer-icon-container">
                <img src={pininterest_Icon} alt="" />
            </div>
            <div className="footer-icon-container">
                <img src={whatsapp_Icon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2024 - All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer