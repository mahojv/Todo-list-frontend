import React, { useState } from 'react'
import FilterNav from './components/FilterNav'
import NewTask from './components/NewTask'
import TaskList from './components/TaskList'


export default function App() {

  const [status, setStatus] = useState("")




  return (
    <>
      <div className="w-full h-screen bg-gray-200 py-8 text-[10px] max-w-xl mx-auto">
        <h1 className="text-center font-mono text-2xl"> TO DO APP</h1>

        <FilterNav
          status={status}
          setStatus={setStatus}
        />

        <NewTask />

        <TaskList
          status={status}
        />



      </div>



    </>
  )
}
