import React, {useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {

    const{all_product, cartItems, removeFromCart, getTotalCartAmount} = useContext(ShopContext);

    return (
        <div className='cartitems'>
            <div className='cartitems-format-main'>
                <p>SẢN PHẨM</p>
                <p>TÊN</p>
                <p>GIÁ</p>
                <p>SỐ LƯỢNG</p>
                <p>THÀNH TIỀN</p>
                <p>XÓA</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if(cartItems[e.id] > 0){
                    return <div>
                        <div className="cartitems-format cartitems-format-main">
                            <img src={e.image} alt="" className='carticon-product-icon' />
                            <p>{e.name}</p>
                            <p>{e.new_price}VNĐ</p>
                            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                            <p>{e.new_price * cartItems[e.id]}VNĐ</p>
                            <img className='cartitems-remove-icon' src={remove_icon} onClick={() => {removeFromCart(e.id)}} alt="" />
                        </div>
                    </div>
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>TỔNG TIỀN SẢN PHẨM</h1>
                    <div>
                        <div className='cartitems-total-item'>
                            <p>TỔNG SỐ TIỀN ĐƠN HÀNG</p>
                            <p>{getTotalCartAmount()}VNĐ</p>
                        </div>
                        <hr />
                        <div className='cartitems-total-item'>
                            <p>PHÍ SHIP</p>
                            <p>MIỄN PHÍ</p>
                        </div>
                        <hr />
                        <div className='cartitems-total-item'>
                            <p>TỔNG TIỀN</p>
                            <h3>{getTotalCartAmount()}VNĐ</h3>
                        </div>
                    </div>
                    <button>THANH TOÁN</button>
                </div>
                <div className="cartitems-promocode">
                    <p>Nếu bạn có mã giảm giá thì click vào đây</p>
                    <div className='cartitems-promobox'>
                        <input type="text" placeholder='Nhập mã vào đây'/>
                        <button>XÁC NHẬN</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItems;