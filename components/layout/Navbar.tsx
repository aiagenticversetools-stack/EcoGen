'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { navigation, siteSettings } from '@/lib/content';
import { useUiStore } from '@/store/ui-store';
import { Button } from '@/components/shared/Button';

export function Navbar() {
  const open = useUiStore((state) => state.openMobileMenu);
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-40 border-b backdrop-blur-xl transition-all duration-500 ${
        isScrolled
          ? 'border-forest/10 bg-stone/[0.94] shadow-sm'
          : 'border-white/10 bg-evergreen/18'
      }`}
    >
      <div className="site-container flex h-[var(--site-header-height)] items-center justify-between">
        <Link className="group flex items-center gap-3" href="/" aria-label="Ecogen Retreat home">
          <span className="relative flex h-11 w-28 items-center overflow-hidden rounded-full border border-forest/10 bg-white px-3 shadow-sm">
            <Image
              alt="EcoGen Retreat"
              className="object-contain"
              fill
              sizes="112px"
              src="/images/ecogen-logo.png"
            />
          </span>
          <span className="hidden tablet:block">
            <span
              className={`block font-heading text-2xl leading-none transition group-hover:text-copper laptop:text-3xl ${
                isScrolled ? 'text-evergreen' : 'text-stone'
              }`}
            >
              {siteSettings.name}
            </span>
            <span
              className={`font-accent text-[10px] font-bold uppercase tracking-[0.28em] ${
                isScrolled ? 'text-forest/70' : 'text-stone/70'
              }`}
            >
              {siteSettings.tagline}
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 laptop:flex" aria-label="Main navigation">
          {navigation.map((item) => {
            const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);

            return (
              <Link
                aria-current={isActive ? 'page' : undefined}
                className={`group relative rounded-full px-2 py-2 font-accent text-[11px] font-bold uppercase tracking-[0.18em] transition hover:text-copper ${
                  isScrolled ? 'text-evergreen/80' : 'text-stone/86'
                } ${isActive ? 'text-copper' : ''}`}
                href={item.href}
                key={item.href}
              >
                {item.label}
                <span
                  className={`absolute inset-x-2 -bottom-0.5 h-px origin-left bg-copper transition-transform duration-300 group-hover:scale-x-100 ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </Link>
            );
          })}
        </nav>
        <div className="hidden laptop:block">
          <Button href="/booking">Book Now</Button>
        </div>
        <button
          aria-label="Open navigation menu"
          className="rounded-full border border-forest/20 bg-white/70 px-4 py-2 font-accent text-xs font-bold uppercase tracking-[0.18em] text-evergreen transition hover:border-copper hover:text-copper laptop:hidden"
          onClick={open}
          type="button"
        >
          Menu
        </button>
      </div>
    </header>
  );
}
