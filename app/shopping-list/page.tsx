import Navbar from '../../components/Navbar'

export default function ShoppingList() {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Shopping List</h1>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">This Week's Shopping List</h2>
          <p className="text-gray-600 dark:text-gray-300">Your shopping list will be displayed here.</p>
        </div>
      </div>
    </main>
  )
}