'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  service: z.string().min(1, { message: "Please select a service." }),
  date: z.string().min(1, { message: "Please select a date." }),
  time: z.string().min(1, { message: "Please select a time." }),
})

const services = [
  { id: "classic-cut", name: "Classic Cut", price: 25 },
  { id: "fade-master", name: "Fade Master", price: 35 },
  { id: "beard-grooming", name: "Beard Grooming", price: 20 },
  { id: "hair-beard-combo", name: "Hair & Beard Combo", price: 50 },
  { id: "monthly-maintenance", name: "Monthly Maintenance Pack", price: 80 },
  { id: "style-enthusiast", name: "Style Enthusiast Pack", price: 100 },
]

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      service: "",
      date: "",
      time: "",
    },
  })

  useEffect(() => {
    const subscription = form.watch((value, { name }) => {
      if (name === 'service') {
        const service = services.find(s => s.id === value.service)
        setSelectedService(service || null)
      }
    })
    return () => subscription.unsubscribe()
  }, [form.watch])

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })

      if (response.ok) {
        setSubmitSuccess(true)
        form.reset()
        setSelectedService(null)
      } else {
        throw new Error('Booking failed')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('An error occurred while booking. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Book Your Appointment</CardTitle>
        <CardDescription>Fill out the form below to schedule your visit</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="john@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.id} value={service.id}>
                          {service.name} - ${service.price}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Time</FormLabel>
                  <FormControl>
                    <Input type="time" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Booking...' : 'Book Appointment'}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        {selectedService && (
          <div className="w-full text-center">
            <p className="text-lg font-semibold">Total: ${selectedService.price}</p>
          </div>
        )}
        {submitSuccess && (
          <p className="text-green-600 mt-4 text-center w-full">Booking successful! We'll see you soon.</p>
        )}
      </CardFooter>
    </Card>
  )
}

