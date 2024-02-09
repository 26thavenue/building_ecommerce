import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import prisma from '@/lib/prisma'

async function addProduct(formData: FormData){
    "use server"

    const name = formData.get('name')?.toString()
    const description = formData.get('description')?.toString()
    const price = Number(formData.get('price'))
    const imageUrl = formData.get('image')?.toString()

    if(!name || !description || !price || !imageUrl){
        throw new Error('All fields are required')
    }

    await prisma.product.create({
        data: {
            name,
            description,
            price,
            imageUrl
        }
    
    })
}



 function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">  Add Product</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a Product</DialogTitle>
         
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" typeof='number' className="text-right">
              Price
            </Label>
            <Input id="price" value="" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description"  className="text-right">
              Description
            </Label>
            <Input id="description" value="" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="imageUrl"  className="text-right">
              ImageUrl
            </Label>
            <Input id="imageUrl" value="" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

 const AddProductModal = () => {
  return (
    <form action={addProduct}>
        <DialogDemo />
    </form>
  )
}

export default AddProductModal
