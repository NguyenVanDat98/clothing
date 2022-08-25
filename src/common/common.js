

export default function makeId(length) {
  let result = "";
  let characters =
    "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm-0123456789-";
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export const Sort = (data, value) =>
  [...data].sort((a, b) => {
    switch (value) {
      case "nameUp":
        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
      case "nameDown":
        return a.name > b.name ? -1 : a.name < b.name ? 1 : 0;

      case "priceUp":
        return a.price - b.price;

      case "priceDown":
        return b.price - a.price;

      default:
        return false;
    }
  });

export const selectShop = (state)=>{return state.shop}
export const selectProduct = (state)=>{return state.shop.dataProduct}
export const selectCart = (state)=>{return state.shop.dataUser}