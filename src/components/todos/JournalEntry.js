import React from 'react'
import moment from 'moment'
import { activeTodo } from '../../actions/todo'
import { useDispatch} from 'react-redux'

export const JournalEntry = ({id, date, body, title}) => {
    const todoDate = moment(date)
    const dispatch = useDispatch()

    const handleTodoActive = () =>{
        dispatch(activeTodo (id,{
            date,
            body,
            title
        }))
    }
    return (
        <div className="journal__entry" onClick={handleTodoActive}>
            
            <div className="journal__entry-body">
                <p className="journal__entry-title">{title}</p>
                <p className="journal__entry-content">
                   {body}
                </p>
            </div>
            <div className="journal__entry-date">
                <span>{todoDate.format("MMM Do YY")}</span>
               
            </div>
        </div>
    )
}
