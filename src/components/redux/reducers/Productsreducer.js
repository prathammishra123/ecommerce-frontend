const products = [];

export const getProductsReducers = (state = {products},action)=>{
    switch(action.type){
        case "SUCCESS_GET_PRODUCTS":
            console.log("yes")
            return {products:action.payload} 
        case "FAIL_GET_PRODUCTS":
            console.log("noo")
            return {error:action.payload}
        default : return state
    }
}