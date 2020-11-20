import React from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { FcCalendar } from 'react-icons/fc'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { startLogOut } from '../../actions/auth'
import { JournalEntries } from '../journal/JournalEntries'

export const Sidebar = () => {
    const dispatch = useDispatch()
    const history = useHistory()


    const logOutFunction = ()=>{
        dispatch(startLogOut())
        history.push('./auth/login')
    }
    const reduxState = useSelector(state => state)
    const { auth: {name}} = reduxState
    console.log(name)
    return (
        <div className="journal__sidebar">
            <div className="journal__sidebar-nav">
                <div className="journal__username_btn">
                <h3 className="journal__username">
                <span className="journal__icon"><FaUserAlt /></span>
                    Hola {name}</h3>
                <button className="btn btn-sidebar-logout" onClick={logOutFunction}>Logout</button>
                </div>
            </div>
            <div className="journal__new-entry">
                <FcCalendar />
                <p>New entry</p>
            </div>
            <JournalEntries />
        </div>
    )
}
