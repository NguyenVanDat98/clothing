import { API_URL, PATH_LIST_PRODUCT } from "../../serviceApi/constantApi"


export const fetchProductGet =()=>{
    return (dispatch)=>{
        (async ()=>{
            try {
                const response = await fetch(API_URL+PATH_LIST_PRODUCT).then(res=>res.json())
                dispatch(saveProductList(response))
            } catch (error) {
                
            }
        })()
    }
}
export const fetchProductPost =(data)=>{
    return (dispatch)=>{
        (async ()=>{
            try {
                const response = await fetch(API_URL+PATH_LIST_PRODUCT,{
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                }).then(res=> res.json())
                dispatch(AddToListProduct(response))
            } catch (error) {
                
            }
        })()
    }
}
export const fetchProductPut =(id,data)=>{
    return (dispatch)=>{
        (async ()=>{
            try {
              await fetch(API_URL+PATH_LIST_PRODUCT+`/${id}`,{
                    method:"PUT",
                    headers: {
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify(data)
                })

                dispatch(saveProductList(data))
            } catch (error) {
                
            }
        })()
    }
}


export const saveProductList=(product)=>{
    return {
        type: "Save-List-Product",
        payload : product
    }
}

export const AddToListProduct = (param)=>{
    return{
        type : "Add-To-List-Product",
        payload : param,
    }
}
export const AddToCart = (param)=>{
    return{
        type : "Add-To-Cart",
        payload : param,
    }
}
export const saveCart = (param)=>{
    return{
        type : "Save-Cart",
        payload : param,
    }
}