import React from 'react'

export default function NewTask() {
  return (
    <div className="w-full px-8 py-4 flex gap-4" id="newTask">
            <input type="text" name="" id="" className=" border border-blue-500 h-7 w-full rounded-md shadow-lg px-2"/>
            <button className="shrink-0 bg-blue-500 px-2 rounded-md text-white font cursor-pointer ">ENVIAR</button>
        </div>
  )
}
