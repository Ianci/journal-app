import React from 'react'
import { useSelector } from 'react-redux'
import { NoteScreen } from '../notes/NoteScreen'
import { Sidebar } from '../sidebar/Sidebar'
import { NothingSelected } from './NothingSelected'

export const JournalScreen = () => {
    const reduxState = useSelector(state => state.todos)
    const { todos } = reduxState
  
    return (
        <div className="journal__main-container">
           
            <Sidebar />
            <main>
                { todos.length === 0
                ?
                <NothingSelected />
                :
                <NoteScreen />
                }
            </main>
        </div>
    )
}

