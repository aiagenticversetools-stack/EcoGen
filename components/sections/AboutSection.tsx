import Image from 'next/image';
import { AnimatedText } from '@/components/shared/AnimatedText';
import { Container } from '@/components/shared/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { homeContent } from '@/lib/content';

export function AboutSection() {
  return (
    <section className="section-padding bg-stone" id="about">
      <Container>
        <div className="grid gap-12 laptop:grid-cols-[0.9fr_1.1fr] laptop:items-center">
          <AnimatedText>
            <div className="relative min-h-[520px] overflow-hidden rounded-[2.5rem] shadow-luxury">
              <Image
                alt="Ecogen Retreat"
                className="object-cover transition duration-700 hover:scale-105"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                src="/images/front-view-photo.png"
              />
            </div>
          </AnimatedText>
          <AnimatedText>
            <SectionHeading
              eyebrow={homeContent.aboutEyebrow}
              title={homeContent.aboutHeading}
              description={homeContent.aboutDescription}
            />
          </AnimatedText>
        </div>
      </Container>
    </section>
  );
}
