import { pgTable, serial, text, date, time } from 'drizzle-orm/pg-core'

export const bookings = pgTable('bookings', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  service: text('service').notNull(),
  date: date('date').notNull(),
  time: time('time').notNull(),
})

