'use client'

import { useState, useEffect } from 'react'
import { useSession, signOut } from 'next-auth/react'
import { Moon, Sun, LogOut } from 'lucide-react'
import SignInButton from '../components/SignInButton'

export default function ClientPage() {
  const [darkMode, setDarkMode] = useState(false)
  const { data: session, status } = useSession()

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true'
    setDarkMode(isDarkMode)
    document.documentElement.classList.toggle('dark', isDarkMode)
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem('darkMode', newDarkMode.toString())
    document.documentElement.classList.toggle('dark', newDarkMode)
  }

  const handleLogout = () => {
    signOut({ callbackUrl: '/' })
  }

  if (status === "loading") {
    return <div>Loading...</div>
  }

  return (
    <div className={`min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      <div className="absolute top-4 right-4">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
        >
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-96">
        {session ? (
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Welcome, {session.user?.name}!</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">You are signed in.</p>
            <button
              onClick={handleLogout}
              className="flex items-center justify-center w-full px-4 py-2 space-x-2 text-white bg-red-600 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-400 dark:focus:ring-offset-gray-900"
            >
              <LogOut className="w-5 h-5" />
              <span>Sign Out</span>
            </button>
          </div>
        ) : (
          <>
            <h1 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">Welcome</h1>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-6">Sign in to continue</p>
            <SignInButton />
          </>
        )}
      </div>
    </div>
  )
}