import React, {useState} from 'react'
import {intlFormat} from 'date-fns'

export default function CreatePost ({ToDoItems, setToDoItems}) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [dateCreated, setDateCreated] = useState('')

    function handleTitle(evt) {setTitle(evt.target.value)}
    function handleDescription(evt) {setDescription(evt.target.value)}
    function handleDateCreated() {
        const tmpDate = intlFormat(Date.now(),{
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
        })
        setDateCreated(tmpDate)
    }

    function handleCreate() {
        const newToDoItem = {title, description, dateCreated}
        setToDoItems([newToDoItem, ...ToDoItems])
    }

    return (
        <form onSubmit={e => {
            e.preventDefault();
            handleCreate();
        }}>
            <div>
                <label htmlFor="create-title">Title:</label>
                <input type="text" value={title} onChange={handleTitle} name="create-title" id="create-title" />
            </div>
            <div>
                <label htmlFor="create-description">Description:</label>
                <input type="textarea" value={description} onChange={handleDescription} name="create-description" id="create-description" rows="5" cols="33"/>
            </div>
            <input type="submit" value="Create" onClick={handleDateCreated}/>
        </form>
    )
}
