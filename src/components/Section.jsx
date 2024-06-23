import { useDrop } from "react-dnd"
import Header from "./Header"
import Task from "./Task"
import toast from "react-hot-toast"


const Section = ({ status, tasks, setTasks, todos, isProgress, closed }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'task',
    drop: (item)=> addItemToSection(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  }))


  let text = 'todo'
  let bg = 'bg-blue-500'
  let taskToMap = todos

  if (status === 'inprogress') {
    text = 'In Progress'
    bg = 'bg-purple-500'
    taskToMap = isProgress
  }

  if (status === 'closed') {
    text = 'Closed'
    bg = 'bg-green-500'
    taskToMap = closed
  }

  const addItemToSection = (id)=>{
    setTasks((prev)=>{
      const mTasks = prev.map(t =>{
        if(t.id === id){
          return {...t, status: status}
        }
        return t;
      })

      localStorage.setItem('tasks', JSON.stringify(mTasks))
      toast('Task status changed', {icon: '😃'})

      return mTasks;
    })
  }

  return (
    <div ref={drop} className={`w-64 rounded-md p-2 ${isOver ? 'bg-slate-300' : ''}`}>
      <Header
        text={text}
        bg={bg}
        count={taskToMap.length}

      />
      {taskToMap.length > 0 &&
        taskToMap.map(task => <Task
          key={task.id}
          task={task}
          tasks={tasks}
          setTasks={setTasks}

        />)
      }
    </div>
  )
}

export default Section
