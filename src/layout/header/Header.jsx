import React from 'react';
import { Link } from 'react-router-dom';
import storeState from '../../common/storeState';
import { observer } from "mobx-react"; 

import { useSelector} from 'react-redux';

import "../../style/index.scss";
const Header = (props) => {
    let change = useSelector(ee=>ee.shop)
    return(
        <header>
            <Link to="/"><p >SHOP NONAME </p></Link>         
            
            <div className='controll'>
                <div className='guide'>
                    <a><i className="fa-solid fa-circle-exclamation"></i> </a>
                    <p>
                        * Hướng dẫn sử dụng <br/>
                        - Bấm vào logo để về trang chính<br/>
                        - Thêm số lượng sản phẩm ở preview Cart
                         </p>                   
                
                </div>
                <a data-count={change.countCart()} onClick={()=> storeState.changeDis()} ><i className="fa-solid fa-cart-shopping"></i></a>
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