import { Database } from '@repo/types/supabase'
import { createClient, type SupabaseClient } from '@supabase/supabase-js'
import { logger, schedules } from '@trigger.dev/sdk/v3'

export const refreshAllReleaseNotes = schedules.task({
  id: 'ping-supabase-db',
  // every day at midnight (UTC timezone)
  cron: '0 0 * * *',
  init: async (payload: any, { ctx }) => {
    logger.log(`Initializing ${ctx.task.id} task`, { payload, ctx })
    const supabaseUrl = process.env.SUPABASE_URL || ''
    const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

    return {
      supabase: createClient<Database>(supabaseUrl, supabaseServiceRoleKey),
    }
  },
  run: async (_, { init }) => {
    const supabase = init?.supabase

    if (!supabase) {
      throw new Error('Supabase client not initialized')
    }

    await revive(supabase)
  },
})

async function revive(supabase: SupabaseClient<Database>) {
  const { data, error } = await supabase.from('keep_alive').upsert(
    {
      name: 'keep_alive',
      updated_at: new Date().toISOString(),
    },
    { onConflict: 'name' }
  )

  if (error) {
    throw new Error(`Error fetching package data: ${error.message}`)
  }

  return data
}
