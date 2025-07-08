import React, { useEffect, useState } from 'react'
import FilterNav from '../components/FilterNav'
import TaskList from '../components/TaskList'
import { Link, Outlet } from 'react-router'

export default function Layout() {
    const [status, setStatus] = useState("")
    const [modal, setModal] = useState(false)
    const [tasks, setTasks] = useState([])

    async function getTasks() {
        try {
            const url = `http://localhost:3000/tasks`
            const response = await fetch(url)
            const data = await response.json()
            setTasks(data)
        } catch (error) {
            console.error("Error fetching tasks:", error)
        }
    }

    useEffect(() => {
        getTasks()
    }, [status])


    return (
        <>
            <div className="w-full flex flex-col min-h-screen h-full bg-gray-200 py-8 px-5 text-[10px] max-w-xl mx-auto ">
                <h1 className="text-center font-mono text-2xl"> TO DO APP</h1>

                {/* <FilterNav
                    status={status}
                    setStatus={setStatus}
                /> */}

                <div className="w-[90%] text-center  items-center px-8 border-b-1 border-gray-400 mx-auto py-4 mt-4" id="newTask">

                    <Link className="shrink-0 bg-blue-500 px-3 py-2 text-xl rounded-md text-center align-middle text-white font cursor-pointer "
                        to="/new-task"
                        onClick={() => setModal(true)}

                    >Agregar Tarea</Link>
                </div>

                <TaskList
                    tasks={tasks}
                    setModal={setModal}
                    refreshTasks={getTasks}
                />
                {modal &&



                    <div className=' w-[90%] h-[300px] bg-white flex justify-center items-center mt-4 fixed bottom-1/3 left-1/2 -translate-x-1/2 rounded-md shadow-lg'>


                        <Outlet
                            context={{ setModal, refreshTasks: getTasks }}
                        />
                    </div>



                }

            </div>



        </>
    )
}
