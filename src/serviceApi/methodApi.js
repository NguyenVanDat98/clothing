
import { API_URL, PATH_USER } from "./constantApi";

 const Put = async (dataItem,eff) => {
    eff ?( dataItem.count!==1&& dataItem.count--) :  dataItem.count++ 
    const response =  await fetch(API_URL + PATH_USER + `/${dataItem.id}`, {
           method: "PUT",
           headers: { "Content-Type": "application/json" },
           body: JSON.stringify({ 
            ...dataItem
           })
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
  .then(res=> res.json())
  .then((resole) => resole)
  .catch((err) => console.log(err.message));

  return repose
}
 const Delete= async (id)=>{
    const response=  await fetch(API_URL + PATH_USER + `/${id}`, {
    method: "DELETE",
  })
  return response
 }
 const APImethod ={Put,Post,Get,Delete}
 export default APImethod