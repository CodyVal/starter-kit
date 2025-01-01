import { createSupabaseClient } from '@/services/supabase.client'
import { useAuth } from '@clerk/nextjs'

export function useSupabase() {
  const { getToken } = useAuth()

  return createSupabaseClient(getToken)
}
