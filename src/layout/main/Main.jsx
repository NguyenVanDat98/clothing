import React, { useEffect, useState } from "react";
import ListCardNotification from "./ListCardNotification";
import ListsCard from "./ListsCard";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { PATH_LIST_PRODUCT, PATH_USER } from "../../Services/API/ConstantApi";
import CHANGE from "../../Redux/Constant";
import { changeAction } from "../../Redux/Reducer/Reducer";
import API from "../../Services/Constant";
import { runDispatch, Sort } from "../../common/common";
import "../../style/index.scss";
/* method working with api take from file Services/Constant
  Constant woking with Reducer take from file Redux/Constant

*/
const Main = ({ }) => {
  const [data, setData] = useState([]);
  const [dataCart, setDataCart] = useState([]);
  let dispatch = useDispatch();
  let change = useSelector((ee) => ee.state);
  ////////fetch DATA API/////////////
  useEffect(() => {
    API.Get(PATH_LIST_PRODUCT).then((res) => setData(res));
  }, []);
  useEffect(() => {
    API.Get(PATH_USER).then((res) => setDataCart(res));
  }, [change.render]);

  let handleSort = (e) => {
    setData(Sort(data, e.target.value));
  };

  //set count Product
  useEffect(() => {
    let CountCart = dataCart.reduce((a, e) => a + e.count, 0);
    let SumPrice = dataCart.reduce((e, a) => e + a.price * a.count, 0);
    dispatch(
      changeAction(CHANGE.STATE, {
        totalBill: SumPrice,
        countCart: CountCart,
        totalProduct: data.length,
      })
    );
    dispatch(changeAction(CHANGE.TODO_DATA_USER, dataCart));
  }, [dataCart]);



  //handle Control  add to Cart //
const handleAdd = async (el) => {
  let indexProduct = dataCart.findIndex((item) => item.id === el.id);
  let indexProductSelect = dataCart.filter((e) => e.id == el.id)[0];
    if (indexProduct !== -1) {
      try {
        API.Put(indexProductSelect, dataCart, indexProduct, el.id, false).then(
        (res) => {
          if (res.status === 200) {
            toast.success(
              `${indexProductSelect.name}  :  ${indexProductSelect.count} , ${indexProductSelect.count * indexProductSelect.price
              }$`
            );
            runDispatch(dataCart)
          }
        }
      );
      } catch (error) {
        console.log(error)
      }
      
    } else {
      //else can't find do it
      try {
         API.Post(el, PATH_USER).then((res) => {
            if (res.status === 201) {
              toast.success("Add to Cart Successfully!");
              dataCart.push(el);
              runDispatch(dataCart)

            }
      });
      } catch (error) {
        console.log(error)
      }
     
    }
    
  };

  return (
    <div className="mainContent">
      <p>Total : {change.totalProduct}</p>
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
      <ListsCard handleAdd={handleAdd} data={data} />
      <ListCardNotification />
    </div>
  );
};
export default Main;
