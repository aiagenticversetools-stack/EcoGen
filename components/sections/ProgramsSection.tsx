import Image from 'next/image';
import { AnimatedText } from '@/components/shared/AnimatedText';
import { Container } from '@/components/shared/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { homeContent, programs } from '@/lib/content';

export function ProgramsSection() {
  return (
    <section className="section-padding bg-stone">
      <Container>
        <SectionHeading title={homeContent.celebrationHeading} align="center" />
        <div className="mt-12 grid gap-5 tablet:grid-cols-2 laptop:mt-14 laptop:grid-cols-5">
          {programs.map((program, index) => (
            <AnimatedText key={program.title} className={index % 2 ? 'laptop:mt-12' : ''}>
              <article className="group overflow-hidden rounded-[1.75rem] bg-white shadow-luxury transition duration-500 hover:-translate-y-2 hover:shadow-luxury-lg">
                <div className="relative h-72 overflow-hidden laptop:h-64">
                  <Image
                    alt={program.title}
                    className="object-cover transition duration-700 group-hover:scale-110"
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 768px) 50vw, 100vw"
                    src={program.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-evergreen/78 via-evergreen/12 to-transparent opacity-90 transition duration-500 group-hover:opacity-100" />
                </div>
                <div className="p-5 transition duration-500 group-hover:bg-stone tablet:p-6">
                  <h3 className="font-heading text-3xl leading-none text-evergreen">{program.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-charcoal/70">{program.description}</p>
                </div>
              </article>
            </AnimatedText>
          ))}
        </div>
      </Container>
    </section>
  );
}
