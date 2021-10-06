import React from "react";
import ToDoItem from "./ToDoItem";

export default function ToDoList({ ToDoItems = [], dispatchToDo }) {
  return (
    <div>
      {ToDoItems.map((p, i) => (
        <ToDoItem {...p} key={"ToDoItem-" + i} dispatchToDo={dispatchToDo} />
      ))}
    </div>
  );
}
