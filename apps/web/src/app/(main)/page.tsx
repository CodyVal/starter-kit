import { EmailMeButton } from './_components/email-me-button'
import { TaskButton } from './_components/task-button'
import { PricingTable } from './_components/pricing-table'
import { auth } from '@trigger.dev/sdk/v3'

export default async function Home() {
  const triggerToken = await auth.createTriggerPublicToken('hello-world')

  const products = await fetch('http://localhost:3000/api/products')

  console.log(await products.json())

  return (
    <div>
      <TaskButton publicAccessToken={triggerToken} />
      <EmailMeButton />
      <PricingTable />
    </div>
  )
}
