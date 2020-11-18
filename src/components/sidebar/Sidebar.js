import React from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { FcCalendar } from 'react-icons/fc'
import { JournalEntries } from '../journal/JournalEntries'
export const Sidebar = () => {
    return (
        <div className="journal__sidebar">
            <div className="journal__sidebar-nav">
                <div className="journal__username_btn">
                <h3 className="journal__username">
                <span className="journal__icon"><FaUserAlt /></span>
                    Hola Ian</h3>
                <button className="btn btn-sidebar-logout">Logout</button>
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
