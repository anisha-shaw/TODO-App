import { useEffect, useState } from "react"
import CreateTask from "./components/CreateTask"
import ListTasks from "./components/ListTasks"
import { Toaster } from 'react-hot-toast';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem('tasks')))
  }, [])

  return (
    <DndProvider backend={HTML5Backend}>
      <Toaster />
      <div className="w-screen h-screen bg-slate-200 flex flex-col items-center gap-16 pt-32">
        <CreateTask tasks={tasks} setTasks={setTasks} />
        <ListTasks tasks={tasks} setTasks={setTasks} />
      </div>
    </DndProvider>

  )
}
export default App
