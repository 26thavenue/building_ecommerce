import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
 



const page = () => {
  return (
    <div className='grid grid-cols-2 p-6'>
      <div className='grid gap-4'>
        <h1 className='mb-6 font-bold'>CHECKOUT</h1>
         <div className="grid w-full max-w-sm items-center gap-1.5">
          <h1>Contact Information </h1>
          <Input type="email" id="email" placeholder="Email" />
         </div>
         
         <div className="grid w-full max-w-sm items-center gap-1.5">
          <h1 className='mb-4'>Shipping Address</h1>
          <div className='flex gap-3'>
            <Input type="text" id="first-name" placeholder="First Name" />
            <Input type="text" id="last-name" placeholder="Last Name" />
          </div>
          <Input type="text" id="country" placeholder="Country" />
          <div className='flex gap-3'>
            <Input type="text" id="state" placeholder="State" />
            <Input type="text" id="city" placeholder="City" />  
          </div>
          
          <Input type="text" id="address" placeholder="Address" />
          <Input type="text" id="email" placeholder="Phone number" />
         </div>

      </div>
      
      <div></div>

    </div>
  )
}

export default page