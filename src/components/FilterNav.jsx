import React from 'react'

export default function FilterNav({ status, setStatus }) {

  function handleClick(e) {

    setStatus(e.target.value)

  }

  return (
    <nav className=" flex  justify-evenly items-center px-8 border-b-1 border-gray-400 mx-4 py-4 mt-4 " >
      <button className={`W-20 cursor-pointer ${status === "" && "border-b-2 border-blue-500"}`} value="" id="all" onClick={handleClick}>All</button>
      <button className={`W-20 cursor-pointer  ${status === "?completed=false" && "border-b-2 border-blue-500"} `} value={"?completed=false"} id="actives" onClick={handleClick}>Actives</button>
      <button className={`W-20 cursor-pointer ${status === "?completed=true" && "border-b-2 border-blue-500"}`} value={"?completed=true"} id="inactives" onClick={handleClick}>Inactives</button>


    </nav>
  )
}
