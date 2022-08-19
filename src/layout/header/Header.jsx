import React from 'react';
import { Link } from 'react-router-dom';
import storeState from '../../common/storeState';
import { observer } from "mobx-react"; 
import { useNavigate } from "react-router-dom";

import "../../style/index.scss";
const Header = ({props}) => {
    let navi = useNavigate();
    return(
        <header>
             <a onClick={()=>{navi("/")}} ><p >SHOP NONAME </p>  </a>
            
            <div className='controll'>
                <div className='guide'>
                    <a><i className="fa-solid fa-circle-exclamation"></i> </a>
                    <p>
                        * Hướng dẫn sử dụng <br/>
                        - Bấm vào logo để về trang chính<br/>
                        - Thêm số lượng sản phẩm ở preview Cart
                         </p>                   
                
                </div>
                <a data-count={storeState.total.Users} onClick={()=> storeState.changeDis()} ><i className="fa-solid fa-cart-shopping"></i></a>
                <span><i className="fa-solid fa-bars"></i></span>
                <div className="dropdown-menu">
                    <ul className="dropdown">
                        <li><Link to="/add">Create Product  </Link> </li>
                        <li>View Cart</li>                                
                </ul>
                
                </div>
            </div>
        </header>
    )
}

export default observer(Header) ;