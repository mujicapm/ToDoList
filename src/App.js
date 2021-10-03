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
    return (
        <div>
            <UserBar/>
            <br/><br/><hr/><br/>
            <CreateToDoItem/>
            <ToDoList ToDoItems={initialToDoItems}/>
        </div>
    )
}

export default App;



// import React, {useState} from 'react'
// import UserBar from './User/UserBar'
// import CreateToDoItem from './ToDos/CreateToDoItem'
// import ToDoList from './ToDos/ToDoList'
//
//
// function App() {
//
//     const [user, setUser] = useState('');
//
//     const initialToDoItems = [
//         {
//             title: "Task 1",
//             description: "Some text",
//             dateCreated: "5/10/2021"
//         },
//         {
//             title: "Task 2",
//             description: "Some text",
//             dateCreated: "6/10/2021"
//         },
//         {
//             title: "Task 3",
//             description: "Some text",
//             dateCreated: "8/8/2021"
//         },
//     ]
//
//     const [ToDoItems, setToDoItems] = useState({initialToDoItems});
//
//     return (
//       <div>
//         <UserBar user={user} setUser={setUser}/>
//           <br/><br/><hr/><br/>
//           <CreateToDoItem/>
//           {/*{user && <CreateToDoItem ToDoItems={ToDoItems} setToDoItems={setToDoItems}/>}*/}
//           <ToDoList ToDoItems={ToDoItems}/>
//       </div>
//   )
// }
//
// export default App;
