Caching
Pagination
Forgot Password
Change Password
Adjust padding and text size
Make the product page tab able
Search functionality
[x]Not Found Page
[x]Make it responsive
Style the Not Found Page
Loading screens for all pages
Pagination
Text box of the quantity and check for if its a number and releasea tooltip if its not
Automate excel sheets to add category
Remove footer and header from admin and checkout page

Check:
import { useOptimistic } from 'react'
useFormStatus
zod for validation
using props
key submissions
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { revalidateTag } from 'next/cache'
 
import { cookies } from 'next/headers'
 
export async function exampleAction() {
  // Get cookie
  const value = cookies().get('name')?.value
 
  // Set cookie
  cookies().set('name', 'Delba')
 
  // Delete cookie
  cookies().delete('name')
}