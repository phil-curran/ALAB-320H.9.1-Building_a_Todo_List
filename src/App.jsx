/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
import { useState, useReducer } from "react";

// components
import Header from "./components/Header";
import TaskList from "./components/TaskList";

const ACTIONS = {
  ADD: "add",
  EDIT: "edit",
  DELETE: "delete",
  DONE: "done",
};

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  function reducer(todos, action) {
    switch (action.type) {
      case ACTIONS.ADD:
        return [action.payload, ...todos];
      case ACTIONS.EDIT:
        return [...todos, action.payload];
      case ACTIONS.DELETE:
        return [...todos, action.payload];
      case ACTIONS.DONE:
        return todos.map((todo) =>
          todo.id === action.payload ? { ...todo, complete: true } : todo
        );
      default:
        return todos;
    }
  }

  function addTask(task) {
    dispatch({ type: ACTIONS.ADD, payload: task });
  }

  function editTask(id) {
    dispatch({ type: ACTIONS.EDIT, payload: id });
  }

  function deleteTask(id) {
    dispatch({ type: ACTIONS.DELETE, payload: id });
  }

  function markTaskDone(id) {
    console.log("todos: ", todos);
    dispatch({ type: ACTIONS.DONE, payload: id });
  }

  function newTodo(name) {
    return {
      id: Date.now(),
      name: name,
      complete: false,
    };
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = newTodo(name);
    dispatch({ type: ACTIONS.ADD, payload: newTask });
    setName("");
  }

  return (
    <div className="app">
      <Header />
      <div className="container">
        <div className="row">
          <form onSubmit={handleSubmit}>
            <div className="ten columns">
              <label>Task:</label>
              <input
                className="u-full-width"
                type="text"
                placeholder="Add an item here"
                id="taskInput"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="two columns">
              <input className="button-primary u-full-width" type="submit" />
            </div>
          </form>
        </div>
        <hr />
        <TaskList todos={todos} handleMarkDone={markTaskDone} />
      </div>
    </div>
  );
}

export default App;
