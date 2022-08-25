import React from "react";
import "../style/index.scss";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { fetchProductUserPost, fetchProductUserPut} from "../Redux/ReducerProduct/userAction";
import { selectCart } from "../common/common";
const Card = (props) => {
  const { name, imgg, price, file } = props.data;
  const dispatch = useDispatch();
  const data = useSelector(selectCart);
  const handleAdd = (item) => {

    const isIndex = data.findIndex((dataItem) => dataItem.id === item.id);
    if (isIndex === -1) {
      dispatch(fetchProductUserPost(item));
    } else {
      data[isIndex].count += 1;
      toast.success(
        `${data[isIndex].name}  :  ${data[isIndex].count} , ${
            data[isIndex].count * data[isIndex].price
        }$`
      );
      dispatch(fetchProductUserPut(item.id, data));
    }
  };
  return (
    <div className="Card">
      <img src={file || imgg} alt={props.data.name} />
      <section>
        <h2>{name}</h2>
        <h5>${price} </h5>
        <button onClick={() => handleAdd(props.data)}>Add to Cart</button>
      </section>
    </div>
  );
};
export default Card;
