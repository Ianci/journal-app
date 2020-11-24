import React, {useEffect, useRef} from 'react'
import { NotesAppBar } from './NotesAppBar'
import { useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import  { useDispatch } from 'react-redux'
import { activeTodo } from '../../actions/todo'
export const NoteScreen = () => {

    const dispatch = useDispatch()
    const {activetoDo: todo} = useSelector(state => state.todos)
    const { state, handleChange, reset} = useForm(todo)
    
    console.log(state.body)
    
    const activeId = useRef(todo.id)

    useEffect(() => {
        if(todo.id !== activeId.current){
            reset(todo);
            activeId.current = todo.id
        }
    }, [todo, reset])
    
    useEffect(() => {
        dispatch( activeTodo( state.id, {...state}))
    }, [state, dispatch])

    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">

                <input type="text" placeholder="Some awesome text" className="notes__title-input"
                autoComplete="off"
                onChange={handleChange} 
                
                name="title"
                />
                <textarea name="" className="notes__textarea"
                onChange={handleChange} 
                name="body"
                
                ></textarea>

            </div>
        </div>
    )
}

