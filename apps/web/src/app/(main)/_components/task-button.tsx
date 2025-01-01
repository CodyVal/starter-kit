'use client'

import { useRealtimeTaskTrigger } from '@trigger.dev/react-hooks'
import type { helloWorldTask } from '@repo/triggers'

export function TaskButton({
  publicAccessToken,
}: {
  publicAccessToken: string
}) {
  const { submit, run, error, isLoading } = useRealtimeTaskTrigger<
    typeof helloWorldTask
  >('hello-world', {
    accessToken: publicAccessToken,
  })

  if (error) {
    return <div>Error: {error.message}</div>
  }

  // This is the realtime run object, which will automatically update when the run changes
  if (run) {
    return <div>Run ID: {run.id}</div>
  }

  return (
    <button onClick={() => submit({ foo: 'bar' })} disabled={isLoading}>
      {isLoading ? 'Loading...' : 'Trigger Task'}
    </button>
  )
}
