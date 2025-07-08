import React from 'react'
import { Route, Routes } from 'react-router'
import Layout from './Layout/Layout'
import CreateTask from './components/CreateTask'


export default function App() {


  return (
    <Routes>
      <Route  path="/" element={<Layout/>}>
        <Route path="/new-task" element={<CreateTask/>} />
        {/* <Route path="edit-task/:id" element={<h1>Edit Task</h1>} /> */}
        {/* <Route path="task-list" element={<h1>Task List</h1>} /> */}
        {/* <Route path="*" element={<h1>404 Not Found</h1>} /> */}
        


      </Route>

      </Routes>
  )
}
