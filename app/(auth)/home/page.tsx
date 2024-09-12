// app/page.tsx
import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="flex-center size-full bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to ABSA Capital</h1>
        <p className="text-xl mb-8">Your trusted partner in financial solutions</p>
        <Link 
          href="/sign-in" 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Login
        </Link>
       
      </div>
    </div>
  )
}