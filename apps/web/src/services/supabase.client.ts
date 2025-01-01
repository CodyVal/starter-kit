'use client'

import { createClient } from '@supabase/supabase-js'
import type { getAuth } from '@clerk/nextjs/server'
import type { Database } from '@repo/types/supabase'

export function createSupabaseClient(
  getToken: ReturnType<typeof getAuth>['getToken']
) {
  return createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
    {
      global: {
        fetch: async (url, options = {}) => {
          const clerkToken = await getToken({
            template: 'supabase',
          })

          // Construct fetch headers
          const headers = new Headers(options?.headers)
          headers.set('Authorization', `Bearer ${clerkToken}`)

          // Now call the default fetch
          return fetch(url, {
            ...options,
            headers,
          })
        },
      },
    }
  )
}
