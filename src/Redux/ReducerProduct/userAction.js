import toast from "react-hot-toast";
import { API_URL, PATH_USER } from "../../serviceApi/constantApi";
import { AddToCart, saveCart } from "./productAction";

export const fetchProductUserGet = () => {
  return (dispatch) => {
    (async () => {
      try {
        const response = await fetch(API_URL + PATH_USER).then((res) =>
          res.json()
        );
        dispatch(saveCart(response));
      } catch (error) {}
    })();
  };
};

export const fetchProductUserPut = (id, data) => {
  let dataItem = data.find(a=>a.id===id)
  return (dispatch) => {
    (async () => {
      try {
        await fetch(API_URL + PATH_USER + `/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataItem),
        });

        dispatch(saveCart(data));
      } catch (error) {}
    })();
  };
};

export const fetchProductUserPost = (data) => {
  const item = {...data,count : 1}
  return (dispatch) => {
    (async () => {
      try {
        const response = await fetch(API_URL + PATH_USER, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(item),
        }).then((res) => {
          if(res.status===201){
            toast.success("Add to Cart Successfully!");           
            dispatch(AddToCart(item));          
          }})
      } catch (error) {}
    })();
  };
};
export const fetchProductUserDelete = (id, data) => {
    let dataItem = data.find(a=>a.id===id)
    let fill = data.filter(a=>a.id!==id)
  return (dispatch) => {
    (async () => {
      try {
        await fetch(API_URL + PATH_USER + `/${id}`, {
          method: "DELETE"
        }).then((res) => {
          if(res.status===200){ 
            toast.success(`${dataItem.name} : Delete Successfully!`);
          }})
          dispatch(saveCart(fill));          
      } catch (error) {}
    })();
  };
};



