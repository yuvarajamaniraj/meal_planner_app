'use client'

import { useSession, signOut } from 'next-auth/react'
import SignInButton from '../components/SignInButton'

export default function ClientPage() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to <a className="text-blue-600" href="https://nextjs.org">Next.js!</a>
        </h1>

        {session ? (
          <div className="mt-3">
            Signed in as {session.user?.email} <br />
            <button onClick={() => signOut()} className="mt-3 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">Sign out</button>
          </div>
        ) : (
          <div className="mt-3">
            <SignInButton />
          </div>
        )}
      </main>
    </div>
  )
}