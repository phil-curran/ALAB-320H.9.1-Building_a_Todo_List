/* eslint-disable react/prop-types */
import ButtonBlock from "./ButtonBlock";

const TaskList = ({ todos, handleMarkDone }) => {
  return (
    <div className="todos">
      <h2>ToDo Items</h2>
      {todos.length > 0 ? (
        <ul>
          {todos.map((todo, index) => (
            <li className="todo-item" key={index}>
              <div className="item">
                <div>
                  #{index + 1}: {todo.name}
                  <p>completed: {todo.complete}</p>
                </div>
                <div>
                  {" "}
                  <ButtonBlock
                    todo={todo}
                    handleMarkDone={() => handleMarkDone(todo.id)}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks to display</p>
      )}
    </div>
  );
};

export default TaskList;
