"use server"

interface formData{
    name: string,
    description: string,
    imageUrl: string,
    price: number
}

import  prisma  from "../../lib/prisma"
export async function addProduct(formData: formData){
    await prisma.product.create({
        data: {
            name: formData.name,
            price: formData.price,
            imageUrl: formData.imageUrl,
            description: formData.description,

        }
    })
}