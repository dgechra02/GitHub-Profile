import React from 'react'

export default function Card({label, value}) {
  return (
    <div className='rounded-2xl flex flex-col justify-center items-center bg-violet-200 w-[100%] h-[75px] sm:w-[130px] sm:h-[80px] md:w-[140px] md:h-[90px] lg:w-[150px] lg:h-[100px] xl:w-[175px] xl:h-[120px]'>
        <span className='font-semibold xl:text-lg'>{value}</span>      
        <span className=' xl:text-lg'>{label}</span>
    </div>
  )
}
