import DeleteReducer from "./DeleteReducer";
import ModalReducer from "./ModalReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    delete:DeleteReducer,
    modal:ModalReducer
})

export default allReducers