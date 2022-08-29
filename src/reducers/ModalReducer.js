const ModalReducer = (state = {showCreate : false, showEdit: false}, action) => {
    switch(action.type){
        case 'CREATE':
            return state = {...state, showCreate:true}
        case 'EDIT':
            return state = {...state, showEdit: true}
        default: return state
    }
}
export default ModalReducer