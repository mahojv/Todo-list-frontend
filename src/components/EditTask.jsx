import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useOutletContext, useParams } from 'react-router'
import Swal from 'sweetalert2'

export default function EditTask() {
    const { id } = useParams()
    const { setModal, refreshTasks } = useOutletContext();
    const navigate = useNavigate()


    const { register, handleSubmit, reset } = useForm({ defaultValues: { titulo: "", descripcion: "" } })

    const fetchTask = async (id) => {
        try {
            const url = `http://localhost:3000/tasks/${id}`
            const response = await fetch(url, {
                method: "GET"
            })
            const data = await response.json()
            reset(data)


        } catch (error) {
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

            console.log(response.status)
            if (response.status === 200 || response.status === 201) {

                Swal.fire({
                    title: "Tarea Actualizada con éxito!",
                    icon: "success",
                    draggable: true,
                    showConfirmButton: false,
                    timer: 1500
                });
                reset()
                setModal(false)
                refreshTasks()
                navigate("/")

            }
        } catch (error) {
            Swal.fire({
                title: "Ha ocurrido un error al actualizar la tarea",
                icon: "error",
                draggable: true
            });
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
                <button type="submit" className="bg-blue-500 px-4 py-2 mt- rounded-md text-white">
                    Update Task
                </button>


            </form>
        </div>
    )
}
