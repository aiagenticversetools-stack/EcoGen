'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/shared/Button';
import { Container } from '@/components/shared/Container';
import { LoadingStates } from '@/components/shared/LoadingStates';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { accommodations, homeContent, siteSettings } from '@/lib/content';
import { bookingSchema, type BookingInput } from '@/lib/validation';
import { useBookingStore } from '@/store/booking-store';

export function BookingSection() {
  const phoneHref = siteSettings.phone.replace(/\s/g, '');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const step = useBookingStore((state) => state.step);
  const setStep = useBookingStore((state) => state.setStep);
  const selectedAccommodation = useBookingStore((state) => state.selectedAccommodation);
  const setSelectedAccommodation = useBookingStore((state) => state.setSelectedAccommodation);
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    reset,
    setValue
  } = useForm<BookingInput>({
    resolver: zodResolver(bookingSchema),
    defaultValues: { accommodation: selectedAccommodation }
  });

  const onSubmit = async (data: BookingInput) => {
    setStatus('idle');
    const response = await fetch('/api/booking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      setStatus('success');
      setStep(3);
      reset();
      return;
    }

    setStatus('error');
  };

  return (
    <section className="section-padding bg-evergreen text-stone">
      <Container>
        <div className="grid gap-12 laptop:grid-cols-[0.8fr_1.2fr] laptop:items-start">
          <div>
            <SectionHeading
              title={homeContent.bookingHeading}
              description={siteSettings.address}
              className="[&_h2]:text-stone [&_p]:text-stone/72"
            />
            <a
              className="mt-8 inline-block font-heading text-5xl text-sand transition hover:text-copper"
              href={`tel:${phoneHref}`}
            >
              {siteSettings.phone}
            </a>
          </div>
          <div className="rounded-[2rem] bg-stone p-6 text-charcoal shadow-luxury-lg tablet:p-9">
            <div className="mb-8 flex gap-3">
              {[1, 2, 3].map((item) => (
                <span
                  className={`h-2 flex-1 rounded-full ${item <= step ? 'bg-copper' : 'bg-sand'}`}
                  key={item}
                />
              ))}
            </div>
            {step === 1 ? (
              <div>
                <h3 className="font-heading text-4xl text-evergreen">Accommodation Selection</h3>
                <div className="mt-6 grid gap-4">
                  {accommodations.map((accommodation) => (
                    <button
                      className="rounded-[1.5rem] border border-forest/12 bg-white p-5 text-left transition hover:border-copper"
                      key={accommodation.title}
                      onClick={() => {
                        setSelectedAccommodation(accommodation.title);
                        setValue('accommodation', accommodation.title);
                        setStep(2);
                      }}
                      type="button"
                    >
                      <span className="font-heading text-3xl text-evergreen">{accommodation.title}</span>
                      <span className="mt-2 block text-sm leading-6 text-charcoal/70">
                        {accommodation.description}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ) : null}
            {step === 2 ? (
              <form onSubmit={handleSubmit(onSubmit)}>
                <h3 className="font-heading text-4xl text-evergreen">Confirmation States</h3>
                <div className="mt-6 grid gap-5">
                  <Field label="Your Name (required)" error={errors.name?.message}>
                    <input {...register('name')} autoComplete="name" className="form-input" placeholder="Enter your full name" />
                  </Field>
                  <Field label="Your Email (required)" error={errors.email?.message}>
                    <input {...register('email')} autoComplete="email" className="form-input" placeholder="name@example.com" type="email" />
                  </Field>
                  <Field label="Phone Number (optional)" error={errors.phone?.message}>
                    <input {...register('phone')} autoComplete="tel" className="form-input" inputMode="tel" placeholder="+91 8106935999" />
                  </Field>
                  <Field label="Preferred Dates / Timeframe (optional)" error={errors.preferredDates?.message}>
                    <input {...register('preferredDates')} className="form-input" placeholder="Weekend, date range, or preferred month" />
                  </Field>
                  <Field label="Number of Guests (optional)" error={errors.guests?.message}>
                    <input {...register('guests')} className="form-input" inputMode="numeric" placeholder="Approximate guest count" />
                  </Field>
                  <input type="hidden" {...register('accommodation')} />
                  <Field label="Your Message" error={errors.message?.message}>
                    <textarea {...register('message')} className="form-input min-h-32 resize-y" placeholder="Tell us what you are planning..." />
                  </Field>
                </div>
                <div className="mt-7 flex flex-col gap-3 tablet:flex-row">
                  <Button type="button" variant="secondary" onClick={() => setStep(1)} className="w-full tablet:w-auto">
                    Accommodation Selection
                  </Button>
                  <Button type="submit" disabled={isSubmitting} className="w-full tablet:w-auto">
                    {isSubmitting ? <LoadingStates label="Sending" /> : 'Booking Inquiry'}
                  </Button>
                </div>
                {status === 'error' ? (
                  <p className="mt-4 text-red-700" role="alert">
                    Something went wrong. Please try again.
                  </p>
                ) : null}
              </form>
            ) : null}
            {step === 3 || status === 'success' ? (
              <div>
                <h3 className="font-heading text-5xl text-evergreen">For Bookings call +918106935999</h3>
                <p className="mt-5 text-charcoal/70">Message sent successfully.</p>
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Field({
  children,
  error,
  label
}: {
  children: React.ReactNode;
  error?: string;
  label: string;
}) {
  return (
    <label className="grid gap-2 font-accent text-xs font-semibold uppercase tracking-[0.14em] text-forest tablet:text-sm">
      {label}
      {children}
      {error ? <span className="text-xs font-medium normal-case tracking-normal text-red-700">{error}</span> : null}
    </label>
  );
}
