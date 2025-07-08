import React, {  useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useOutletContext, useParams } from 'react-router'

export default function EditTask() {
    const {id } = useParams()
    const { setModal, refreshTasks } = useOutletContext(); 
    const navigate = useNavigate()
    console.log("ID de la URL:", id);

    const { register, handleSubmit, reset } = useForm({ defaultValues: { titulo: "", descripcion: "" } })

    const fetchTask = async (id) => {   
    try {
        const url = `http://localhost:3000/tasks/${id}`
        const response = await fetch(url, {
            method: "GET"
        })
        const data = await response.json()
        reset(data)
        console.log(data)
        
    }catch (error) {
        console.error("Error fetching task:", error)
    }
}
    useEffect(() => {
        fetchTask(id)
    }, [id])
        

    const onSubmit = async (request) => {
        try {
            const url = `http://localhost:3000/tasks/${id}`
            const response = await fetch(url, {
                method: "PUT"
                ,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(request)
            })
            // const data = await response.json()
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



    return (
        <form className="w-full h-full flex flex-col justify-center items-center gap-4" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-2xl font-bold">Edit Task</h2>
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
            <select
                {...register("estado", { required: true })}
                className="border border-blue-500 h-7 w-[70%] rounded-md shadow-lg px-2"
            >
                <option value="true">Completed</option>
                <option value="false">Pending</option>
            </select>
            <button type="submit" className="bg-blue-500 px-4 py-2 rounded-md text-white">
                Update Task
            </button>


        </form>
    )
}
