'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '@/components/shared/Button';
import { Container } from '@/components/shared/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { cn } from '@/lib/utils';
import type { GalleryItem } from '@/types/site';
import { featuredGallery, homeContent } from '@/lib/content';
import { useGalleryStore } from '@/store/gallery-store';

interface GallerySectionProps {
  items?: GalleryItem[];
  showDescription?: boolean;
  showViewAll?: boolean;
}

export function GallerySection({
  items = featuredGallery,
  showDescription = true,
  showViewAll = true
}: GallerySectionProps) {
  const activeIndex = useGalleryStore((state) => state.activeIndex);
  const setActiveIndex = useGalleryStore((state) => state.setActiveIndex);
  const next = useGalleryStore((state) => state.next);
  const previous = useGalleryStore((state) => state.previous);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (activeIndex === null) {
        return;
      }

      if (event.key === 'Escape') {
        setActiveIndex(null);
      }

      if (event.key === 'ArrowRight') {
        next(items.length);
      }

      if (event.key === 'ArrowLeft') {
        previous(items.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, items.length, next, previous, setActiveIndex]);

  const activeItem = activeIndex === null ? null : items[activeIndex];
  const handleTouchEnd = (x: number) => {
    if (touchStartX === null) {
      return;
    }

    const distance = touchStartX - x;

    if (Math.abs(distance) > 48) {
      if (distance > 0) {
        next(items.length);
      } else {
        previous(items.length);
      }
    }

    setTouchStartX(null);
  };

  return (
    <section className="section-padding bg-organic-radial">
      <Container>
        <SectionHeading
          eyebrow={homeContent.collectionEyebrow}
          title={homeContent.galleryHeading}
          description={showDescription ? homeContent.galleryDescription : undefined}
          align="center"
        />
        <div className="mt-12 columns-1 gap-5 tablet:columns-2 laptop:mt-14 laptop:columns-3">
          {items.map((item, index) => (
            <motion.button
              aria-label={`Open ${item.title}`}
              className={cn(
                'group mb-5 block w-full break-inside-avoid overflow-hidden rounded-[1.75rem] bg-white text-left shadow-luxury transition duration-300 focus-visible:outline-copper hover:-translate-y-1 hover:shadow-luxury-lg',
                index % 3 === 1 ? 'laptop:mt-10' : ''
              )}
              initial={{ opacity: 0, y: 28 }}
              key={`${item.title}-${index}`}
              onClick={() => setActiveIndex(index)}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.25 }}
              whileInView={{ opacity: 1, y: 0 }}
              type="button"
            >
              <div className="relative h-[320px] overflow-hidden tablet:h-[360px]">
                <Image
                  alt={item.alt}
                  className="object-cover transition duration-700 group-hover:scale-110"
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  src={item.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-evergreen/80 via-evergreen/10 to-transparent" />
                <h3 className="absolute bottom-0 p-5 font-heading text-3xl leading-none text-stone tablet:p-6">
                  {item.title}
                </h3>
              </div>
            </motion.button>
          ))}
        </div>
        {showViewAll ? (
          <div className="mt-12 text-center">
            <Button href="/gallery" variant="secondary">
              Our Featured Gallery
            </Button>
          </div>
        ) : null}
      </Container>

      <AnimatePresence>
        {activeItem ? (
          <motion.div
            className="fixed inset-0 z-[60] grid place-items-center bg-evergreen/92 p-4 backdrop-blur-xl tablet:p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            onTouchStart={(event) => setTouchStartX(event.touches[0]?.clientX ?? null)}
            onTouchEnd={(event) => handleTouchEnd(event.changedTouches[0]?.clientX ?? 0)}
          >
            <button
              aria-label="Close gallery lightbox"
              className="absolute right-4 top-4 rounded-full border border-white/25 bg-white/10 px-4 py-2 font-accent text-xs font-bold uppercase tracking-[0.18em] text-stone transition hover:bg-white/20 tablet:right-5 tablet:top-5"
              onClick={() => setActiveIndex(null)}
              type="button"
            >
              Close
            </button>
            <button
              aria-label="Previous image"
              className="absolute bottom-5 left-5 rounded-full bg-white/10 px-4 py-3 text-stone transition hover:bg-white/20 tablet:bottom-auto tablet:top-1/2"
              onClick={() => previous(items.length)}
              type="button"
            >
              Prev
            </button>
            <div className="relative h-[68vh] w-full max-w-5xl overflow-hidden rounded-[1.5rem] shadow-luxury-lg tablet:h-[74vh] tablet:rounded-[2rem]">
              <Image alt={activeItem.alt} className="object-cover" fill src={activeItem.image} sizes="90vw" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-evergreen/86 to-transparent p-8">
                <h3 className="font-heading text-4xl text-stone">{activeItem.title}</h3>
              </div>
            </div>
            <button
              aria-label="Next image"
              className="absolute bottom-5 right-5 rounded-full bg-white/10 px-4 py-3 text-stone transition hover:bg-white/20 tablet:bottom-auto tablet:top-1/2"
              onClick={() => next(items.length)}
              type="button"
            >
              Next
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
