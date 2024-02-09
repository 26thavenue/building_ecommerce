"use client"

import Link from 'next/link'
import {
  Command,

  CommandInput,
 
} from "@/components/ui/command"

import { FaUser } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { SheetDemo } from '../Cart'

const Navbar = () => {
  return (
    <nav className='w-full bg-white shadow-sm text-black  sticky top-0 z-10  '>
       <div className = 'mx-auto flex  xl:px-20 py-6 px-3 md:px-8 items-center justify-between gap-2'>
          <Link href='/' className="font-[900] text-xl md:text-3xl"> WANDE</Link>
       
      <Command className="rounded-lg border  w-96 hidden md:block">
          <CommandInput placeholder="Search for building materials" />
          
        </Command>
        <div className="flex gap-8 cursor-pointer">
           {/* DROPDOWN ITEM */} 
           <DropdownMenu>
             <DropdownMenuTrigger asChild>
               <p className="text-[12px] md:text-sm">Categories</p>
             </DropdownMenuTrigger>
             <DropdownMenuContent className="w-56">
              
               <DropdownMenuItem>No categories yet</DropdownMenuItem>
             </DropdownMenuContent>
           </DropdownMenu>
           {/* DROPDOWN ITEM */}
           <div className="flex items-center gap-2">
             <SheetDemo/>
             {/* <p className="font-[10px]"> 0</p> */}
           </div>
          
           <Link href='/login' className="hidden md:block text-sm hover:underline transition-all 700ms "> Login </Link>
           <Link href='/signup' className="hidden md:block text-sm hover:underline transition-all 700ms"> Signup </Link>
           <p className='flex items-center md:hidden'><FaUser className=""/></p>
          
         </div>
         </div>
    </nav>
  )
}

export default Navbar