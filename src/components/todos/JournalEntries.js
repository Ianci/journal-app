import React from 'react'
import { JournalEntry } from './JournalEntry'
import { useSelector } from 'react-redux'

export const JournalEntries = () => {

    const todosArray = useSelector(state => state.todos.todos)
 
    return (
        <div className="journal__entries">
            {todosArray.map(todo => (
                <JournalEntry key={todo.id} 
                {...todo}/>
            ))}
        </div>
    )
}
