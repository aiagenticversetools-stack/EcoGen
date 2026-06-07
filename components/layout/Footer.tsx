import Link from 'next/link';
import { siteSettings, socialLinks } from '@/lib/content';
import { Container } from '@/components/shared/Container';

const quickLinks = [
  { label: 'About', href: '/about' },
  { label: 'Rooms & Stay', href: '/rooms-stay' },
  { label: 'Events', href: '/events' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Reviews', href: '/#reviews' }
];

export function Footer() {
  const phoneHref = siteSettings.phone.replace(/\s/g, '');

  return (
    <footer className="bg-evergreen py-16 text-stone">
      <Container>
        <div className="grid gap-10 laptop:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <h2 className="font-heading text-5xl">{siteSettings.name}</h2>
            <p className="mt-4 max-w-md font-accent text-sm uppercase tracking-[0.22em] text-stone/70">
              {siteSettings.tagline}
            </p>
            <h3 className="mt-8 font-heading text-3xl">Contact us</h3>
            <a className="mt-3 inline-block text-stone transition hover:text-copper" href={`tel:${phoneHref}`}>
              Call now
            </a>
            <div className="mt-6">
              <p className="font-heading text-3xl">Follow Us On</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    className="rounded-full border border-white/15 px-4 py-2 text-sm text-stone/78 transition hover:border-copper hover:text-copper"
                    href={link.href}
                    key={link.label}
                    rel="noopener noreferrer"
                    target={link.href === '#' ? undefined : '_blank'}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <nav className="grid grid-cols-1 gap-4" aria-label="Quick Links">
            <h3 className="font-heading text-3xl">Quick Links</h3>
            {quickLinks.map((item) => (
              <Link className="text-stone/78 transition hover:text-copper" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="space-y-3 text-stone/78">
            <h3 className="font-heading text-3xl text-stone">Reach us</h3>
            <p>{siteSettings.address}</p>
            <a className="inline-block text-stone transition hover:text-copper" href={`tel:${phoneHref}`}>
              {siteSettings.phone}
            </a>
            <a className="block text-stone transition hover:text-copper" href={`mailto:${siteSettings.email}`}>
              @{siteSettings.email}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
