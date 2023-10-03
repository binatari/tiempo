import React from 'react'
import TheOriginalBg from '../../../assets/HomePageImg/TheOriginalBg/TheOriginalBg.png'

const TheOriginal = () => {
  return (
    <div className='mt-14 '>
        <h1 className='uppercase text-[30px] text-center text-[#474A59]'>the original</h1>
        <hr className="border border-[#989898] w-28 mx-auto mt-8"/>
        <div className="flex justify-center items-center mt-20">
          <img src={TheOriginalBg} alt="Centered Image" className="max-w-full max-h-full" />
        </div>
    </div>
  )
}

export default TheOriginal