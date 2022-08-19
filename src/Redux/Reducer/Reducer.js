const Initval = {
    state: {
        totalProduct : 0,
        totalBill : 0,
        countCart : 0,
        render : true,
    },
    todosList : [

    ]
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
                    ...state.state, totalProduct: action.totalProduct
                }

            }
        case "Change/State-totalBill":
            return {
                ...state, state: {
                    ...state.state, totalBill: action.totalBill
                }

            }
        case "Change/State-countCart":
            return {
                ...state, state: {
                    ...state.state, countCart: action.countCart
                }

            }          
        case "Change/State-render":
            return {
                ...state, state: {
                    ...state.state, render: !state.state.render
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