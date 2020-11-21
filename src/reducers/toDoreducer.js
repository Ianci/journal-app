import {types} from '../types/types'

const initialState = {
    todos: [],
    activetoDo: null
}

export const toDoReducer = (state = initialState, action) => {
    const {type, payload } = action
    switch(type) {
        case types.logout:
        return {}
    
        default:
            return state
    }
}
