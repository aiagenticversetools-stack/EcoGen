import type { Metadata } from 'next';
import { PageTransition } from '@/components/layout/PageTransition';
import { ProgramsSection } from '@/components/sections/ProgramsSection';

export const metadata: Metadata = {
  title: 'Events'
};

export default function EventsPage() {
  return (
    <PageTransition>
      <div className="pt-24">
        <ProgramsSection />
      </div>
    </PageTransition>
  );
}
