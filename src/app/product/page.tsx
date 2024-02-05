import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import { Button } from '@/components/ui/button'
import Card from '../../components/Card'
const page = () => {

  const cardArray = Array.from({ length: 4 }, (_, index) => index);
  
  return (
    <div>
        <div className='grid items-center grid-cols-2 p-6 m-6'>
        <Skeleton className="h-[500px] w-[400px] rounded-xl" />
        
        <div className='flex flex-col gap-6'>
            <p className="text-4xl font-bold">Product Name</p>
            <p className='text-xl font-bold'> $120.00</p>
            <p>Quantity</p>
            <Button variant="secondary"> Add to Cart</Button>
        </div>

        </div>

        <div>
            <p className="font-bold text-2xl text-center my-16">PRODUCT DETAILS</p>
            <div className="flex justify-between gap-10 p-10">
                
                    <p className=''>PRODUCT DESCRIPTION</p>
                    <p>PRODUCT SPECIFICATION</p>
                    <p>REVIEWS</p>
                    
            </div>
        </div>

        
        
        <div>
            <p className="font-bold text-2xl text-center my-16"> RELATED PRODUCTS</p>
            <div className="flex flex-wrap justify-center gap-4 py-6 ">
                {cardArray.map((index) => (
                        <Card key={index} />
                    ))}
            </div>

        </div>
    </div>
    
  )
}

export default page