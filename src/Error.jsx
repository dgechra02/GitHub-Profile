import React from 'react'

export default function Error() {
  return (
    <div className='w-[95%] flex flex-col justify-center items-center border rounded p-4 shadow-sm shadow-red-500'>
      <span className='text-center'>No User Found or Searched!</span>
      <span className='text-center'>Search a valid user on the input above</span>
    </div>
  )
}
