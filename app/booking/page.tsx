import BookingForm from '@/components/booking-form'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function BookingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-6">Book Your Appointment</h1>
          <div className="max-w-md mx-auto">
            <BookingForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

