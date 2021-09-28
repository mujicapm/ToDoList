import React from 'react'
import ToDoItem from './ToDoItem'

export default function ToDoList ({ToDoItems = []}) {
    return (
        <div>
            {ToDoItems.map((p, i) => <ToDoItem {...p} key={'ToDoItem-' + i} />)}
        </div>
    )
}