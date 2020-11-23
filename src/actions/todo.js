import { db } from "../firebase/config"
import { types } from "../types/types"
import { loadTodos } from '../helpers/loadTodos';

//GetState es una función para obtener el state de Redux
export const startNewTodo = () => {
    return async(dispatch, getState) => {
        const uid = getState().auth.uid
        const newTodo = {
            title: "",
            body: "",
            date: new Date().getTime()
        }
        await db.collection(`${uid}/todos/usertodos`).add(newTodo)
        dispatch( activeTodo (uid, newTodo))
    }
}

export const activeTodo = (id, todo)=> {
    return {
        type: types.todoActive,
        payload: {
            id,
            ...todo
        }
    }
}

export const startSetTodos = (uid) => {
    return async(dispatch) =>{
        const todosArray = await loadTodos(uid)
        dispatch(setTodos(todosArray) );
    }
}

export const setTodos = (todos) => {
    return {
        type: types.todoLoaded,
        payload: todos
    }
}