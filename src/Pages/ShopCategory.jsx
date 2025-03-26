import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item';


const ShopCategory = (props) => {

    const {all_product} = useContext(ShopContext);
    
    return (
        <div className='shop-category' lang='vi'>
            <img className='shopcategory-banner' src={props.banner} alt="" />
            <div className='shopcategory-indexSort'>
                <p>
                    <span>Hiện từ 1-12</span> trong 36 kết quả
                </p>
            <div className='shopcategory-sort'>
                Sắp xếp <img src={dropdown_icon} alt="" />
            </div>
            </div>
            <div className='shopcategory-products'>
                {all_product.map((item,i) => {
                    if(item.category === props.category){
                        return <Item key={i} id={item.id} name={item.name} image={item.image}  new_price={item.new_price}  old_price={item.old_price}/>
                    }
                    else{
                        return null;
                    }
                })}
            </div>
            <div className='shopcategory-loadmore'>
                Hiện thêm
            </div>
        </div>
    );
}

export default ShopCategory;