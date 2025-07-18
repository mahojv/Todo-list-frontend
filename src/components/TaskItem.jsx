import React from 'react'
import { Link } from 'react-router'
import Swal from 'sweetalert2'

export default function TaskItem({ task, setModal, refreshTasks }) {



  const { id, titulo, descripcion, estado } = task

  const handleCheck = async () => {
    try {
      const url = `http://localhost:3000/tasks/${id}`
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ ...task, estado: !estado })
      })
      if (response.ok) {
        Swal.fire({
          title: "Tarea Actualizada con éxito!",
          icon: "success",
          draggable: true,
          showConfirmButton: false,
          timer: 1500
        });
        refreshTasks()

      }
    } catch (error) {
      console.error("Error al actualizar estado:", error)
    }
  }

  const handleDelete = async () => {
    try {
      const url = `http://localhost:3000/tasks/${id}`
      const response = await fetch(url, {
        method: "DELETE"
      })
      if (response.ok) {

        Swal.fire({
          title: "Tarea eliminada!",
          icon: "error",
          draggable: true,
          showConfirmButton: false,
          timer: 1500
        });
        refreshTasks()
      }
    } catch (error) {
      console.error("Error al eliminar tarea:", error)
    }
  }


  return (
    <li className="flex justify-between pl-2 py-5 pr-8 mb-3  rounded-sm shadow-lg  border-gray-300" id={id}>
      <label htmlFor={id} className={`flex gap-2 items-center    ${estado === true ? "line-through" : ""}  `} >
        <input type="checkbox" id={id} className="" checked={estado === true || estado === "true"} onChange={handleCheck} />
        <p className='w-[30%] border-r border-gray-300'>{titulo}</p>
        <p className='w-[50%]'>{descripcion}</p>
      </label>
      <div className='flex gap-2 justify-between  items-center w-10 '>
        <Link className='cursor-pointer'
          to={`/edit-task/${id}`}

          onClick={(e) => {

            setModal(true);
          }}
        >
          <svg className="w-6 h-6 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
          </svg>

        </Link>
        <button className=" cursor-pointer"
          onClick={handleDelete}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
          </svg>
        </button>
      </div>
    </li>

  )
}
