import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Alvaro Llorente',
    default:
      'Alvaro Llorente - Software designer, founder, and amateur astronaut',
  },
  description:
    'Alvaro Llorente - Descubre mi mundo, mi pasión y mi trabajo. Soy un desarrollador web y apasionado por la tecnología y el diseño. ',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
