import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo_big.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pintester_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';


const Footer = () => {
    return (
        <div className="footer">
            <div className='footer-logo'>
                <img src={footer_logo} alt="" />
                <p>SHOP QUẦN ÁO</p>
            </div>
            <ul className="footer-links">
                <li>Công ty</li>
                <li>Sản phẩm khác</li>
                <li>Văn phòng</li>
                <li>Về chúng tôi</li>
                <li>Liên hệ</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={instagram_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={pintester_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_icon} alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2023 - All Right Reserved.</p>
            </div>
        </div>
    );
}

export default Footer;