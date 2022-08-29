import UpdateReducer from "./UpdateReducer";
import EditReducer from "./EditReducer";

import { combineReducers } from "redux";

const allReducers = combineReducers({
    update:UpdateReducer,
    edit:EditReducer,

})

export default allReducers