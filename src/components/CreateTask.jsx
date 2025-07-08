import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useOutletContext } from 'react-router'

export default function CreateTask() {
    const { setModal, refreshTasks } = useOutletContext(); 
    const navigate = useNavigate()

    const { register, handleSubmit, reset } = useForm({ defaultValues: { titulo: "", descripcion: "" } })

    const onSubmit = async (request) => {
        try {
            const url = `http://localhost:3000/tasks`
            const response = await fetch(url, {
                method: "POST"
                ,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(request)
            })
            const data = await response.json()
            console.log(response.status)
            if (response.status === 200 || response.status === 201) {
                alert("Tarea creada con éxito")  
                reset()
                setModal(false)
                refreshTasks()
                navigate("/")

            }
        } catch (error) {
            console.error("Error creating task:", error)
        }
    }

    function handleClose() {
        setModal(false)
        reset()
        navigate("/")
    }



    return (

        <div className='relative top-0 left-0 w-full h-full bg-gray-200 flex justify-center items-center'>
            <button className='absolute top-0 right-0 m-4' onClick={() => handleClose()}>
                <svg className="w-6 h-6 text-gray-800  relative" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </button>

        <form className="w-full h-full flex flex-col justify-center items-center gap-4" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-2xl font-bold">Create New Task</h2>
            <input
                type="text"
                placeholder="Escriba el titulo de la tarea"
                {...register("titulo", { required: true })}
                className="border border-blue-500 h-7 w-[70%] rounded-md shadow-lg px-2"
            />
            <textarea
                placeholder="Description"
                {...register("descripcion", { required: true })}
                className="border border-blue-500 h-20 w-[70%] rounded-md shadow-lg px-2"
            ></textarea>
            <button type="submit" className="bg-blue-500 px-4 py-2 rounded-md text-white">
                Add Task
            </button>


        </form>
        </div>
    )
}
