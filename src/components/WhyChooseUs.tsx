import React from 'react'
import CircularCard from './Card'
const WhyChooseUs = () => {
  const cardArray = Array.from({ length: 4 }, (_, index) => index);

  return (
    <div className="w-full px-6 text-center p-6 my-6">
        <h1 className=' text-black font-medium text-2xl'> WHY CHOOSE US </h1>
        <div className="flex flex-wrap justify-center gap-4 py-6 ">
           {cardArray.map((index) => (
                <CircularCard key={index}  />
            ))}
        </div>
    </div>
  )
}

export default WhyChooseUs


