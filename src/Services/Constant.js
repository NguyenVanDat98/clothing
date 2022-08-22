
import { API_URL, PATH_USER } from "./API/ConstantApi";

 const Put = async (dataItem,dataCart,indexProduct,id,eff) => {
    eff ?( dataItem.count!==1&& dataCart[indexProduct].count--) :   dataCart[indexProduct].count++ 
    const response =  await fetch(API_URL + PATH_USER + `/${id}`, {
           method: "PUT",
           headers: { "Content-Type": "application/json" },
           body: JSON.stringify({
            ...dataItem
           }),
         });    
         return response
  };

 const Post = async (el,Path)=>{
   const response=  await fetch(API_URL +Path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(el),
  })
  return response
}

 const Get= async (Path)=>{
   const repose = await fetch(API_URL + Path)
  .then((res) => res.json())
  .then((resole) => resole
)
  .catch((err) => console.log(err.message));
  return repose
}
 const Delete= async (id,dataItem)=>{
    const response=  await fetch(API_URL + PATH_USER + `/${id}`, {
    method: "DELETE",
  })
  return response
 }
 const API ={Put,Post,Get,Delete}
 export default API