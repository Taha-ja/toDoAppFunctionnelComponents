import { useEffect, useState } from 'react';
import TaskList from './Components/TaskList';
import TaskForm from './Components/TaskForm';
import TaskContext from './Contexts/TaskContext';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks([
      "Task 1",
      "Task 2",
      "Task 3",
      "Task 4",
      "Task 5",
    ]);
  }, []);

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

  const taskContextValue = {
    tasks,
    handleAddTask,
    handleDeleteTask
  };

  return (
    <TaskContext.Provider value={taskContextValue}>
      <div>
        <TaskList />
        <TaskForm />
      </div>
    </TaskContext.Provider>
  );
}

export default App;
