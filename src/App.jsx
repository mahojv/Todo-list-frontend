import React from 'react'
import { Route, Routes } from 'react-router'
import Layout from './Layout/Layout'
import CreateTask from './components/CreateTask'
import EditTask from './components/EditTask'


export default function App() {


  return (
    <Routes>
      <Route  path="/" element={<Layout/>}>
        <Route path="/new-task" element={<CreateTask/>} />
        <Route path="/edit-task/:id" element={<EditTask/>} />

      </Route>

      </Routes>
  )
}
