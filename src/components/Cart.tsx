import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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
        <p>Cart</p>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle> YOUR CART</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-6">
          <p>There are no items in your catr</p>
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
