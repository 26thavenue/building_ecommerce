import React from 'react'
import {Skeleton} from '@/components/ui/skeleton'
import { Separator } from "@/components/ui/separator"
import { Button } from '@/components/ui/button'
const page = () => {
  return (
    <div>
        <h1 className='text-[18px] font-light text-center my-12 mx-6'>YOUR CART</h1>
        <div className='p-6 flex justify-between items-center'>
            <h3 className='font-light'> PRODUCT </h3>
            <h3 className='font-light'> QUANTITY </h3>
            <h3 className='font-light'> TOTAL </h3>
        </div>
        <Separator className="my-4 " />
        
        <div className="my-6 p-6 flex justify-between items-center">
            <Skeleton className="h-[200px] w-[200px] rounded-xl" />
            <h3> 2 </h3>
            <h3> $120.00 </h3>
           
        </div>
         <Separator className="my-4 " /> 

        <div className="flex flex-col justify-end items-end my-4 mx-6 gap-4">
            <p className="text-sm" >SUBTOTAL : $120.00 </p> 
            <Button variant="secondary" className=" "> CHECKOUT</Button> 
        </div>
        
        

       
    </div>
  )
}

export default page