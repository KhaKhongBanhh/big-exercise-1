import React from 'react';
import './DesriptionBox.css';

const DesriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews(122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aspernatur temporibus ab. </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aspernatur temporibus ab. </p>
            </div>
        </div>
    );
}

export default DesriptionBox;