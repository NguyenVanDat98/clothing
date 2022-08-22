import React from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { runDispatch } from "../common/common";

import API from "../Services/Constant";

const CardNotification = ({ id }) => {
  let item = useSelector((state) => state.todosList.dataUser)
  let indexProduct = item.findIndex((a) => a.id === id);
  let dataItem = item[indexProduct];
  /*  function set value in Store.js  from Redux */
  
  /*Handle Delete item in Cart User */
  const onDelete = async (id) => {
    API.Delete(id, dataItem).then(res => {
      if (res.status === 200) {
        toast.success(`${dataItem.name} : Delete Successfully!`);
        item.splice(indexProduct, 1);
        runDispatch(item);
      }
    })
  };
  const onCount = (bol) => {
    API.Put(dataItem, item, indexProduct, id, bol).then(res => { if (res.status === 200) runDispatch(item) })
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
