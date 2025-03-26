import React from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
    return (
        <div className='newsletter'>
            <h1>Nhận những ưu đãi hấp dẫn qua Email</h1>
            <p>Đăng ký nhận bản tin của chúng tôi và cập nhật thông tin</p>
            <div>
                <input type="text" placeholder="Enter your email" />
                <button>Đăng ký</button>
            </div>
        </div>
    );
}

export default NewsLetter;