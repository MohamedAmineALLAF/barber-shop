import { NextResponse } from 'next/server'
import { neon, neonConfig } from '@neondatabase/serverless'

neonConfig.fetchConnectionCache = true

const sql = neon(process.env.DATABASE_URL!)

export async function POST(req: Request) {
  try {
    const { name, email, service, date, time } = await req.json()

    const result = await sql`
      INSERT INTO bookings (name, email, service, date, time)
      VALUES (${name}, ${email}, ${service}, ${date}, ${time})
      RETURNING id
    `

    return NextResponse.json({ message: 'Booking successful', id: result[0].id }, { status: 200 })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ message: 'Booking failed' }, { status: 500 })
  }
}

