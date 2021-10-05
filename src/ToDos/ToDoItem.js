import React from 'react'

export default function ToDoItem ({ UUID, title, description, dateCreated, isComplete, dateComplete, dispatchToDo}) {

    return (
        <div>
            <h3>{title}</h3>
            <div>{description}</div>
            <div>{dateCreated}</div>
            <div>
                <label htmlFor="item-complete">Complete:</label>
                <input type="checkbox" name="item-complete" id="item-complete" value="0" checked={isComplete} onChange={e => {dispatchToDo({type: 'TOGGLE_TODO', UUID, title, description, dateCreated, isComplete, dateComplete});}}/>
            </div>
            <div>
                <label htmlFor="item-completeTimeStamp">Date Completed:</label>
                <input type="text" name="item-completeTimeStamp" id="create-completeTimeStamp" value={dateComplete} readOnly/>
            </div>
        </div>
    )
}