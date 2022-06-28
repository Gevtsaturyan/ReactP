import { combineReducers } from "redux";
//sranov menq miacnum enq bolor redusernery mer komponentnerin
import { likesReduser } from "./about/reduser";




const rootReduser=combineReducers({ //stexel grelu enq bolor redusernery
    likes:likesReduser,
    text:likesReduser,
    comments:likesReduser,
    likesReduser

})
export default rootReduser