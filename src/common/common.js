import CHANGE from "../Redux/Constant";
import { changeAction } from "../Redux/Reducer/Reducer";
import store from "../Redux/Store/Store";


export default function makeId(length) {
    let result           = '';
    let characters       = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm-0123456789-';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
  charactersLength));
   }
   return result;
  }

  export const Sort = (data,value)=> 
    [...data].sort((a, b) => {
      switch (value) {
        case "nameUp":
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;

        case "nameDown":
          if (a.name > b.name) {
            return -1;
          }
          if (a.name < b.name) {
            return 1;
          }
          return 0;

        case "priceUp":
          return a.price - b.price;

        case "priceDown":
          return b.price - a.price;

        default:
         return false
      }
    });
export const runDispatch = (data) => {
      store.dispatch(
        changeAction(CHANGE.STATE_PRODUCT_BILL, {
          totalBill: data.reduce((e, a) => e + a.price * a.count, 0),
          countCart: data.reduce((a, e) => a + e.count, 0),
          dataUser: data,
        })
      );
      store.dispatch(changeAction(CHANGE.STATE_RENDER));
    };
  
  