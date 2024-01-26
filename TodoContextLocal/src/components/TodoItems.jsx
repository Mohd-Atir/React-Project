import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPenToSquare, faTrashCan, faFile} from '@fortawesome/free-solid-svg-icons'
import { useTodo } from "../contexts/TodoContext";

function TodoItems({todo}) {
const {updateTodo, deleteTodo, completeTodo} = useTodo()
const [isTodoEditable, setIsTodoeditable] = useState(false)
const [todoMsg, setTodoMsg] = useState(todo.todo)

const editTodo = () => {
  updateTodo(todo.id, {...todo, todo: todoMsg})
  setIsTodoeditable(false)
}
const completedTodo = () => {
  completeTodo(todo.id)
}
  return (
    <>
        <input type="checkbox" className="form-check-input" checked={todo.complete} disabled={isTodoEditable} onChange={completedTodo} />
        <input type="text" className={`form-control ${!isTodoEditable ? "bg-transparent border-0" : "form-control"}`} value={todoMsg} onChange={(e) => setTodoMsg(e.target.value)} readOnly={!isTodoEditable}/>
        <button className="btn bg-light text-warning bg-dark" onClick={() => {
          if(todo.complete) return
          if(isTodoEditable){
            editTodo();
          }else{
            setIsTodoeditable((prev) => !prev)
          }
        }} disabled={todo.complete}>
          
          {isTodoEditable ? <FontAwesomeIcon icon={faFile} /> : <FontAwesomeIcon icon={faPenToSquare} />}
         
        </button>

        <button className="btn bg-light text-danger bg-dark" onClick={() => deleteTodo(todo.id)}>
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
    </>
  );
}

export default TodoItems;
