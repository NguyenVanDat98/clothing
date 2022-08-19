import React from "react";
import storeState from "../common/storeState";
import {  } from "mobx-react";
import { API_URL, DATA_2 } from "../common/common";
import toast from 'react-hot-toast';
import { useDispatch , useSelector} from 'react-redux';
import { changeAction } from "../Redux/Reducer/Reducer";


const CardNotification = ({ name, price, count, imgg, id }) => {
  let dispatch=useDispatch()
  let change = useSelector(ee=>ee.state)

    const handleDelete =(id)=>{
       fetch(API_URL+DATA_2+`/${id}`,{
        method:"DELETE"
       })
      dispatch(changeAction("Change/State-render"))
       
       toast.success(`${name} : Delete Successfully!`)
    }
    const handleUP =(id)=>{  
         fetch(API_URL+DATA_2+`/${id}` , {
            method :"PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, price, count: count+1 , imgg, id }) 
         } )
         dispatch(changeAction("Change/State-render"))

      
  }
    const handleDown =(id)=>{
       count!==1&& fetch(API_URL+DATA_2+`/${id}` , {
        method :"PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, price, count: count-1 , imgg, id }) 
     } )
     dispatch(changeAction("Change/State-render"))


    }
  return (
    <div className="item-notification">
      
      <img width="40px" height={40} src={imgg} alt="" />
      <p>{name}</p>
      <div className="count">
        <a onClick={()=>handleDown(id)}>
          <i className="fa-solid fa-circle-minus"></i>{" "}
        </a>
        <span>{count}</span>
        <a onClick={() =>handleUP(id)}>
          <i className="fa-solid fa-circle-plus"></i>{" "}
        </a>
      </div>
      <a> ${price}</a>
      <a onClick={()=>handleDelete(id)}>
        {" "}
        <i className="fa-solid fa-ban"></i>
      </a>
    </div>
  );
};

export default (CardNotification);
