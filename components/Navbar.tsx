'use client'
import Link from 'next/link'
import { useTheme } from '../context/ThemeContext'
import { signOut, useSession } from 'next-auth/react'
import { Quicksand } from 'next/font/google'

const quicksand = Quicksand({ 
  subsets: ['latin'],
  display: 'swap',
})

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const { data: session } = useSession()

  return (
    <nav className={`bg-white dark:bg-gray-800 shadow-md ${quicksand.className}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="/media/logo.png"
                alt="Logo"
                className="w-8 h-8 object-contain"
                onError={(e) => {
                  console.log('Logo failed to load');
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/media/fallback-logo.png';
                }}
              />
              <span className="text-xl font-semibold text-gray-800 dark:text-white">
                Next Meal
              </span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {session && (
              <>
                <Link href="/meal-plan" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white font-medium">
                  Meal Plan
                </Link>
                <Link href="/recipes" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white font-medium">
                  Recipes
                </Link>
                <Link href="/shopping-list" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white font-medium">
                  Shopping List
                </Link>
              </>
            )}
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white focus:outline-none"
            >
              {theme === 'dark' ? '🌞' : '🌙'}
            </button>

            {session && (
              <button
                onClick={() => signOut()}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
              >
                Sign Out
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
