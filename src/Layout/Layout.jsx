import React, { useState } from 'react'
import FilterNav from '../components/FilterNav'
import TaskList from '../components/TaskList'
import { Link, Outlet } from 'react-router'

export default function Layout() {
    const [status, setStatus] = useState("")
        const[modal, setModal] = useState(false)


    return (
        <>
            <div className="w-full h-full bg-gray-200 py-8 text-[10px] max-w-xl mx-auto ">
                <h1 className="text-center font-mono text-2xl"> TO DO APP</h1>

                <FilterNav
                    status={status}
                    setStatus={setStatus}
                />

                <div className="w-full px-8 py-4 flex gap-4" id="newTask">
                    <input type="text" name="" id="" className=" border border-blue-500 h-7 w-full rounded-md shadow-lg px-2" />
                    <Link className="shrink-0 bg-blue-500 px-2 rounded-md text-white font cursor-pointer "
                        to="/new-task"
                        onClick={() => setModal(true)}

                    >Agregar Tarea</Link>
                </div>

                <TaskList
                    status={status}
                />
                {modal &&
                    <div className=' w-[70%] h-[300px] bg-white flex justify-center items-center mt-4 fixed bottom-1/3 left-1/2 -translate-x-1/2 rounded-md shadow-lg'>

                        <Outlet
                        context={{ setModal }}
                        />
                    </div>

                }

            </div>



        </>
    )
}
