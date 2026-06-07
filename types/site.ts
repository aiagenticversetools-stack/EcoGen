export interface NavigationItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface Program {
  title: string;
  description: string;
  image: string;
}

export interface Accommodation {
  title: string;
  description: string;
  image: string;
}

export interface GalleryItem {
  title: string;
  image: string;
  alt: string;
}

export interface Testimonial {
  rating: string;
  quote: string;
  guestName: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  reason: 'Booking Inquiry' | 'General Question' | 'Partnership/Media' | 'Feedback';
  timeframe?: string;
  guests?: string;
  message: string;
}

export interface Booking {
  name: string;
  email: string;
  phone?: string;
  preferredDates?: string;
  guests?: string;
  accommodation?: string;
  message?: string;
}

export interface SiteSettings {
  name: string;
  tagline: string;
  url: string;
  phone: string;
  address: string;
  openingTime: string;
  emailLabel: string;
  email: string;
}
