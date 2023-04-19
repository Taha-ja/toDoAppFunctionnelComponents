import { useContext } from "react";
import TaskContext from "../Contexts/TaskContext";
function TaskList() {
  const { todos, handleDeleteTask } = useContext(TaskContext);
  const deleteTask = (id) => {
    handleDeleteTask(id);
  };
  return (
    <div className="flex items-center justify-center ">
      <div>
        {todos.map((todo, index) => (
          <div
            key={index}
            className="bg-gray-100 m-5 flex flex-row justify-between w-[20rem] items-center px-5"
          >
            <div>{todo.Name}</div>
            <button
              onClick={() => deleteTask(todo.id)}
              className="bg-red-500 hover:bg-red-400 p-2 m-2 px-3 rounded text-white font-bold"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
