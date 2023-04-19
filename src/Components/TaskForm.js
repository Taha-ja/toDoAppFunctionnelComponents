import { useState, useContext, useRef } from "react";
import TaskContext from "../Contexts/TaskContext";
function TaskForm() {
  const [task, setTask] = useState("");
  const inputRef = useRef(null);
  const { handleAddTask } = useContext(TaskContext);
  const handleChange = (event) => {
    setTask(event.target.value);
  };
  const todo={
    "Name":task,
  }
  const addTask = (event) => {
    event.preventDefault();
    handleAddTask(todo);
    setTask("");
    inputRef.current.focus(); // Focus the input after adding a task
  };
  return (
    <div className='flex items-center justify-center'>
      <input className='bg-gray-100 m-5 flex flex-row justify-around w-[20rem] items-center p-2 pl-5'
              placeholder="enter a task" 
              value={task} 
              onChange={handleChange}
              ref={inputRef} // Reference the input element
              />
      <button onClick={addTask} className='bg-green-500 hover:bg-green-400 p-2 m-2 px-3 rounded text-white font-bold'>Ajouter</button>
    </div>
  );
}

export default TaskForm;
