import {types} from '../types/types'

const initialState = {
    todos: [],
    activetoDo: null
}

export const toDoReducer = (state = initialState, action) => {
    const {type, payload } = action
    switch(type) {
        case types.todoActive:
            return{
                ...state,
                activetoDo:{
                    ...payload
                }
            }
        case types.todoLoaded:
            
            return {
                ...state,
                todos: [...payload]
            }
          
    
        default:
            return state
    }
}
