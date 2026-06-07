import { AnimatedText } from '@/components/shared/AnimatedText';
import { Container } from '@/components/shared/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { amenities, homeContent, testimonials } from '@/lib/content';

export function TestimonialSection() {
  return (
    <section className="section-padding bg-stone" id="reviews">
      <Container>
        <div className="grid gap-12 laptop:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading title={homeContent.amenitiesHeading} description={homeContent.amenitiesDescription} />
            <div className="mt-8 grid gap-3 tablet:grid-cols-2">
              {amenities.map((amenity) => (
                <div className="rounded-full border border-forest/12 bg-white/85 px-5 py-3 text-sm font-medium text-forest shadow-sm transition hover:border-copper/40 hover:bg-white" key={amenity}>
                  {amenity}
                </div>
              ))}
            </div>
            <h3 className="mt-12 font-heading text-4xl text-evergreen">{homeContent.holidayHeading}</h3>
          </div>
          <div>
            <SectionHeading
              title={homeContent.testimonialsHeading}
              description={homeContent.testimonialsDescription}
            />
            <div className="mt-8 grid gap-5">
              {testimonials.map((testimonial) => (
                <AnimatedText key={testimonial.quote}>
                  <figure className="rounded-[1.75rem] border border-forest/5 bg-white p-6 shadow-luxury transition duration-300 hover:-translate-y-1 hover:shadow-luxury-lg tablet:p-7">
                    <div className="font-accent text-sm tracking-[0.2em] text-copper">
                      {testimonial.rating}
                    </div>
                    <blockquote className="mt-4 text-lg leading-8 text-charcoal/76">
                      {testimonial.quote}
                    </blockquote>
                    <figcaption className="mt-5 font-accent text-sm font-bold uppercase tracking-[0.18em] text-forest/70">
                      — {testimonial.guestName}
                    </figcaption>
                  </figure>
                </AnimatedText>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
