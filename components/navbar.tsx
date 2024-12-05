import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800">BarberShop</Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-gray-800 hover:text-gray-600">Home</Link>
            <Link href="/booking">
              <Button variant="outline">Book Now</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

