export const CHANGE_STATE="Change/State";
export const CHANGE_STATE_PRODUCT="Change/State-totalProduct";
export const CHANGE_STATE_BILL ="Change/State-totalBill";
export const CHANGE_STATE_COUNTCART="Change/State-countCart";
export const CHANGE_STATE_RENDER="Change/State-render";
export const CHANGE_TODO_DATA_USER ="Change/Todo-user";






const Initval = {
    state: {
        totalProduct : 0,
        totalBill : 0,
        countCart : 0,
        render : true,
    },
    todosList : {
        dataProduct :[],
        dataUser : []
    }
}

const Reducer = (state = Initval, action)=>{
    switch (action.type) {
        case "Change/State":
            return {
                ...state, state: {
                    ...state.state, totalProduct: action.payload.totalProduct,totalBill : action.payload.totalBill, countCart : action.payload.countCart
                }

            }
        case "Change/State-totalProduct":
            return {
                ...state, state: {
                    ...state.state, totalProduct: action.payload
                }

            }
        case "Change/State-totalBill":
            return {
                ...state, state: {
                    ...state.state, totalBill: action.payload
                }

            }
        case "Change/State-countCart":
            return {
                ...state, state: {
                    ...state.state, countCart: action.payload
                }

            }          
        case "Change/State-render":
            return {
                ...state, state: {
                    ...state.state, render: !state.state.render
                }

            }          
        case "Change/Todo-user":
            return {
                ...state, todosList: {
                    ...state.todosList, dataUser:  action.payload  
                }
                             

            }          
    
        default:
         return{
            ...state
         }
    }

}

export const changeAction =(type,data)=>{
   return { 
     type: type,
     payload: data
   }
    
}


export default Reducer;