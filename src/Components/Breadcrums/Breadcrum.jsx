import React from 'react';
import './Breadcrum.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';


const Breadcrum = (props) => {

    const {product} = props;

    return (
        <div className='breadcrum'>
            MÀN HÌNH CHÍNH <img src={arrow_icon} alt="" /> CỬA HÀNG <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
        </div>
    );
}

export default Breadcrum;