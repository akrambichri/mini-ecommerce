import { combineReducers } from "redux"
import resourcesReducer from "./resource"
import cartReducer from "./cart"
import authReducer from "./auth"
export default combineReducers({
    resources: resourcesReducer,
    auth: authReducer,
    cart: cartReducer
})