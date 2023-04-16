import React from 'react';

const TaskContext = React.createContext({
  tasks: [],
  addTask: () => {},
  deleteTask: () => {}
});

export default TaskContext;
