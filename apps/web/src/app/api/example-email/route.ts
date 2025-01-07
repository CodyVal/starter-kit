import { resend } from '@/services/resend.server'
import { NextRequest, NextResponse } from 'next/server'
import { ExampleEmail } from '@repo/email-templates/emails/example-email'

export async function POST(req: NextRequest) {
  const { email } = await req.json()

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: 'Hello, World!',
    react: ExampleEmail(), // You can pass props to the email component
  })

  return NextResponse.json({ message: 'Email sent' })
}
