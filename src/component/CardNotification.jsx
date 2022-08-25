import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {  selectCart } from "../common/common";
import { fetchProductUserDelete, fetchProductUserPut } from "../Redux/ReducerProduct/userAction";



const CardNotification = ({ dataItem }) => {
  let item = useSelector(selectCart)
  let dispatch = useDispatch()

  /*Handle Delete item in Cart User */
  const onDelete = async (id) => { 
      dispatch(fetchProductUserDelete(id,item))
  };
  const onCount = (bol) => {
    let index = item.findIndex(e=>e.id===dataItem.id)    
    item[index].count += bol?(item[index].count!==1&& -1):+1
    dispatch(fetchProductUserPut(dataItem.id,item))
  }

  return (
    <div className="item-notification">
      <img width="40px" height={40} src={dataItem.imgg} alt="" />
      <p>{dataItem.name}</p>
      <div className="count">
        <a
          onClick={() => onCount(true)}>
          <i className="fa-solid fa-circle-minus"></i>{" "}
        </a>
        <span>{dataItem.count}</span>
        <a
          onClick={() => onCount(false)}>
          <i className="fa-solid fa-circle-plus"></i>{" "}
        </a>
      </div>
      <a> ${dataItem.price}</a>
      <a onClick={() => onDelete(dataItem.id)}>
        {" "}
        <i className="fa-solid fa-ban"></i>
      </a>
    </div>
  );
};

export default CardNotification;
