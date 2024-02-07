import React from 'react'

const Sidebar = () => {
  return (
    <div className="bg-white shadow-md h-[100vh] sticky left-0">
        <div className='flex flex-col gap-6 items-center justify-center p-6 text-sm'>
            <h3>Dashboard</h3>
            <h3>Payments</h3>
            <h3>Users</h3>
            <h3>Products</h3>
            <h3>Category</h3>
            <h3>Order Lists</h3>
            <h3>To-do</h3>
            <h3>Invoice</h3>
        </div>

    </div>
  )
}

export default Sidebar