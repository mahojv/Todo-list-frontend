import { useEffect, useState } from 'react'
import TaskItem from './TaskItem'
import ShowError from './ShowError'



export default function TaskList(status) {



  const [tasks, setTasks] = useState([])
  const [error, setError] = useState("")

  async function getTasks() {

    try {
      const url = `http://localhost:3000/tasks`

      const response = await fetch(url, { method: "GET" })
      const data = await response.json()

      setTasks(data)

    } catch (error) {

      setError(error.message)

    }
  }

  useEffect(() => {
    getTasks()

  }, [status])

  return (

    <>
      <ul className="px-8 py-4" id="taskList">
        {
          tasks.map((task) => {

            return (


              <TaskItem
                task={task}
                key={task.id}
              />
            )
          })
        }



      </ul>

      {
        error !== "" &&

        <ShowError
          message={error}
          setError={setError}
        />
      }

    </>

  )
}
