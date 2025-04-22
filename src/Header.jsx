import React from 'react'

export default function Header({githubUserData, username, profileImage, bioData}) {
    
  return (
    <div className='flex flex-col items-center gap-2 bg-black w-[95%] rounded-2xl text-white xl:p-10 lg:p-6 md:p-4 p-2'>
      <div  ><img className='rounded-[220px] w-[150px] sm:w-[170px] md:w-[175px] lg:w-[200px] xl:w-[250px]' src={profileImage} alt="profile_image" /></div>
      <span className='font-bold text-xl md:text-2xl'>{username}</span>
      <span className=' w-[90%] sm:w-[80%] md:w-[60%] flex text-center justify-center xl:text-lg'>{bioData ?? "NA"}</span>
    </div>
  )
}
