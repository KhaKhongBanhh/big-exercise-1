import React, { useState, useContext } from 'react'; // 6.9k (gzipped: 2.7k)
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {

    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);

    return (
        <div className = 'navbar'>
            <div className = 'nav-logo'>
                <img src={logo} alt="" />
                <p>CỬA HÀNG</p>
            </div>
            <ul className = "nav-menu">
                <li onClick={() => {setMenu("shop")}}> <Link style={{ textDecoration: 'none'}} to='/'>Trang chủ</Link> {menu==="shop"?<hr/>:<></>} </li>
                <li onClick={() => {setMenu("mens")}}><Link style={{ textDecoration: 'none'}} to='/mens'>Đồ nam</Link> {menu==="mens"?<hr/>:<></>}</li>
                <li onClick={() => {setMenu("womens")}}><Link style={{ textDecoration: 'none'}} to='/womens'>Đồ nữ</Link> {menu==="womens"?<hr/>:<></>}</li>
                <li onClick={() => {setMenu("kids")}}><Link style={{ textDecoration: 'none'}} to='/kids'>Đồ trẻ em</Link> {menu==="kids"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Đăng nhập</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar

