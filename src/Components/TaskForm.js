import { useState, useContext, useRef } from "react";
import TaskContext from "../Contexts/TaskContext";
import { useNavigate } from 'react-router-dom';
function TaskForm() {
  const [task, setTask] = useState("");
  const inputRef = useRef(null);
  const { handleAddTask } = useContext(TaskContext);
  const navigate = useNavigate();
  const handleChange = (event) => {
    setTask(event.target.value);
  };
  const addTask = (event) => {
    event.preventDefault();
    handleAddTask(task);
    setTask("");
    inputRef.current.focus(); // Focus the input after adding a task
    navigate('/taskList')
  };
  return (
    <div className="form">
      <input 
              placeholder="enter a task" 
              value={task} 
              onChange={handleChange}
              ref={inputRef} // Reference the input element
              />
      <button onClick={addTask}>Ajouter</button>
    </div>
  );
}

export default TaskForm;
