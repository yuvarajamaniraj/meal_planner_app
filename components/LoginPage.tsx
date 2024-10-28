'use client'
import { signIn } from 'next-auth/react'

export default function LoginPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-16 relative">
        {/* Left side - Login */}
        <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden px-6 py-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
            Welcome
          </h2>
          <img
            src="/media/login.PNG"
            alt="Logo"
            className="w-16 h-16 mx-auto mb-8 object-contain"
            onError={(e) => {
              console.log('Logo failed to load');
              e.currentTarget.onerror = null;
              e.currentTarget.src = '/media/fallback-logo.png';
            }}
          />
          <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
            Please sign in to continue
          </p>
          <div className="space-y-4">
            <button
              onClick={() => signIn('google', { callbackUrl: '/' })}
              className="w-full flex items-center justify-center gap-3 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Sign in with Google
            </button>
            
            <button
              onClick={() => signIn('github', { callbackUrl: '/' })}
              className="w-full flex items-center justify-center gap-3 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
              Sign in with GitHub
            </button>
          </div>
        </div>

        {/* Simple Vertical Divider - Only visible on desktop */}
        <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-px bg-gray-200 dark:bg-gray-600 transform -translate-x-1/2"></div>

        {/* Right side - Image and Text */}
        <div className="flex-1 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-600 rounded-lg shadow-md overflow-hidden px-6 py-8">
          <div className="h-full flex flex-col items-center justify-center">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Plan Your Meals Effortlessly
            </h3>
            <div className="mb-8">
              <img
                src="/media/logo_with_name-removebg-preview.png"
                alt="Meal Planning Illustration"
                width={256}
                height={256}
                className="w-64 h-64 object-contain"
                onError={(e) => {
                  console.log('Image failed to load');
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0iI2YwZjBmMCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjQ4IiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+8J+NsTwvdGV4dD48L3N2Zz4='
                }}
              />
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-center max-w-md">
              Create weekly meal plans, manage your favorite recipes, and generate 
              shopping lists automatically with our easy-to-use platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
