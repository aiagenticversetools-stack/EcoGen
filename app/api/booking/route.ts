import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { getPrisma } from '@/lib/prisma';
import { bookingSchema } from '@/lib/validation';

export async function POST(request: Request) {
  const payload: unknown = await request.json();
  const parsed = bookingSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json({ errors: parsed.error.flatten().fieldErrors }, { status: 400 });
  }

  if (process.env.DATABASE_URL) {
    const prisma = await getPrisma();
    if (prisma) {
      await prisma.bookingSubmission.create({ data: parsed.data });
    }
  }

  if (process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? 'EcoGen Retreat <onboarding@resend.dev>',
      to: process.env.CONTACT_TO_EMAIL,
      subject: 'EcoGen Booking Inquiry',
      text: [
        `Name: ${parsed.data.name}`,
        `Email: ${parsed.data.email}`,
        `Phone: ${parsed.data.phone ?? ''}`,
        `Preferred Dates / Timeframe: ${parsed.data.preferredDates ?? ''}`,
        `Number of Guests: ${parsed.data.guests ?? ''}`,
        `Accommodation: ${parsed.data.accommodation ?? ''}`,
        `Message: ${parsed.data.message ?? ''}`
      ].join('\n')
    });
  }

  return NextResponse.json({ ok: true });
}
