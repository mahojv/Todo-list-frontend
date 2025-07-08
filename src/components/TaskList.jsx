import { useEffect, useState } from 'react'
import TaskItem from './TaskItem'
import ShowError from './ShowError'



export default function TaskList({tasks, setModal, refreshTasks }) {

  return (
    <>
      <ul className="px-3 py-4 " id="taskList">
        {
          tasks.map((task) => {

            return (


              <TaskItem
                task={task}
                key={task.id}
                setModal={setModal}
                refreshTasks={refreshTasks}
              />
            )
          })
        }
      </ul>
      {tasks.length === 0 && <ShowError message="No hay tareas disponibles" />}
    </>
  )
}
