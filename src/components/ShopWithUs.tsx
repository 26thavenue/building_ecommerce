"use client";

import React,{useState} from 'react'
import Card from './Card'

const ShopWithUs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const cardArray = Array.from({ length: 8 }, (_, index) => index);

  const handleItemClick = (index:any) => {
    setActiveIndex(index === activeIndex ? null : index);
  };


  const categoryArr = new Array(['All','Flooring','Fittings', 'Electronics', 'Kitchen', 'Construction', 'Showers & faucets'])
  
  return (
    <div className='my-6 px-6'>
        <h1 className="text-2xl font-bold text-center"> SHOP WITH US</h1>

        {categoryArr.map((item, index) => (
        <div
          key={index}
        //   className={` ${index === activeIndex ? 'active' : 'inactive'} p-2 rounded cursor-pointer pr-4`}
        className='flex gap-4 cursor-pointer justify-between'
          onClick={() => handleItemClick(index)}
        >
          {/* Render your item content here */}
          <p className='space-x-2'>  {item}</p>
         
        </div>
      ))}

        <div className="flex flex-wrap justify-center gap-4 py-6 ">
           {cardArray.map((index) => (
                <Card key={index} />
            ))}
        </div>
        
    </div>
  )
}

export default ShopWithUs