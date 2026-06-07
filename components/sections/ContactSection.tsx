'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/shared/Button';
import { Container } from '@/components/shared/Container';
import { LoadingStates } from '@/components/shared/LoadingStates';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { contactContent, siteSettings, socialLinks } from '@/lib/content';
import { contactSchema, type ContactInput } from '@/lib/validation';

export function ContactSection() {
  const phoneHref = siteSettings.phone.replace(/\s/g, '');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    reset
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { reason: 'Booking Inquiry' }
  });

  const onSubmit = async (data: ContactInput) => {
    setStatus('idle');
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      setStatus('success');
      reset();
      return;
    }

    setStatus('error');
  };

  return (
    <section className="section-padding bg-sand/70">
      <Container>
        <div className="grid gap-12 laptop:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading eyebrow={contactContent.eyebrow} title={contactContent.heading} />
            <div className="mt-10 grid gap-4">
              <div className="glass-panel rounded-[1.5rem] p-5">
                <h3 className="font-heading text-3xl text-evergreen">Call Us</h3>
                <a className="mt-2 block text-charcoal/70" href={`tel:${phoneHref}`}>
                  {siteSettings.phone}
                </a>
              </div>
              <div className="glass-panel rounded-[1.5rem] p-5">
                <h3 className="font-heading text-3xl text-evergreen">Email Us</h3>
                <a className="mt-2 block text-charcoal/70" href={`mailto:${siteSettings.email}`}>
                  {siteSettings.email}
                </a>
              </div>
              <div className="glass-panel rounded-[1.5rem] p-5">
                <h3 className="font-heading text-3xl text-evergreen">Locate Us</h3>
                <p className="mt-2 text-charcoal/70">{siteSettings.address}</p>
              </div>
              <div className="glass-panel rounded-[1.5rem] p-5">
                <h3 className="font-heading text-3xl text-evergreen">Opening Time</h3>
                <p className="mt-2 text-charcoal/70">{siteSettings.openingTime}</p>
              </div>
            </div>
            <h3 className="mt-8 font-heading text-3xl text-evergreen">{contactContent.followHeading}</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  aria-label={`Follow EcoGen Retreat on ${link.label}`}
                  className="rounded-full border border-forest/15 bg-white px-5 py-3 font-accent text-xs font-bold uppercase tracking-[0.16em] text-forest transition hover:border-copper hover:text-copper"
                  href={link.href}
                  key={link.label}
                  rel="noopener noreferrer"
                  target={link.href === '#' ? undefined : '_blank'}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <form className="rounded-[2rem] bg-white p-5 shadow-luxury tablet:p-9" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-5">
              <Field label="Your Name (required)" error={errors.name?.message}>
                <input {...register('name')} autoComplete="name" className="form-input" placeholder="Enter your full name" />
              </Field>
              <Field label="Your Email (required)" error={errors.email?.message}>
                <input {...register('email')} autoComplete="email" className="form-input" placeholder="name@example.com" type="email" />
              </Field>
              <Field label="Phone Number (optional)" error={errors.phone?.message}>
                <input {...register('phone')} autoComplete="tel" className="form-input" inputMode="tel" placeholder="+91 8106935999" />
              </Field>
              <Field label="Reason for Contact" error={errors.reason?.message}>
                <select {...register('reason')} className="form-input">
                  {contactContent.reasons.map((reason) => (
                    <option key={reason} value={reason}>
                      {reason}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Preferred Dates / Timeframe (optional)" error={errors.timeframe?.message}>
                <input {...register('timeframe')} className="form-input" placeholder="Weekend, date range, or preferred month" />
              </Field>
              <Field label="Number of Guests (optional)" error={errors.guests?.message}>
                <input {...register('guests')} className="form-input" inputMode="numeric" placeholder="Approximate guest count" />
              </Field>
              <Field label="Your Message" error={errors.message?.message}>
                <textarea {...register('message')} className="form-input min-h-36 resize-y" placeholder="Tell us what you are planning..." />
              </Field>
            </div>
            <div className="mt-7">
              <Button type="submit" disabled={isSubmitting} className="w-full tablet:w-auto">
                {isSubmitting ? <LoadingStates label="Sending" /> : 'Send Message'}
              </Button>
            </div>
            {status === 'success' ? (
              <p className="mt-4 text-success" role="status">
                Message sent successfully.
              </p>
            ) : null}
            {status === 'error' ? (
              <p className="mt-4 text-red-700" role="alert">
                Something went wrong. Please try again.
              </p>
            ) : null}
          </form>
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
