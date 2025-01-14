import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import Script from 'next/script'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <header>
        <SignedOut>
          <Link href="/auth/sign-in">Sign In</Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
      {children}
      <Script async src="https://js.stripe.com/v3/pricing-table.js"></Script>
    </div>
  )
}
