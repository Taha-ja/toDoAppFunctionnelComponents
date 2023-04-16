import { useContext } from 'react';
import TaskContext from '../Contexts/TaskContext';
function TaskList() {
  const { tasks, handleDeleteTask } = useContext(TaskContext);
      const deleteTask=(index)=>{
        handleDeleteTask(index);
    }
    return (
        <div>
      <div>
          {tasks.map((task,index) =>

              <div key={index}>
                {task}
              <button onClick={()=>deleteTask(index)}>supprimer</button></div>

          
          )}
      </div>
        </div>

    );
}

export default TaskList