// created to compile all reducers ie.combine all of them to onemptied.apply
import { getProductsReducers } from "./Productsreducer";

import {combineReducers} from "redux";

const rootreducers = combineReducers({
    getproductsdata : getProductsReducers
});

export default rootreducers;