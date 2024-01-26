import { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItems from "./components/TodoItems";
import { TodoProvider } from "./contexts/TodoContext";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  };

  const completeTodo = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, complete: !prevTodo.complete }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, completeTodo }}
    >
      <div className="bg-dark" style={{ height: "100vh" }}>
        <div className="container">
          <div className="row">
            <div className="d-flex flex-column justify-content-center align-items-center mt-5">
              <h2 className="text-light">Manage your todos</h2>
              {/* Todo form component goes here */}
              <TodoForm />

              {/* Todo items component goes here */}
              {todos.map((todo) => (
                <div
                  key={todo.id}
                  className={`col-12 col-sm-7 col-md-7 col-lg-7 py-2 rounded mt-2 d-flex align-items-center gap-2 px-2 ${
                    todo.complete
                      ? "bg-success-subtle text-decoration-line-through"
                      : "bg-danger-subtle"
                  }`}
                >
                  <TodoItems todo={todo} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
