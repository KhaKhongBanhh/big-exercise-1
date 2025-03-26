import React from 'react';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>Đăng nhập</h1>
                <div className='loginsignup-fields'>
                    <input type="text" placeholder='Tên của bạn' />
                    <input type="email" placeholder='Địa chỉ Email' />
                    <input type="password" placeholder='Mật khẩu' />
                </div>
                <button>Đăng nhập</button>
                <p className='loginsignup-login'>Bạn đã có tài khoản? <span>Đăng nhập ở đây</span></p>
                <div className='loginsignup-agree'>
                    <input type="checkbox" name='' id='' />
                    <p>Để tiếp tục, hãy đồng ý với điều khoản và chính sách.</p>
                </div>
            </div>
        </div>
    );
}

export default LoginSignup;