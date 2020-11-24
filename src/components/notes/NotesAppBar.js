import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveTodo } from '../../actions/todo'

export const NotesAppBar = () => {
    const dispatch = useDispatch()
    const {activetoDo} = useSelector(state => state.todos)
   
    const handleUpdateToDo = ()=>{
        dispatch( startSaveTodo( activetoDo) )
    }

    const handlePictureClick = () => {
        document.querySelector('#file_input').click()
    }

    const handleFileChange = e => {
        const file = e.target.files[0]
        if( file ){
            dispatch( )
        }
    }

    return (
        <div className="notes__appbar">
            <span>18 de noviembre del 2020</span>
            <div>
                <input type="file" id="file_input" style={{ display: "none"}}
                name="file"
                onChange={handleFileChange}
                />
                <button className="btn"
                onClick={handleUpdateToDo}>
                    Save
                </button>
                <button className="btn"
                onClick={handlePictureClick}>
                    Save
                </button>
            </div>
        </div>
    )
}
