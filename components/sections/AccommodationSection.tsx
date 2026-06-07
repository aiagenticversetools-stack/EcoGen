import Image from 'next/image';
import { AnimatedText } from '@/components/shared/AnimatedText';
import { Button } from '@/components/shared/Button';
import { Container } from '@/components/shared/Container';
import { accommodations, homeContent } from '@/lib/content';

export function AccommodationSection() {
  const accommodation = accommodations[0];

  return (
    <section className="section-padding bg-sand/70">
      <Container>
        <AnimatedText>
          <div className="group grid overflow-hidden rounded-[2rem] bg-evergreen shadow-luxury-lg tablet:rounded-[2.75rem] laptop:grid-cols-2">
            <div className="relative min-h-[420px] overflow-hidden laptop:min-h-[560px]">
              <Image
                alt={accommodation.title}
                className="object-cover transition duration-700 group-hover:scale-105"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                src={accommodation.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-evergreen/45 via-transparent to-transparent" />
            </div>
            <div className="flex flex-col justify-center p-6 text-stone tablet:p-14">
              <p className="eyebrow mb-5 text-sand">{homeContent.collectionEyebrow}</p>
              <h2 className="font-heading text-5xl leading-none tracking-[-0.03em] tablet:text-7xl">
                {accommodation.title}
              </h2>
              <p className="mt-7 max-w-xl text-lg leading-8 text-stone/78 tablet:text-xl">{accommodation.description}</p>
              <div className="mt-10">
                <Button href="/rooms-stay" variant="secondary" className="w-full border-white/30 bg-white/10 text-stone hover:text-evergreen tablet:w-auto">
                  Rooms & Stay
                </Button>
              </div>
            </div>
          </div>
        </AnimatedText>
      </Container>
    </section>
  );
}
