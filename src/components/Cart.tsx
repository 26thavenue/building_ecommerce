"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FiShoppingCart } from "react-icons/fi";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <p><FiShoppingCart/></p>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle> YOUR CART</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-6 mb-3">
          <p className="mb-2">There are no items in your cart</p>
          <p>SUBTOTAL : </p>
        </div>
        
        <SheetFooter>
            
          <SheetClose asChild>
            <Button type="submit"> CHECKOUT </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
