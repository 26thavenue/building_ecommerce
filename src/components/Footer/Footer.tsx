import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black w-full grid grid-cols-4 justify-center items-center text-white p-16'>
        <div>
            <h1 className='text-4xl '>WANDE</h1>
        </div>
        <div className=''>
            <p className='text-[18px] font-medium'>Account</p>
            <p>Login</p>
            <p>Signup</p> 
            <p>Forgot Password</p>
            <p>Cart</p>
        </div>
        <div className=''>
            <p className='text-[18px] font-medium'>Category</p>
            <p>Fittings</p>
            <p>Florrings</p>
            <p>Kitchen</p>
            <p>Showers&Faucets </p>
        </div>
        <div className=''>
            <p className='text-[18px] font-medium'>Contact Us</p>
            <p>Facebook</p>
            <p>Telegram</p>
            <p>Number : +233555777444</p>
            <p>Email: abi@gmail.com</p>
        </div>
        

    </div>
  )
}

export default Footer