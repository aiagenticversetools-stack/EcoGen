import type { Metadata } from 'next';
import { PageTransition } from '@/components/layout/PageTransition';
import { ContactSection } from '@/components/sections/ContactSection';

export const metadata: Metadata = {
  title: 'Contact'
};

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="pt-24">
        <ContactSection />
      </div>
    </PageTransition>
  );
}
