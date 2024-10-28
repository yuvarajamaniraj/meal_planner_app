'use client'

import { signIn } from 'next-auth/react'

export default function SignInButton() {
  return (
    <div className="flex flex-col space-y-4">
      <button
        onClick={() => signIn('google')}
        className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
      >
        Sign in with Google
      </button>
      <button
        onClick={() => signIn('github')}
        className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      >
        Sign in with GitHub
      </button>
    </div>
  )
}