import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const testimonials = [
  { name: "John Doe", comment: "Great service! I love my new haircut." },
  { name: "Jane Smith", comment: "The staff is very professional and friendly." },
  { name: "Mike Johnson", comment: "Best salon in town. Highly recommended!" },
]

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{testimonial.name}</CardTitle>
                <CardDescription>"{testimonial.comment}"</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

