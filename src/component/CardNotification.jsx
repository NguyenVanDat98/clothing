import React, { useState } from "react";
import storeState from "../common/storeState";
import { observer } from "mobx-react";
import { API_URL, DATA_2 } from "../common/common";
const CardNotification = ({ name, price, coust, imgg, id }) => {
    const handle =(id)=>{
       fetch(API_URL+DATA_2+`/${id}`,{
        method:"DELETE"
       })

       storeState.setRender()
    }
    const handleUP =(id)=>{
  
         fetch(API_URL+DATA_2+`/${id}` , {
            method :"PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, price, coust: coust+1 , imgg, id }) 
         } )
       storeState.setRender()

    }
    const handleDown =(id)=>{

       coust!==1&& fetch(API_URL+DATA_2+`/${id}` , {
        method :"PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, price, coust: coust-1 , imgg, id }) 
     } )
     storeState.setRender()

    }
  return (
    <div className="item-notification">
      <img width="40px" height={40} src={imgg} alt="" />
      <p>{name}</p>
      <div className="coust">
        <a onClick={()=>handleDown(id)}>
          <i className="fa-solid fa-circle-minus"></i>{" "}
        </a>
        <span>{coust}</span>
        <a onClick={() =>handleUP(id)}>
          <i className="fa-solid fa-circle-plus"></i>{" "}
        </a>
      </div>
      <a> ${price}</a>
      <a onClick={()=>handle(id)}>
        {" "}
        <i className="fa-solid fa-ban"></i>
      </a>
    </div>
  );
};

export default observer(CardNotification);
