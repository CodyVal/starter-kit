import { createSupabaseServiceRoleClient } from '@/services/supabase.service'
import { DeletedObjectJSON, UserJSON } from '@clerk/nextjs/server'
import type { Tables } from '@repo/types/supabase'

export const userCreatedOrUpdated = async (user: UserJSON) => {
  const supabase = createSupabaseServiceRoleClient()

  const userData: Tables<'users'> = {
    id: user.id,
    email:
      user.email_addresses.length > 0
        ? user.email_addresses[0].email_address
        : '',
    first_name: user.first_name || '',
    last_name: user.last_name || '',
    image_url: user.image_url || '',
    created_at: new Date(user.created_at).toISOString(),
    updated_at: new Date(user.updated_at).toISOString(),
    last_active_at: user.last_active_at
      ? new Date(user.last_active_at).toISOString()
      : null,
  }

  const { data, error } = await supabase
    .from('users')
    .upsert(userData, {
      onConflict: 'id',
    })
    .select()
    .single()

  if (error) {
    console.error('Error upserting user:', error)
    return new Response('Error upserting user', { status: 500 })
  }

  return new Response(JSON.stringify(data), { status: 200 })
}

export const userDeleted = async (data: DeletedObjectJSON) => {
  if (!data.id) {
    console.error('User ID is required')
    return new Response('User ID is required', { status: 400 })
  }

  const supabase = createSupabaseServiceRoleClient()

  const { error } = await supabase.from('users').delete().eq('id', data.id)

  if (error) {
    console.error('Error deleting user:', error)
    return new Response('Error deleting user', { status: 500 })
  }

  return new Response('', { status: 200 })
}
