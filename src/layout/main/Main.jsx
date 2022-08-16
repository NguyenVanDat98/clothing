import React, { useEffect } from 'react';
import storeState from '../../common/storeState';
import ListsCard from '../../component/ListsCard';
import ListCardNotification from './ListCardNotification';
import { observer } from "mobx-react"

import "./styleMain/main.scss"
import { API_URL, DATA_2 } from '../../common/common';
const Main = ({data,dataCart}) => {

    useEffect(()=>{
       storeState.setNum(dataCart.length) 
      let total = dataCart.reduce((e,a)=> (e + parseInt(a.price)*parseInt(a.coust)) ,0) 
      storeState.setTotal(total)
    },[dataCart,storeState.total]);
const handleAdd =(el)=>{
    
    if(dataCart.map(e=>e.id).includes(el.id)){
        alert("Sản phẩm đã tồn tại trong giỏ hàng")
    }else{
        dataCart.push({...el,coust:1})
        storeState.setNum(dataCart.length)
        fetch(API_URL+DATA_2,{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body : JSON.stringify({...el, coust:1})

        } )}
        storeState.setRender()
}

    return (
        <div className='mainContent'>
            <p>Total : {storeState.SumProduct}</p>
            <ListsCard handleAdd={handleAdd} data={data}/>
            <ListCardNotification status={storeState.statusDisplay} data={dataCart}   />
        </div>
    );
};
export default observer(Main) ;