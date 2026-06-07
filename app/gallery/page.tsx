import type { Metadata } from 'next';
import { PageTransition } from '@/components/layout/PageTransition';
import { GallerySection } from '@/components/sections/GallerySection';
import { galleryPageItems } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Gallery'
};

export default function GalleryPage() {
  return (
    <PageTransition>
      <div className="pt-24">
        <GallerySection items={galleryPageItems} showDescription={false} showViewAll={false} />
      </div>
    </PageTransition>
  );
}
