import Link from 'next/link'
import {
  Command,

  CommandInput,
 
} from "@/components/ui/command"

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
    <nav className = 'flex py-6 px-8 bg-[#ECEBEB] text-black items-center justify-between gap-2'>
        <h1 className="font-[900] text-3xl"> WANDE</h1>
       
        <Command className="rounded-lg border  w-96">
          <CommandInput placeholder="Search for building materials" />
          
        </Command>
        <div className="flex gap-8 cursor-pointer">
          {/* DROPDOWN ITEM */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <p>Categories</p>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              
              <DropdownMenuItem>No categories yet</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {/* DROPDOWN ITEM */}
          <div className="flex gap-2">
            <SheetDemo/>
            {/* <p className="font-[10px]"> 0</p> */}
          </div>
          
          <Link href='/login'> Login </Link>
          <Link href='/signup'> Signup </Link>
          
        </div>
    </nav>
  )
}

export default Navbar