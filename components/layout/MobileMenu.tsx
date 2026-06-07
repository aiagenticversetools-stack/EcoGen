'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { navigation } from '@/lib/content';
import { useUiStore } from '@/store/ui-store';

export function MobileMenu() {
  const isOpen = useUiStore((state) => state.isMobileMenuOpen);
  const close = useUiStore((state) => state.closeMobileMenu);
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          aria-modal="true"
          className="fixed inset-0 z-50 flex flex-col bg-evergreen/96 p-6 text-stone backdrop-blur-2xl laptop:hidden"
          initial={{ opacity: 0 }}
          role="dialog"
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <span className="font-heading text-4xl leading-none">Ecogen Retreat</span>
            <button
              aria-label="Close navigation menu"
              className="rounded-full border border-white/20 bg-white/5 px-4 py-2 font-accent text-sm uppercase tracking-[0.18em] transition hover:border-copper hover:text-copper"
              onClick={close}
              type="button"
            >
              Close
            </button>
          </div>
          <nav className="mt-14 flex flex-col gap-5" aria-label="Mobile navigation">
            {navigation.map((item, index) => {
              const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);

              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.07, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    aria-current={isActive ? 'page' : undefined}
                    className={`group flex items-center justify-between border-b border-white/10 pb-4 font-heading text-5xl leading-none transition hover:text-copper ${
                      isActive ? 'text-copper' : 'text-stone'
                    }`}
                    href={item.href}
                    onClick={close}
                  >
                    {item.label}
                    <span className="font-accent text-sm opacity-40 transition group-hover:opacity-100">
                      {isActive ? 'Current' : 'View'}
                    </span>
                  </Link>
                </motion.div>
              );
            })}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navigation.length * 0.07, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                className="mt-4 inline-flex min-h-14 w-full items-center justify-center rounded-full bg-copper px-6 py-4 font-accent text-sm font-bold uppercase tracking-[0.16em] text-stone transition hover:-translate-y-1 hover:bg-sand hover:text-evergreen"
                href="/booking"
                onClick={close}
              >
                Book Now
              </Link>
            </motion.div>
          </nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
