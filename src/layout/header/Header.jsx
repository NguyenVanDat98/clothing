import React from 'react';
import { Link } from 'react-router-dom';
import storeState from '../../common/storeState';
import { observer } from "mobx-react"; 
import { useNavigate } from "react-router-dom";

import "./HeaderStyle.scss";
const Header = ({props}) => {
    let navi = useNavigate();
    return(
        <header>
             <a onClick={()=>{navi("/clothing/") ;storeState.setRender() }} ><p >SHOP NONAME</p> </a>
            
            <div className='controll'>
                <a data-coust={storeState.numberProduct} onClick={()=> storeState.changeDis()} ><i className="fa-solid fa-cart-shopping"></i></a>
                <span><i className="fa-solid fa-bars"></i></span>
                <div className="dropdown-menu">
                    <ul className="dropdown">
                        <li><Link to="/shop/add">Create Product  </Link> </li>
                        <li>View Cart</li>                                
                </ul>
                
                </div>
            </div>
        </header>
    )
}

export default observer(Header) ;