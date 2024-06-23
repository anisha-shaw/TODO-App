import { useEffect, useState } from "react"

import Section from "./Section"


const ListTasks = ({ tasks, setTasks }) => {
    const [todos, setTodos] = useState([])
    const [isProgress, setIsProgress] = useState([])
    const [closed, setClosed] = useState([])

    useEffect(() => {
        const fTodos = tasks.filter(task => task.status === 'todo');
        const fInprogress = tasks.filter(task => task.status === 'inprogress');
        const fClosed = tasks.filter(task => task.status === 'closed');

        setTodos(fTodos);
        setIsProgress(fInprogress)
        setClosed(fClosed)

    }, [tasks])

    const statuses = ['todo', 'inprogress', 'closed']

    return (
        <div className="flex gap-16">
            {statuses.map((status, index) =>
                <Section
                    key={index}
                    status={status}
                    tasks={tasks}
                    setTasks={setTasks}
                    todos={todos}
                    isProgress={isProgress}
                    closed={closed}
                />
            )}
        </div>
    )
}

export default ListTasks
