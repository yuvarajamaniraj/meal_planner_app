import '../styles/globals.css'
import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import { ThemeProvider } from '../context/ThemeContext'
import { SessionProvider } from '../components/SessionProvider'


const quicksand = Quicksand({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Meal Planner App',
  description: 'Plan your meals efficiently',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <SessionProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
