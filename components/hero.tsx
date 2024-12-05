import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Book Your Appointment Today</h1>
        <p className="text-xl mb-8">Experience top-notch service at your convenience</p>
        <Link href="/booking">
          <Button size="lg" variant="secondary">Book Now</Button>
        </Link>
      </div>
    </section>
  )
}

