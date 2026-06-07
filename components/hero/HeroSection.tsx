import Image from 'next/image';
import { AmbientCanvas } from '@/components/hero/AmbientCanvas';
import { HeroContent } from '@/components/hero/HeroContent';
import { Container } from '@/components/shared/Container';

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-evergreen">
      <div className="absolute inset-0 scale-105">
        <Image
          alt="EcoGen Retreat"
          className="object-cover motion-safe:animate-[float_18s_ease-in-out_infinite]"
          fill
          priority
          src="/images/hero-retreat-daytime.png"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-evergreen/86 via-evergreen/48 to-evergreen/12" />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_68%_20%,rgba(232,221,203,0.22),transparent_26%),linear-gradient(180deg,rgba(26,46,34,0.18),rgba(26,46,34,0.7))]" />
      <AmbientCanvas />
      <Container className="relative z-20 flex min-h-[100svh] items-center pb-12 pt-28 tablet:pt-32">
        <HeroContent />
      </Container>
      <a
        href="#about"
        aria-label="Scroll to explore"
        className="group absolute bottom-7 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-stone/80 transition hover:text-stone tablet:flex"
      >
        <span className="font-accent text-[10px] font-bold uppercase tracking-[0.3em]">Scroll</span>
        <span className="relative flex h-12 w-7 items-start justify-center rounded-full border border-stone/40 p-1.5">
          <span className="h-2.5 w-1 rounded-full bg-stone/80 motion-safe:animate-[float_1.8s_ease-in-out_infinite]" />
        </span>
      </a>
    </section>
  );
}
