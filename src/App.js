import { useEffect, useState } from 'react';
import TaskList from './Components/TaskList';
import TaskForm from './Components/TaskForm';
import TaskContext from './Contexts/TaskContext';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
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
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const taskContextValue = {
    tasks,
    handleAddTask,
    handleDeleteTask
  };

  return (
    <TaskContext.Provider  value={taskContextValue} >
    <NavBar/>
    <Routes>
        <Route path="/taskList" element={<TaskList />} />
        <Route path="/taskForm" element={<TaskForm />} />
    </Routes>
    </TaskContext.Provider>
  );
}

export default App;
