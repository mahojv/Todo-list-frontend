import React from 'react'

export default function ShowError({ message, setError }) {
    return (
        <div className='w-full h-screen absolute top-0 left-0 bg-black/25 flex justify-center items-center'>
            <div role='modalContent' className='bg-white w-4/5  min-h-40 rounded-md shadow-md p-8 text-center max-w-md'>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 mx-auto text-orange-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                </svg>
                <p className='mt-4'>Algo salio mal <br />
                    {message} <br />
                    Por favor intenta mas tarde </p>
                <button className='mt-4 bg-green-500 px-8 py-2 rounded-md shadow-md cursor-pointer' onClick={() => { setError("") }}>OK</button>

            </div>


        </div>
    )
}
