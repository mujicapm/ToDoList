import React, {useState} from 'react'
import {useRef} from 'react'

export default function CreatePost ({ToDoItems, setToDoItems}) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const createTimeStamp = useRef(null);

    function handleTitle(evt) {setTitle(evt.target.value)}
    function handleDescription(evt) {setDescription(evt.target.value)}

    function handleCreate() {
        const newToDoItem = {title, description, createTimeStamp}
        setToDoItems([newToDoItem, ...ToDoItems])
    }

    return (
        <form onSubmit={e => {
            e.preventDefault();
            createTimeStamp.current = Date.now();
            handleCreate()
        }}>
            <div>
                <label htmlFor="create-title">Title:</label>
                <input type="text" value={title} onChange={handleTitle} name="create-title" id="create-title" />
            </div>
            <div>
                <label htmlFor="create-description">Description:</label>
                <input type="textarea" value={description} onChange={handleDescription} name="create-description" id="create-description" rows="5" cols="33"/>
            </div>
            <input ref = {createTimeStamp} type="hidden" name="create-timestamp" id="create-timestamp"/>
            <input type="submit" value="Create" />
        </form>
    )
}
