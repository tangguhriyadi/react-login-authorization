const UpdateReducer = (state = 0, action) => {
    switch(action.type){
        case 'DELETE':
            return state = state + 1
        case 'EDIT':
            return state = state + 1
        default: return state
    }
}
export default UpdateReducer