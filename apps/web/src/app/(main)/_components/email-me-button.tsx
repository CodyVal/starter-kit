'use client'

export function EmailMeButton() {
  const onClick = () => {
    fetch('/api/example-email', {
      method: 'POST',
      body: JSON.stringify({ email: 'delivered@resend.dev' }),
    })
  }

  return <button onClick={onClick}>Email Resend</button>
}
