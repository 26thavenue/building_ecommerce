"use client"

import React from 'react'



const Footer = () => {
  return (
    // <div className='bg-black  w-screen grid gap-12 md:grid-cols-4 justify-center items-center text-white p-3 md:p-16'>


    // // </div>
    <footer className='container md:grid md:grid-cols-4 gap-3 items-center md:p-8 bg-black w-full text-white h-full '>
        
          <div  className='hidden md:block'>
            <h1 className='text-4xl '>WANDE</h1>
        </div>
        <div className='px-6 my-6'>
            <p className='text-lg font-medium mb-3'>Account</p>
            <p className='text-sm font-light' >Login</p>
            <p className='text-sm font-light' >Signup</p> 
            <p className='text-sm font-light' >Forgot Password</p>
            <p className='text-sm font-light' >Cart</p>
        </div>
        <div className='px-6 my-6'>
            <p className='text-lg font-medium mb-3'>Category</p>
            <p className='text-sm font-light' >Fittings</p>
            <p className='text-sm font-light' >Florrings</p>
            <p className='text-sm font-light' >Kitchen</p>
            <p className='text-sm font-light' >Showers&Faucets </p>
        </div>
        <div className='px-6 my-6'>
            <p className='text-lg font-medium mb-3'>Contact Us</p>
            <p className='text-sm font-light' >Facebook</p>
            <p className='text-sm font-light' >Telegram</p>
            <p className='text-sm font-light' >Number : +233555777444</p>
            <p className='text-sm font-light' >Email: abi@gmail.com</p>
        </div>
        

        
    </footer>
  )
}

export default Footer