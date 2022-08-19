// export const API_URL= "http://localhost:3300/"
export const API_URL= "https://shop-app-react.herokuapp.com/api/"
export const DATA_1 = "listProducts"
export const DATA_2 = "ProductSelect"


export function makeId(length) {
    let result           = '';
    let characters       = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm-0123456789-';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
  charactersLength));
   }
   return result;
  }
  