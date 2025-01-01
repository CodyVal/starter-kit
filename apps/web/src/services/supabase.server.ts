import 'server-only'
import { createClient } from '@supabase/supabase-js'
import { auth } from '@clerk/nextjs/server'
import type { Database } from '@repo/types/supabase'

export async function createSupabaseClient() {
  const { getToken } = await auth()

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
          if (clerkToken) {
            headers.set('Authorization', `Bearer ${clerkToken}`)
          }

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
