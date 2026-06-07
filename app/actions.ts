'use server';

import { getPrisma } from '@/lib/prisma';
import {
  bookingSchema,
  contactSchema,
  newsletterSchema,
  type BookingInput,
  type ContactInput,
  type NewsletterInput
} from '@/lib/validation';

export async function submitContactAction(input: ContactInput) {
  const data = contactSchema.parse(input);

  if (process.env.DATABASE_URL) {
    const prisma = await getPrisma();
    if (prisma) {
      await prisma.contactSubmission.create({ data });
    }
  }

  return { ok: true };
}

export async function submitBookingAction(input: BookingInput) {
  const data = bookingSchema.parse(input);

  if (process.env.DATABASE_URL) {
    const prisma = await getPrisma();
    if (prisma) {
      await prisma.bookingSubmission.create({ data });
    }
  }

  return { ok: true };
}

export async function submitNewsletterAction(input: NewsletterInput) {
  const data = newsletterSchema.parse(input);

  if (process.env.DATABASE_URL) {
    const prisma = await getPrisma();
    if (prisma) {
      await prisma.newsletterSubscription.upsert({
        where: { email: data.email },
        create: data,
        update: {}
      });
    }
  }

  return { ok: true };
}
