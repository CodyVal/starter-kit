import { createSupabaseServiceRoleClient } from '@/services/supabase.service'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const supabase = createSupabaseServiceRoleClient()

  const { data, error } = await supabase.rpc('get_stripe_plans')

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  console.log(data)

  return NextResponse.json({ products: data })
}
