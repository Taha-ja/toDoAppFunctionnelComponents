
// import TaskList from './Components/TaskList';
// import TaskForm from './Components/TaskForm';
// import NavBar from './Components/NavBar';
// import TaskContext from './Contexts/TaskContext';
// import { Routes, Route } from 'react-router-dom';
// import './App.css';
// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from "react-redux";
// import { GetTodosAction, PostTodoAction, DeleteTodoAction} from './Redux/actions';
// function App() {
//   const dispatch = useDispatch();
//   const EtatStorTodo = useSelector((states) => states.todosList);
//   const { todos } = EtatStorTodo;
//   useEffect(() => {
//       dispatch(GetTodosAction());
//   },[dispatch])
//   const handleAddTask = (todo) => {
//     dispatch(PostTodoAction(todo));
//   };
//   const handleDeleteTask = (id) => {
//     dispatch(DeleteTodoAction(id));
//   };
//   const taskContextValue = {
//     todos,
//     handleAddTask,
//     handleDeleteTask
//   };

//   return (
//     <TaskContext.Provider value={taskContextValue}>
//       <div>

//     <NavBar/>
//     <Routes>
//         <Route path="/taskList" element={<TaskList />} />
//         <Route path="/taskForm" element={<TaskForm />} />
//     </Routes>
//       </div>
//     </TaskContext.Provider>
//   );
// }

// export default App;


import TaskList from './Components/TaskList';
import TaskForm from './Components/TaskForm';
import TaskContext from './Contexts/TaskContext';
import './App.css';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { GetTodosAction, PostTodoAction, DeleteTodoAction} from './Redux/actions';
function App() {
  const dispatch = useDispatch();
  const EtatStorTodo = useSelector((states) => states.todosList);
  const { todos } = EtatStorTodo;
  useEffect(() => {
      dispatch(GetTodosAction());
  },[dispatch])
  const handleAddTask = (todo) => {
    dispatch(PostTodoAction(todo));
  };
  const handleDeleteTask = (id) => {
    dispatch(DeleteTodoAction(id));
  };
  const taskContextValue = {
    todos,
    handleAddTask,
    handleDeleteTask
  };

  return (
    <TaskContext.Provider value={taskContextValue}>
      <div>
        <TaskForm />
        <TaskList />
      </div>
    </TaskContext.Provider>
  );
}

export default App;
