import { Initval } from "../Constant/InitValue";

const Reducer = (state = Initval, action) => {
  switch (action.type) {
    case "Change/State":
      return {
        ...state,
        state: {
          ...state.state,
          totalProduct: action.payload.totalProduct,
          totalBill: action.payload.totalBill,
          countCart: action.payload.countCart,
        },
      };
    case "Change/State-totalProduct":
      return {
        ...state,
        state: {
          ...state.state,
          totalProduct: action.payload,
        },
      };
    case "Change/State-totalProduct-Bill":
      return {
        ...state,
        state: {
          ...state.state,
          countCart: action.payload.countCart,
          totalBill: action.payload.totalBill,
        },
        todosList: { ...state.todosList, dataUser: action.payload.dataUser },
      };
    case "Change/State-totalBill":
      return {
        ...state,
        state: {
          ...state.state,
          totalBill: action.payload,
        },
      };
    case "Change/State-countCart":
      return {
        ...state,
        state: {
          ...state.state,
          countCart: action.payload,
        },
      };
    case "Change/State-render":
      return {
        ...state,
        state: {
          ...state.state,
          render: !state.state.render,
        },
      };
    case "Change/Todo-user":
      return {
        ...state,
        todosList: {
          ...state.todosList,
          dataUser: action.payload,
        },
      };
    case "Change/Todo-Product":
      return {
        ...state,
        todosList: {
          ...state.todosList,
          dataProduct: action.payload,
        },
      };

    default:
      return {
        ...state,
      };
  }
};

export const changeAction = (type, data) => {
  return {
    type: type,
    payload: data,
  };
};
export default Reducer;
