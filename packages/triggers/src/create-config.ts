import { defineConfig } from '@trigger.dev/sdk/v3'

export function createConfig(projectId: string) {
  return defineConfig({
    project: projectId,
    runtime: 'node',
    logLevel: 'log',
    retries: {
      enabledInDev: true,
      default: {
        maxAttempts: 3,
        minTimeoutInMs: 1000,
        maxTimeoutInMs: 10000,
        factor: 2,
        randomize: true,
      },
    },
    dirs: ['./src'],
  })
}
