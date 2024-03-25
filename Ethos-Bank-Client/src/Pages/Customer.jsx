import React from 'react'
import { useParams } from 'react-router-dom'

function Customer() {
    const { name } = useParams();
  return (
    <div className='h-[100vh] w-full bg-red-600'>
      
    </div>
  )
}

export default Customer
