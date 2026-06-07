export function WhatsAppButton() {
  const whatsappNumber = '918106935999';
  const message = encodeURIComponent('Hello EcoGen Retreat, I would like to know more about bookings.');

  return (
    <a
      aria-label="Open WhatsApp chat with EcoGen Retreat"
      className="fixed bottom-5 right-4 z-50 inline-flex min-h-14 items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 font-accent text-xs font-bold uppercase tracking-[0.1em] text-white shadow-luxury transition duration-300 hover:-translate-y-1 hover:bg-[#1ebe5d] focus-visible:outline-white tablet:right-5 tablet:px-5 tablet:text-sm"
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <span
        aria-hidden="true"
        className="grid h-8 w-8 place-items-center rounded-full bg-white/20 text-lg tablet:h-9 tablet:w-9"
      >
        <svg
          aria-hidden="true"
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.52 3.48A11.82 11.82 0 0 0 12.08 0C5.51 0 .17 5.34.17 11.91c0 2.1.55 4.15 1.6 5.96L.07 24l6.29-1.65a11.9 11.9 0 0 0 5.72 1.46h.01c6.57 0 11.91-5.34 11.91-11.91 0-3.18-1.24-6.17-3.48-8.42ZM12.09 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.73.98 1-3.64-.24-.37a9.86 9.86 0 0 1-1.51-5.27c0-5.46 4.44-9.9 9.9-9.9 2.65 0 5.13 1.03 7 2.9a9.84 9.84 0 0 1 2.9 7c-.01 5.45-4.45 9.89-9.91 9.89Zm5.43-7.41c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.87 1.21 3.07.15.2 2.09 3.19 5.06 4.47.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
        </svg>
      </span>
      <span className="hidden tablet:inline">Chat on WhatsApp</span>
      <span className="tablet:hidden">WhatsApp</span>
    </a>
  );
}
