import React from 'react'

const Step1 = () => {
  return (
    <div className='w-full'>
        <h1 className='font-bold text-xl text-marineBlue
        lg:text-2xl
        '>Personal info</h1>
        <p className='text-sm font-[400] text-coolGray mt-2'>Please provide yout name, email address, and phone number.</p>

        <div className='mt-4'>
            <p className='text-[11px] text-marineBlue'>Name</p>
            <input type="text" placeholder='e.g. Stephen King' className='mt-1 text-[12px] py-2 px-3 w-full border-[1px] border-lightGray rounded-md' />
        </div>

        <div className='mt-4'>
            <p className=' text-[11px] text-marineBlue'>Email Address</p>
            <input type="text" placeholder='e.g. stephenking@lorem.com' className='mt-1 text-[12px] py-2 px-3 w-full border-[1px] border-lightGray rounded-md' />
        </div>

        <div className='mt-4'>
            <p className='text-[11px] text-marineBlue'>Phone Number</p>
            <input type="text" placeholder='e.g. +1 234 567 890' className='mt-1 text-[12px] py-2 px-3 w-full border-[1px] border-lightGray rounded-md' />
        </div>

        
    </div>
  )
}

export default Step1