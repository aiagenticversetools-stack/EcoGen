import type { Metadata } from 'next';
import { PageTransition } from '@/components/layout/PageTransition';
import { Container } from '@/components/shared/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { aboutPageContent } from '@/lib/content';

export const metadata: Metadata = {
  title: 'About'
};

export default function AboutPage() {
  return (
    <PageTransition>
      <section className="section-padding bg-organic-radial pt-40">
        <Container>
          <SectionHeading title={aboutPageContent.title} description={aboutPageContent.description} />
          <div className="mt-14 rounded-[2rem] bg-white p-8 shadow-luxury tablet:p-12">
            <h2 className="font-heading text-5xl text-evergreen">{aboutPageContent.storyHeading}</h2>
            <div className="mt-6 whitespace-pre-line text-lg leading-9 text-charcoal/76">
              {aboutPageContent.story}
            </div>
          </div>
        </Container>
      </section>
    </PageTransition>
  );
}
