import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import makeId, { selectProduct } from "../common/common";
import storeState from "../common/storeState";
import { observer } from "mobx-react";
import "../style/index.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProductGet,
  fetchProductPost,
} from "../Redux/ReducerProduct/productAction";

const FormCreate = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imgg, setImgg] = useState("");
  const [file, setfile] = useState("");
  const dispatch = useDispatch();

  const dataProduct = useSelector(selectProduct);

  useEffect(() => {
    dispatch(fetchProductGet());
  }, [dispatch]);
  function setReset() {
    setName("");
    setPrice("");
    setImgg("");
    document.getElementById("urlImg").value = "";
  }
  function handleSubmit(e) {
    e.preventDefault();
    //////valid data input for user /////
    let isTrue = dataProduct.findIndex((a) => a.name === name.trim());
    if (isTrue !== -1) {
      toast.error("Use name product diffrent,Please!");
    } else {
      let data = { name, price, file, imgg, id: makeId(12), count: 1 };
      dispatch(fetchProductPost(data));
      toast.success("Add to Product list Compele!");
      setReset();
    }
  }
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <form onSubmit={handleSubmit}>
        <h2>Add New Product</h2>
        <div>
          {" "}
          <label htmlFor="name">Name: </label>{" "}
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            required
          />{" "}
        </div>
        <div>
          {" "}
          <label htmlFor="price">Price: </label>{" "}
          <input
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            required
          />{" "}
        </div>
        <div className="checkboxx">
          <input
            className="check"
            type="checkbox"
            onClick={() => {
              storeState.setCheck();
            }}
          />
          <div className="block">
            <div className="circle"> </div>
          </div>
        </div>

        <div>
          {" "}
          <label htmlFor="urlImg">Image: </label>{" "}
          <input
            id="urlImg"
            onChange={(e) =>
              storeState.check
                ? setfile(URL.createObjectURL(e.target.files[0]))
                : setImgg(e.target.value)
            }
            type={storeState.check ? "file" : "text"}
          />
        </div>

        <div className="button">
          <button type="submit">save</button>
          <button onClick={setReset}>reset</button>
        </div>
      </form>
    </div>
  );
};
export default observer(FormCreate);
