import type {
  Accommodation,
  GalleryItem,
  NavigationItem,
  Program,
  SiteSettings,
  SocialLink,
  Testimonial
} from '@/types/site';

export const siteSettings: SiteSettings = {
  name: 'Ecogen Retreat',
  tagline: 'BE A BUTTERFLY IN OUR PARADISE!',
  url: 'https://ecogenretreat.com',
  phone: '+91 8106935999',
  address: 'beside Anjali film studios, Koheda(V), R.R. District, Telangana 501513.',
  openingTime: '24/7 - 365 Days',
  emailLabel: 'Email Us',
  email: 'ecogen9999@gmail.com'
};

export const navigation: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Rooms & Stay', href: '/rooms-stay' },
  { label: 'Events', href: '/events' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' }
];

export const socialLinks: SocialLink[] = [
  { label: 'Facebook', href: '#' },
  { label: 'YouTube', href: '#' },
  { label: 'Instagram', href: '#' }
];

export const homeContent = {
  heroTitle: 'Ecogen Retreat',
  heroSubtitle: 'BE A BUTTERFLY IN OUR PARADISE',
  heroKicker: 'A Premium Destination for Luxury Stays, Weddings & Celebrations',
  heroWelcome: 'Stay • Celebrate • Reconnect',
  heroCta: 'Plan Your Stay',
  aboutEyebrow: 'ABOUT US',
  aboutHeading: 'A perfect retreat for families, friends, and celebrations.',
  aboutDescription:
    'Ecogen Retreat is a premium nature stay resort where luxury, greenery, and comfort come together. Surrounded by peaceful landscapes, our eco-friendly retreat offers modern rooms, private pool facilities, spacious green areas, and a calm ambience perfect for families, couples, friends, and corporate groups. Designed for relaxation and rejuvenation, Ecogen Retreat is the ideal destination for a weekend getaway, family vacation, nature holiday, or special celebration.With a blend of modern amenities and natural beauty, we ensure a refreshing stay experience that makes you feel truly connected to nature.',
  luxuryHeading: 'Make Room for Luxury',
  luxuryDescription:
    "Don't miss out on inspiration, news from the land, and early-bird access to our most popular retreats. Join the growing community committed to ecological balance and intentional living.",
  celebrationHeading: 'Perfect Venue for Every Celebration',
  collectionEyebrow: 'OUR COLLECTION',
  galleryHeading: 'Our Featured Gallery',
  galleryDescription:
    'Step into the beauty and tranquility of Ecogen Retreat. This space is intentionally designed as a living example of ecological harmony—a place where permaculture gardens meet thoughtful sustainable architecture. We invite you to browse through scenes of our workshops, the natural landscapes we steward, and the vibrant community experiences that define our retreats.',
  amenitiesHeading: 'Resort Amenities',
  amenitiesDescription: 'Everything you need for a comfortable, memorable stay',
  holidayHeading: 'Relax & Enjoy with us in your holidays',
  testimonialsHeading: 'What Our Guests Say',
  testimonialsDescription: 'Real experiences from people who stayed, celebrated, and relaxed with us',
  bookingHeading: 'For Bookings call +918106935999'
};

export const aboutPageContent = {
  title: 'About – Ecogen Retreat',
  description:
    'Ecogen Retreat is a premium nature-stay destination designed for those who seek peace, comfort, and a refreshing break from city life. Surrounded by lush greenery and a calm atmosphere, our resort blends modern luxury with the beauty of nature, creating the perfect getaway for families, couples, friends, and celebrations.',
  storyHeading: 'Our Story',
  story:
    'Ecogen Retreat was created with a simple dream — to make every occasion a beautiful memory that lasts forever. A place where celebrations feel warmer, stays feel happier, and moments become truly unforgettable.Surrounded by fresh air, lush greenery, and peaceful landscapes, our retreat offers a luxury stay that brings people closer to nature and closer to each other.\n\nWhether it’s a family gathering, a birthday, a wedding event, or a quiet getaway, Ecogen Retreat is designed to deepen bonds and create joyful experiences. Every corner of our space — from the open lawn to the cozy rooms and glowing night ambience — reflects comfort, love, and natural connection. Here, you don’t just stay…You celebrate, relax, reconnect, and create evergreen memories with your loved ones.'
};

export const programs: Program[] = [
  {
    title: 'Weddings',
    description: 'Make your big day magical with our beautiful, nature-filled wedding setups.',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=80'
  },
  {
    title: 'Sangeet / Haldi',
    description: 'Celebrate your joyful rituals with vibrant décor and unforgettable moments.',
    image:
      'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1400&q=80'
  },
  {
    title: 'Birthdays',
    description: 'Create memories with fun-filled birthday celebrations for all age groups.',
    image:
      'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&w=1400&q=80'
  },
  {
    title: 'Corporate Meetings',
    description: 'Host productive meetings in a peaceful and professional environment.',
    image:
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=80'
  },
  {
    title: 'Pool Parties',
    description: 'Enjoy exciting poolside fun with music, food, and refreshing vibes.',
    image:
      'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?auto=format&fit=crop&w=1400&q=80'
  }
];

export const accommodations: Accommodation[] = [
  {
    title: 'Make Room for Luxury',
    description:
      "Don't miss out on inspiration, news from the land, and early-bird access to our most popular retreats. Join the growing community committed to ecological balance and intentional living.",
    image: '/images/bedroom-photo.png'
  }
];

export const featuredGallery: GalleryItem[] = [
  {
    title: 'Building a Better Future: Our Sustainable Cabin Design',
    image: '/images/front-view-photo.png',
    alt: 'Building a Better Future: Our Sustainable Cabin Design'
  },
  {
    title: 'From Soil to Supper: Learning Permaculture in Practice',
    image: '/images/side-walk-photo.png',
    alt: 'From Soil to Supper: Learning Permaculture in Practice'
  },
  {
    title: 'The Threshold: Designed for Transition and Welcome',
    image: '/images/glass-threshold.png',
    alt: 'The Threshold: Designed for Transition and Welcome'
  },
  {
    title: 'The Luxury of Space: Accommodations Designed for Unplugging',
    image: '/images/lounge-seating-photo.png',
    alt: 'The Luxury of Space: Accommodations Designed for Unplugging'
  },
  {
    title: 'Stay Cozy: The Details That Make Ecogen Feel Like Home',
    image: '/images/bedroom-photo.png',
    alt: 'Stay Cozy: The Details That Make Ecogen Feel Like Home'
  }
];

export const galleryPageItems: GalleryItem[] = [
  { title: 'Entrence', image: '/images/resort-entrance.png', alt: 'Entrence' },
  { title: 'Dinning Hall', image: '/images/dinning-hall-photo.png', alt: 'Dinning Hall' },
  { title: 'Lounge seating', image: '/images/lounge-seating-photo.png', alt: 'Lounge seating' },
  { title: 'Chandelier', image: '/images/night-exterior.png', alt: 'Chandelier' },
  { title: 'Bedroom', image: '/images/bedroom-photo.png', alt: 'Bedroom' },
  { title: 'Dressing Room', image: '/images/entrance-door.png', alt: 'Dressing Room' },
  { title: 'Swimming Pool', image: '/images/swimming-pool-photo.png', alt: 'Swimming Pool' },
  { title: 'Front view', image: '/images/front-view-photo.png', alt: 'Front view' },
  { title: 'Side walk', image: '/images/side-walk-photo.png', alt: 'Side walk' }
];

export const amenities = [
  '5 Premium Bedrooms',
  'Spacious Event Hall',
  'Fully Equipped Kitchen',
  'Indoor Games',
  'Fire Camp',
  'Open Lawn',
  'Swimming Pool'
] as const;

export const testimonials: Testimonial[] = [
  {
    rating: '★★★★★',
    quote:
      '“A beautiful property with peaceful surroundings. The rooms were clean, the lawn was perfect for our family gathering, and the staff was very supportive.”',
    guestName: 'Ramesh K.'
  },
  {
    rating: '★★★★★',
    quote:
      '“We hosted a birthday party here and everything was perfect. The pool area and night ambience made it really special.”',
    guestName: 'Sneha P.'
  },
  {
    rating: '★★★★★',
    quote:
      '“Ideal place for weekend getaways. Calm, clean, and well maintained. Definitely visiting again with friends.”',
    guestName: 'Arjun M.'
  }
];

export const contactContent = {
  title: 'Contact – Ecogen Retreat',
  eyebrow: 'CONTACT US',
  heading: 'Get In Touch',
  contactCards: ['Call Us', 'Email Us', 'Locate Us', 'Opening Time'] as const,
  followHeading: 'follow us on',
  fields: [
    'Your Name (required)',
    'Your Email (required)',
    'Phone Number (optional)',
    'Reason for Contact',
    'Preferred Dates / Timeframe (optional)',
    'Number of Guests (optional)',
    'Your Message'
  ] as const,
  reasons: ['Booking Inquiry', 'General Question', 'Partnership/Media', 'Feedback'] as const
};
