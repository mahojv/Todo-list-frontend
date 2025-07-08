import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useOutletContext } from 'react-router'

export default function CreateTask() {
    const { setModal } = useOutletContext(); 
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
                navigate("/")

            }
        } catch (error) {
            console.error("Error creating task:", error)
        }
    }



    return (
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
    )
}
