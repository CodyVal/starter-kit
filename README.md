# CodyVal Starter Kit

This is a comprehensive starter kit for building modern web applications, powered by the following tools and technologies:

## Core Framework

- [Next.js](https://nextjs.org/) - React framework for production-grade applications

## Styling

- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

## Development & Build

- [Turborepo](https://turbo.build/) - High-performance build system for JavaScript/TypeScript monorepos

## Authentication & User Management

- [Clerk](https://clerk.com/) - Complete user management and authentication solution

## Database & Backend

- [Supabase](https://supabase.com/) - Open source Firebase alternative with PostgreSQL database

## Email

- [Resend](https://resend.com/) - Email API for developers

## Payments

- [Stripe](https://stripe.com/) - Payment processing platform

## Background Jobs & Automation

- [Trigger.dev](https://trigger.dev/) - Background jobs and workflow automation

## Deployment

- [Vercel](https://vercel.com/) - Platform for deploying and hosting web applications

# Setup

To use this starter kit, you'll need to configure Clerk to work with Supabase. This involves setting up webhooks and proper authentication sync between the two services. Follow the official integration [guide](https://supabase.com/partners/integrations/clerk) here:

## Supabase Type Generation

To keep your TypeScript types in sync with your Supabase database schema, you'll need to periodically regenerate the types. This is important whenever you make changes to your database structure.

Run the following command to generate updated types:
`pnpm run types:generate`
