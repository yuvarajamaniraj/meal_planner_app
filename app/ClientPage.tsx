'use client'

import { useSession, signOut } from 'next-auth/react'
import SignInButton from '../components/SignInButton'

export default function ClientPage() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Added header section */}
      <header className="w-full p-4 bg-white shadow-sm">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold">Meal planner for the week</h1>
          {session && (
            <div className="flex items-center gap-4">
              <span>{session.user?.email}</span>
              <button 
                onClick={() => signOut()} 
                className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Sign out
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Main content */}
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        {!session ? (
          <div className="w-full max-w-md">
            <div className="bg-[#8a817c] rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-medium text-white mb-6">Login to continue</h2>
              <div className="bg-[#f4f3ee] rounded-md p-6 space-y-4">
                <SignInButton />
              </div>
            </div>
          </div>
        ) : (
          /* Weekday tiles - only shown when session exists */
          <div className="grid grid-cols-7 gap-4 w-full max-w-7xl mt-8">
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
              <div 
                key={day} 
                className="flex flex-col items-center p-4 bg-[#8a817c] rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="font-medium mb-4 text-white">{day}</h3>
                <div className="space-y-3 w-full">
                  {['Breakfast', 'Lunch', 'Dinner'].map((meal) => (
                    <div 
                      key={`${day}-${meal}`} 
                      className="p-3 bg-[#f4f3ee] rounded-md relative"
                    >
                      <h4 className="text-sm font-medium mb-2 text-[#463f3a]">
                        {meal}
                      </h4>
                      <button 
                        className="absolute bottom-2 left-2 w-8 h-8 bg-[#463f3a] text-white rounded-md hover:bg-[#8a817c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#463f3a] group relative"
                      >
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-5 w-5 mx-auto transition-opacity group-hover:opacity-0" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" 
                          />
                        </svg>
                        <span className="absolute whitespace-nowrap -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-[#463f3a] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
                          Generate
                        </span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
