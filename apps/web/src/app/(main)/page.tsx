import { TaskButton } from './_components/task-button'
import { auth } from '@trigger.dev/sdk/v3'

export default async function Home() {
  const triggerToken = await auth.createTriggerPublicToken('hello-world')
  return (
    <div>
      <TaskButton publicAccessToken={triggerToken} />
    </div>
  )
}
