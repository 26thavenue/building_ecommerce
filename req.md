Caching
Pagination
Forgot Password
Change Password
Adjust padding and text size
Make the product page tab able
Search functionality
Make a field for importation of image 
[x]Not Found Page
[x]Make it responsive
Loading screens for all pages
[x]Login and Signup
[x] Re-design the 404 page
Text box of the quantity and check for if its a number and releasea tooltip if its not
Automate excel sheets to add category
[x]Remove footer and header from admin and checkout page

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