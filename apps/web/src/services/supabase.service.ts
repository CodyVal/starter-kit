import 'server-only'
import { createClient } from '@supabase/supabase-js'
import type { Database } from '@repo/types/supabase'

export function createSupabaseServiceRoleClient() {
  return createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.SUPABASE_SERVICE_ROLE_KEY as string
  )
}
