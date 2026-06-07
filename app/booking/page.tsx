import type { Metadata } from 'next';
import { PageTransition } from '@/components/layout/PageTransition';
import { BookingSection } from '@/components/sections/BookingSection';

export const metadata: Metadata = {
  title: 'Booking'
};

export default function BookingPage() {
  return (
    <PageTransition>
      <div className="pt-24">
        <BookingSection />
      </div>
    </PageTransition>
  );
}
