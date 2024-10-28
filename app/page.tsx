import Navbar from '@/components/Navbar'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import LoginPage from '@/components/LoginPage'

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />
      {!session ? (
        <LoginPage />
      ) : (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Welcome to Meal Planner</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">Plan your meals, manage your recipes, and create shopping lists with ease.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Meal Planning</h2>
              <p className="text-gray-600 dark:text-gray-300">Create and manage your weekly meal plans.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Recipe Management</h2>
              <p className="text-gray-600 dark:text-gray-300">Store and organize your favorite recipes.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Shopping Lists</h2>
              <p className="text-gray-600 dark:text-gray-300">Generate shopping lists based on your meal plans.</p>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
