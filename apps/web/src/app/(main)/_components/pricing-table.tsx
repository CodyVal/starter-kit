// @ts-nocheck
'use client'

import Script from 'next/script'

export function PricingTable() {
  return (
    <>
      <stripe-pricing-table
        pricing-table-id="prctbl_1Qh3HABUVtC58tT5dpxnEwCy"
        publishable-key={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}
      ></stripe-pricing-table>
    </>
  )
}
