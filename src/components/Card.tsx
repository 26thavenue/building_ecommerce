"use client"
import { Skeleton } from "@/components/ui/skeleton"
import { useRouter } from "next/router"


// interface CardProps{
//   data:any
// }
const Card= () => {
  // const router = useRouter()
  return (
    <div
    // onClick={() => router.push(`/product/${data.id}`)} 
    className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}

export default Card
