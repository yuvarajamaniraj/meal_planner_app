import '../styles/globals.css'
import { Inter } from 'next/font/google'
import { SessionProvider } from '../components/SessionProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Login Page',
  description: 'A simple login page with dark mode and Google OAuth',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  )
}