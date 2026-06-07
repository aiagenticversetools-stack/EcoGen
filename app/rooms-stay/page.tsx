import type { Metadata } from 'next';
import { AccommodationSection } from '@/components/sections/AccommodationSection';
import { PageTransition } from '@/components/layout/PageTransition';

export const metadata: Metadata = {
  title: 'Rooms & Stay'
};

export default function RoomsStayPage() {
  return (
    <PageTransition>
      <div className="pt-24">
        <AccommodationSection />
      </div>
    </PageTransition>
  );
}
