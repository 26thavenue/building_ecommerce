import React from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import Card from '../../components/Card'

const page = () => {

  const cardArray = Array.from({ length: 32 }, (_, index) => index);


  return (
    <div className='p-6'>
        <p className='text-center text-2xl font-bold'>PRODUCTS</p>
        <div className='flex p-6 justify-between'>
            <p className=''>Showing 1-12 result of 46 results</p>
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort Product" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                    <SelectItem value="apple">Alphabetical Order:Ascending Order</SelectItem>
                    <SelectItem value="banana">Alphabetical Order:Ascending Order</SelectItem>
                    <SelectItem value="blueberry">Price:Highest to Lowest</SelectItem>
                    <SelectItem value="grapes">Price: Lowest to Highest </SelectItem>
                    <SelectItem value="pineapple">Newest</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>

        </div>
        <div className="flex flex-wrap justify-center gap-4 py-6 ">
           {cardArray.map((index) => (
                <Card key={index} />
            ))}
        </div>
        




    </div>
  )
}

export default page
