/* eslint-disable react/prop-types */
import { FaCheck, FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";

const ButtonBlock = ({ todo, handleMarkDone }) => {
  return (
    <div className="buttonBlock">
      <button id={todo.id} className="done" onClick={handleMarkDone}>
        <FaCheck />
      </button>
      <button className="edit">
        <FaPencilAlt />
      </button>
      <button className="delete">
        <FaRegTrashAlt />
      </button>
    </div>
  );
};

export default ButtonBlock;
