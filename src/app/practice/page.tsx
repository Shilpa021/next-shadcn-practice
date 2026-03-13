import { Button } from "@/components/ui/button"
import { Ghost } from "lucide-react"
function page() {
  return (
    <main className='h-full flex justify-center items-center flex-col'>
 <div>
      We are here 
    </div>
    <button className='px-6 py-2 bg-blue-400 rounded m-10'>
        Test Button
    </button>
    <Button variant={"destructive"} size={"lg"}> Test Button from Shadcn</Button>
    </main>
   
  )
}

export default page
