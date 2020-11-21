import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry">
            <div className="journal__entry-picture"
            style={{backgroundSize: "cover", backgroundPosition: "center", backgroundImage: "url('https://rosolutions.com.mx/blog/wp-content/uploads/2019/06/1-y6C4nSvy2Woe0m7bWEn4BA.png')"}}>

            </div>
            <div className="journal__entry-body">
                <p className="journal__entry-title">Wtf</p>
                <p className="journal__entry-content">
                    This is the content of our journals
                </p>
            </div>
            <div className="journal__entry-date">
                <span>Monday</span>
                <span>4</span>
            </div>
        </div>
    )
}
