import { task } from '@trigger.dev/sdk/v3'

export const helloWorldTask = task({
  id: 'hello-world',
  run: async (payload: any, { ctx, init }) => {
    console.log('hello world')

    return 'hello world'
  },
})
