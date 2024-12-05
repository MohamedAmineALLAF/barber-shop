import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const services = [
  {
    title: "Classic Cut",
    description: "Traditional barbershop haircut with precision and style",
    price: "$25",
    duration: "30 min"
  },
  {
    title: "Fade Master",
    description: "Expert fade haircut for a modern, clean look",
    price: "$35",
    duration: "45 min"
  },
  {
    title: "Beard Grooming",
    description: "Professional beard trimming and shaping",
    price: "$20",
    duration: "20 min"
  },
  {
    title: "Hair & Beard Combo",
    description: "Complete hair and beard styling package",
    price: "$50",
    duration: "1 hour"
  },
]

const packs = [
  {
    title: "Monthly Maintenance",
    description: "4 Classic Cuts per month",
    price: "$80/month",
    savings: "Save $20"
  },
  {
    title: "Style Enthusiast",
    description: "2 Fade Masters and 2 Beard Groomings per month",
    price: "$100/month",
    savings: "Save $30"
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{service.price}</p>
                <p className="text-sm text-gray-500">{service.duration}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <h3 className="text-2xl font-bold text-center mb-6">Value Packs</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {packs.map((pack, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{pack.title}</CardTitle>
                <CardDescription>{pack.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold mb-2">{pack.price}</p>
                <p className="text-sm text-green-500 mb-4">{pack.savings}</p>
                <Link href="/booking">
                  <Button>Subscribe Now</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

