import React from 'react'

function Payments() {
  return (
    <div className='h-[100vh] w-full bg-green-200 font-[Poppins]'>
      <div className='flex flex-col h-[50%] justify-center items-center'>
      <div className='h-[15%] w-[90%] bg-white shadow-md flex rounded-lg'>
            <div className='w-1/2 h-full flex justify-center items-center border-r-2 border-r-sky-600'>
              <p className='text-2xl'>Money Transfer</p>
            </div>
            <div className='w-1/2 h-full flex justify-center items-center'>
              <p className='text-2xl'>NEFT</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Payments
