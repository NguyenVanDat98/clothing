import { Initval } from "../constant/InitValue";

const productReducer = (state = Initval, action) => {
  switch (action.type) {
    case  "Add-To-Cart" :
      const Cart = [...state.dataUser, action.payload];
    return{
      ...state,
      dataUser:Cart,
    };
    case  "Add-To-List-Product" :
      const ProductList = [...state.dataProduct, action.payload];
    return{
      ...state,
      dataProduct: ProductList,
    };
    case  "Save-List-Product" :     
    return{
      ...state,
      dataProduct: action.payload,
    };
    case  "Save-Cart" :
  
    return{
      ...state,
      dataUser: action.payload,
    };

    default:
      return {
        ...state,
      };
  }
};

export default productReducer;
