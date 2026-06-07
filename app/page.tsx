import { AboutSection } from '@/components/sections/AboutSection';
import { AccommodationSection } from '@/components/sections/AccommodationSection';
import { BookingSection } from '@/components/sections/BookingSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { ProgramsSection } from '@/components/sections/ProgramsSection';
import { TestimonialSection } from '@/components/sections/TestimonialSection';
import { HeroSection } from '@/components/hero/HeroSection';
import { PageTransition } from '@/components/layout/PageTransition';
import { siteSettings } from '@/lib/content';

export default function HomePage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Resort',
    name: siteSettings.name,
    slogan: siteSettings.tagline,
    telephone: siteSettings.phone,
    address: siteSettings.address,
    url: siteSettings.url
  };

  return (
    <PageTransition>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HeroSection />
      <AboutSection />
      <AccommodationSection />
      <ProgramsSection />
      <GallerySection />
      <TestimonialSection />
      <ContactSection />
      <BookingSection />
    </PageTransition>
  );
}
