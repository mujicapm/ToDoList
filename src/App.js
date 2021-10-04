import React, {useReducer} from 'react'
import UserBar from './User/UserBar'
import CreateToDoItem from './ToDos/CreateToDoItem'
import ToDoList from './ToDos/ToDoList'


function App() {

    const initialToDoItems = [
        {
            title: "Task 1",
            description: "Some text",
            dateCreated: "5/10/2021"
        },
        {
            title: "Task 2",
            description: "Some text",
            dateCreated: "6/10/2021"
        },
        {
            title: "Task 3",
            description: "Some text",
            dateCreated: "8/8/2021"
        },
    ]

    function userReducer (state, action) {
        switch (action.type) {
            case 'LOGIN':
            case 'REGISTER':
                return action.username
            case 'LOGOUT':
                return ''
            default:
                return state;
        }
    }

    function toDoReducer (state, action) {
        switch (action.type) {
            case 'CREATE_TODO':
                const newPost = {
                    title: action.title,
                    description: action.description,
                    dateCreated: action.dateCreated
                }
                return [ newPost, ...state ]
            // case 'TOGGLE_TODO':
            //     return action.username
            // case 'DELETE_TODO':
            //     return ''
            default:
                return state;
        }
    }

    const [ user, dispatchUser ] = useReducer(userReducer, '')
    const [ ToDoItems, dispatchToDo ] = useReducer(toDoReducer, initialToDoItems)

    return (
        <div>
            <UserBar user={user} dispatchUser={dispatchUser}/>
            <br/><br/><hr/><br/>
            {user && <CreateToDoItem ToDoItems={ToDoItems} dispatchToDo={dispatchToDo}/>}
            <ToDoList ToDoItems={ToDoItems}/>
        </div>
    )
}

export default App;
