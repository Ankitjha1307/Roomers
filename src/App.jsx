import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to Vite + React + Tailwind CSS!
        </h1>
        <p className="text-gray-600 mb-6">
          Your project is successfully set up with Tailwind CSS 3.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-200">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default App
