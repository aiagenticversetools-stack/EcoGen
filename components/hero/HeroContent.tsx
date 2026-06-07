'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/shared/Button';
import { homeContent } from '@/lib/content';

export function HeroContent() {
  return (
    <motion.div
      className="relative z-20 max-w-5xl text-left font-heading text-stone"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.14, delayChildren: 0.18 }
        }
      }}
    >
      <motion.p
        className="max-w-3xl text-lg font-semibold uppercase leading-tight tracking-[0.14em] text-sand tablet:text-2xl laptop:text-3xl"
        variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
      >
        {homeContent.heroSubtitle}
      </motion.p>
      <motion.h1
        className="mt-4 text-[3.8rem] font-semibold leading-[0.9] tracking-[-0.04em] tablet:text-[6rem] laptop:text-[8rem]"
        variants={{ hidden: { opacity: 0, y: 26 }, visible: { opacity: 1, y: 0 } }}
      >
        {homeContent.heroTitle}
      </motion.h1>
      <motion.p
        className="mt-7 max-w-3xl text-2xl leading-tight text-stone/92 tablet:text-4xl"
        variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }}
      >
        {homeContent.heroKicker}
      </motion.p>
      <motion.p
        className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-stone tablet:text-5xl"
        variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }}
      >
        {homeContent.heroWelcome}
      </motion.p>
      <motion.div
        className="mt-9 flex w-full flex-col gap-3 tablet:w-auto tablet:flex-row tablet:gap-4"
        variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }}
      >
        <Button href="/booking" className="w-full tablet:w-auto">Book Now</Button>
        <Button href="/rooms-stay" variant="secondary" className="w-full border-white/35 bg-white/15 text-stone hover:text-evergreen tablet:w-auto">
          {homeContent.heroCta}
        </Button>
      </motion.div>
    </motion.div>
  );
}
