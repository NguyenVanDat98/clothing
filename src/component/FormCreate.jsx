import React, {  useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import makeId from "../common/common"
import storeState from "../common/storeState";
import { observer } from "mobx-react"
import "../style/index.scss";
import { PATH_LIST_PRODUCT } from "../Services/API/ConstantApi";
import API from "../Services/Constant";

const FormCreate = ({}) => {
  const [data , setData ]=useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imgg, setImgg] = useState("");
  const [file, setfile] = useState("");

    useEffect(()=>{
      API.Get(PATH_LIST_PRODUCT+`?name_like=${name}`).then(res=>setData(res))
    },[name]);
    async function handleSubmit(e) {
   e.preventDefault();
    //////valid data input for user /////
    if (data.findIndex(a=>a.name===name.trim())!==-1 ) {
        toast.error("Use name product diffrent,Please!");
    } else {
      try {
        API.Post({name,price,file,imgg,id: makeId (12),count: 1,},PATH_LIST_PRODUCT).then(res=>{
        if(res.status===201){
          setName("");
          setPrice("");
          setImgg("");
          document.getElementById("urlImg").value = "";
          toast.success("Successfully!");
        }
      })
      } catch (error) {
        console.log(error);
      }
      
      
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
                ?  setfile(URL.createObjectURL(e.target.files[0]))
                :setImgg(e.target.value)
            }
            type={storeState.check ? "file": "text" }
          />
        </div>

        <div className="button">
          <button type="submit">save</button>
          <button type="reset">reset</button>
        </div>
      </form>
    </div>
  );
};
export default observer(FormCreate);
