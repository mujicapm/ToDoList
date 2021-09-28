import UserBar from './User/UserBar'
import CreateToDoItem from './ToDos/CreateToDoItem'
import ToDoList from './ToDos/ToDoList'


function App() {
    const ToDoItems = [
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
          <ToDoList ToDoItems={ToDoItems}/>
      </div>
  )
}

export default App;
