import React from 'react'
import Card from './Card'
const PopularDeals = () => {

  const cardArray = Array.from({ length: 8 }, (_, index) => index);

  return (
    <div className="w-full px-6 text-center my-3">
        <h1 className=' text-black font-medium text-2xl'> POPULAR DEALS </h1>
        <div className="flex flex-wrap justify-center gap-4 py-6 ">
           {cardArray.map((index) => (
                <Card key={index} />
            ))}
        </div>
    </div>
  )
}

export default PopularDeals