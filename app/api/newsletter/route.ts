import { NextResponse } from 'next/server';
import { getPrisma } from '@/lib/prisma';
import { newsletterSchema } from '@/lib/validation';

export async function POST(request: Request) {
  const payload: unknown = await request.json();
  const parsed = newsletterSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json({ errors: parsed.error.flatten().fieldErrors }, { status: 400 });
  }

  if (process.env.DATABASE_URL) {
    const prisma = await getPrisma();
    if (prisma) {
      await prisma.newsletterSubscription.upsert({
        where: { email: parsed.data.email },
        create: parsed.data,
        update: {}
      });
    }
  }

  return NextResponse.json({ ok: true });
}
