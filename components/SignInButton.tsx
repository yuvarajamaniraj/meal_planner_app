'use client'

import { signIn } from 'next-auth/react'
import Image from 'next/image'
import { useState } from 'react'
import { Loader2 } from 'lucide-react'

export default function SignInButton() {
  const [imageError, setImageError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSignIn = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const result = await signIn('google', {
        callbackUrl: '/',
        redirect: false,
      })

      if (result?.error) {
        setError('Failed to sign in. Please try again.')
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <button
        onClick={handleSignIn}
        disabled={isLoading}
        className="flex items-center justify-center w-full px-4 py-2 space-x-2 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-400 dark:focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : !imageError ? (
          <Image
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt="Google Logo"
            width={20}
            height={20}
            onError={() => setImageError(true)}
          />
        ) : (
          <span className="font-bold text-xl">G</span>
        )}
        <span>{isLoading ? 'Signing in...' : 'Sign in with Google'}</span>
      </button>
      {error && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  )
}