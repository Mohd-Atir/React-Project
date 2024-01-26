import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const {addTodo} = useTodo()
  const add = (e) => {
    e.preventDefault()
    if(!todo) return
    addTodo({todo, complete: false})
    setTodo("");
  }
  return (
    <div className="col-12 col-sm-7 col-md-7 col-lg-7 my-2">
      <div class="input-group">
        <input type="text" class="form-control" value={todo} placeholder="Write todo..." onChange={(e) => setTodo(e.target.value)} />
        <button class="btn btn-primary" type="button" onClick={add}>
          Add Task
        </button>
      </div>
    </div>
  );
}

export default TodoForm;
