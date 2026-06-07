import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Your Name (required)'),
  email: z.string().email('Your Email (required)'),
  phone: z.string().optional(),
  reason: z.enum(['Booking Inquiry', 'General Question', 'Partnership/Media', 'Feedback']),
  timeframe: z.string().optional(),
  guests: z.string().optional(),
  message: z.string().min(5, 'Your Message')
});

export const bookingSchema = z.object({
  name: z.string().min(2, 'Your Name (required)'),
  email: z.string().email('Your Email (required)'),
  phone: z.string().optional(),
  preferredDates: z.string().optional(),
  guests: z.string().optional(),
  accommodation: z.string().optional(),
  message: z.string().optional()
});

export const newsletterSchema = z.object({
  email: z.string().email('Your Email (required)')
});

export type ContactInput = z.infer<typeof contactSchema>;
export type BookingInput = z.infer<typeof bookingSchema>;
export type NewsletterInput = z.infer<typeof newsletterSchema>;
