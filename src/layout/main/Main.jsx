import React, { useEffect } from "react";
import ListCardNotification from "./ListCardNotification";
import ListsCard from "./ListsCard";
import { useDispatch, useSelector } from "react-redux";

import { fetchProductGet } from "../../Redux/ReducerProduct/productAction";
import { fetchProductUserGet } from "../../Redux/ReducerProduct/userAction";
import { selectProduct, selectShop, Sort } from "../../common/common";
import "../../style/index.scss";
/* method working with api take from file Services/Constant
  Constant woking with Reducer take from file Redux/Constant

*/
const Main = (props) => {
  let dispatch = useDispatch();
  let change = useSelector(selectShop);
  let data = useSelector(selectProduct);

  ////////fetch DATA APImethod/////////////
  useEffect(() => {
    dispatch(fetchProductGet());
    dispatch(fetchProductUserGet());
  }, [dispatch]);
  let handleSort = (e) => {
    dispatch({type:"Save-List-Product", payload: Sort(data, e.target.value)});
  };

  return (
    <div className="mainContent">
      <p>Total : {change.totalProduct()}</p>
      <button value="nameDown" onClick={handleSort}>
        sort A-Z
      </button>
      <button value="nameUp" onClick={handleSort}>
        sort Z-A
      </button>
      <button value="priceUp" onClick={handleSort}>
        sort 1-9
      </button>
      <button value="priceDown" onClick={handleSort}>
        sort 9-1
      </button>
      <ListsCard data={data} />
      <ListCardNotification />
    </div>
  );
};
export default Main;
