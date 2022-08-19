import React from "react";
import storeState from "../common/storeState";
import {  } from "mobx-react";
import { API_URL, DATA_2 } from "../common/common";
import toast from 'react-hot-toast';
import { useDispatch , useSelector} from 'react-redux';
import { changeAction, CHANGE_STATE_COUNTCART, CHANGE_TODO_DATA_USER } from "../Redux/Reducer/Reducer";


const CardNotification = ({ name, price, count, imgg, id }) => {
  let dispatch=useDispatch()
  let change = useSelector(ee=>ee)
  let indexProduct = change.todosList.dataUser.findIndex(a=>a.id===id)
  let item = change.todosList.dataUser
  const dataItem = item[indexProduct]
  // console.table(item[indexProduct]);
    const handleDelete = async(id)=>{    

    await fetch(API_URL+DATA_2+`/${id}`,{
        method:"DELETE"
       })       
       toast.success(`${dataItem.name} : Delete Successfully!`)
      item.splice(indexProduct,1)
      dispatch(changeAction(CHANGE_TODO_DATA_USER, item ))
      dispatch(changeAction(CHANGE_STATE_COUNTCART, item.reduce((a,e)=>a+e.count ,0)))
       dispatch(changeAction("Change/State-render"))
    }
    const handleUP =(id)=>{  
      item[indexProduct].count ++ 
         fetch(API_URL+DATA_2+`/${id}` , {
            method :"PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, price, count: dataItem.count+1 , imgg, id }) 
         } )
         dispatch(changeAction(CHANGE_TODO_DATA_USER, item ))
      dispatch(changeAction(CHANGE_STATE_COUNTCART, item.reduce((a,e)=>a+e.count ,0)))
         dispatch(changeAction("Change/State-render"))

      
  }
    const handleDown =(id)=>{
      dataItem.count!==1&& item[indexProduct].count -- 
       dataItem.count!==1&& fetch(API_URL+DATA_2+`/${id}` , {
        method :"PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name : dataItem.name , price : dataItem.price , count: dataItem.count-1 , imgg : dataItem.imgg , id : dataItem.id  }) 
     } )
     dispatch(changeAction(CHANGE_TODO_DATA_USER, item ))
      dispatch(changeAction(CHANGE_STATE_COUNTCART, item.reduce((a,e)=>a+e.count ,0)))
     dispatch(changeAction("Change/State-render"))


    }
  return (
    <div className="item-notification">
      
      <img width="40px" height={40} src={dataItem.imgg} alt="" />
      <p>{dataItem.name}</p>
      <div className="count">
        <a onClick={()=>handleDown(dataItem.id)}>
          <i className="fa-solid fa-circle-minus"></i>{" "}
        </a>
        <span>{dataItem.count}</span>
        <a onClick={() =>handleUP(dataItem.id)}>
          <i className="fa-solid fa-circle-plus"></i>{" "}
        </a>
      </div>
      <a> ${dataItem.price}</a>
      <a onClick={()=>handleDelete(dataItem.id)}>
        {" "}
        <i className="fa-solid fa-ban"></i>
      </a>
    </div>
  );
};

export default (CardNotification);
