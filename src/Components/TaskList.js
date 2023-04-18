import { useContext } from 'react';
import TaskContext from '../Contexts/TaskContext';
function TaskList() {
  const { tasks, handleDeleteTask } = useContext(TaskContext);
      const deleteTask=(index)=>{
        handleDeleteTask(index);
    }
    return (
        <div className='flex items-center justify-center h-screen'>
      <div >
          {tasks.map((task,index) =>

              <div key={index} className='bg-gray-100 m-5 flex flex-row justify-around w-[20rem] items-center'>
                <div>{task}</div>
              <button onClick={()=>deleteTask(index)} className='bg-red-500 hover:bg-red-400 p-2 m-2 px-3 rounded text-white font-bold'>X</button>
              </div>

          
          )}
      </div>
        </div>

    );
}

export default TaskList