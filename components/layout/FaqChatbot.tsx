'use client';

import { FormEvent, useMemo, useState } from 'react';
import { amenities, homeContent, programs, siteSettings } from '@/lib/content';

interface ChatMessage {
  id: number;
  role: 'user' | 'bot';
  text: string;
}

interface FaqAnswer {
  question: string;
  triggers: string[];
  answer: string;
}

const faqAnswers: FaqAnswer[] = [
  {
    question: 'What is EcoGen Retreat?',
    triggers: ['about', 'ecogen', 'retreat', 'what is', 'resort', 'nature stay'],
    answer: `${homeContent.aboutHeading} ${homeContent.aboutDescription}`
  },
  {
    question: 'Where is EcoGen Retreat located?',
    triggers: ['address', 'location', 'where', 'locate', 'map', 'directions'],
    answer: `EcoGen Retreat is located at ${siteSettings.address}.`
  },
  {
    question: 'How can I book EcoGen Retreat?',
    triggers: ['book', 'booking', 'reserve', 'availability', 'call', 'phone', 'contact'],
    answer: `For Bookings call ${siteSettings.phone}. You can also use the booking form on the website or tap the WhatsApp button to start a chat.`
  },
  {
    question: 'What events can be hosted?',
    triggers: ['event', 'events', 'venue', 'wedding', 'birthday', 'corporate', 'haldi', 'sangeet', 'party', 'pool'],
    answer: `EcoGen Retreat is a ${homeContent.celebrationHeading}. Events include ${programs
      .map((program) => program.title)
      .join(', ')}.`
  },
  {
    question: 'What amenities are available?',
    triggers: ['amenities', 'facilities', 'pool', 'rooms', 'lawn', 'green', 'private pool'],
    answer: `${homeContent.amenitiesDescription}. Amenities include ${amenities.join(', ')}.`
  },
  {
    question: 'Is EcoGen suitable for families and groups?',
    triggers: ['family', 'families', 'friends', 'groups', 'couples', 'corporate'],
    answer:
      'Yes. EcoGen Retreat is perfect for families, couples, friends, and corporate groups, with peaceful landscapes, modern rooms, private pool facilities, spacious green areas, and a calm ambience.'
  },
  {
    question: 'What is the opening time?',
    triggers: ['time', 'timing', 'open', 'opening', 'hours', '24/7'],
    answer: `Opening Time: ${siteSettings.openingTime}.`
  },
  {
    question: 'What can I see in the gallery?',
    triggers: ['gallery', 'photos', 'images', 'pictures', 'view'],
    answer:
      'The gallery includes Entrence, Dinning Hall, Lounge seating, Chandelier, Bedroom, Dressing Room, Swimming Pool, Front view, and Side walk.'
  }
];

const fallbackAnswer =
  'I can help with bookings, location, events, amenities, gallery, opening time, and contact details. For specific availability, please call +918106935999 or use the WhatsApp button.';

function findAnswer(input: string) {
  const normalizedInput = input.toLowerCase();

  const scoredAnswers = faqAnswers.map((faq) => ({
    faq,
    score: faq.triggers.reduce(
      (total, trigger) => (normalizedInput.includes(trigger) ? total + 1 : total),
      0
    )
  }));

  const bestMatch = scoredAnswers.sort((a, b) => b.score - a.score)[0];
  return bestMatch && bestMatch.score > 0 ? bestMatch.faq.answer : fallbackAnswer;
}

export function FaqChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      role: 'bot',
      text: 'Hi, I am the EcoGen Retreat assistant. Ask me about bookings, events, amenities, location, gallery, or opening time.'
    }
  ]);

  const quickQuestions = useMemo(() => faqAnswers.slice(1, 6), []);

  const sendMessage = (text: string) => {
    const question = text.trim();

    if (!question) {
      return;
    }

    const nextId = messages.length + 1;
    setMessages((currentMessages) => [
      ...currentMessages,
      { id: nextId, role: 'user', text: question },
      { id: nextId + 1, role: 'bot', text: findAnswer(question) }
    ]);
    setInput('');
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="fixed bottom-24 left-4 z-50 max-w-[calc(100vw-2rem)] font-body tablet:bottom-5 tablet:left-5 tablet:max-w-[calc(100vw-2.5rem)]">
      {isOpen ? (
        <section
          aria-label="EcoGen Retreat FAQ chatbot"
          className="mb-4 w-[min(380px,calc(100vw-2rem))] overflow-hidden rounded-[1.5rem] border border-forest/15 bg-stone shadow-luxury tablet:rounded-[1.75rem]"
        >
          <div className="bg-evergreen p-4 text-stone tablet:p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-heading text-2xl leading-none tablet:text-3xl">EcoGen Chat</p>
              </div>
              <button
                aria-label="Close EcoGen FAQ chatbot"
                className="rounded-full border border-white/20 px-3 py-1 font-accent text-xs uppercase tracking-[0.18em]"
                onClick={() => setIsOpen(false)}
                type="button"
              >
                Close
              </button>
            </div>
          </div>

          <div className="max-h-[320px] space-y-4 overflow-y-auto p-4 tablet:max-h-[360px] tablet:p-5">
            {messages.map((message) => (
              <div
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                key={message.id}
              >
                <p
                  className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                    message.role === 'user'
                      ? 'bg-forest text-white'
                      : 'bg-white text-charcoal shadow-sm'
                  }`}
                >
                  {message.text}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-forest/10 p-4 tablet:p-5">
            <div className="mb-4 flex flex-wrap gap-2">
              {quickQuestions.map((faq) => (
                <button
                  className="rounded-full border border-forest/15 bg-white px-3 py-2 text-left text-xs font-medium text-forest transition hover:border-copper hover:text-copper"
                  key={faq.question}
                  onClick={() => sendMessage(faq.question)}
                  type="button"
                >
                  {faq.question}
                </button>
              ))}
            </div>
            <form className="flex flex-col gap-2 tablet:flex-row" onSubmit={handleSubmit}>
              <input
                aria-label="Ask EcoGen Retreat chatbot a question"
                className="min-h-12 min-w-0 flex-1 rounded-full border border-forest/15 bg-white px-4 py-3 text-sm text-charcoal outline-none transition focus:border-copper focus:ring-4 focus:ring-copper/15"
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask a question..."
                value={input}
              />
              <button
                className="min-h-12 rounded-full bg-forest px-5 py-3 font-accent text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-copper"
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
        </section>
      ) : null}

      <button
        aria-label="Open EcoGen Retreat FAQ chatbot"
        className="min-h-14 rounded-full bg-evergreen px-4 py-3 font-accent text-xs font-bold uppercase tracking-[0.12em] text-stone shadow-luxury transition duration-300 hover:-translate-y-1 hover:bg-copper tablet:px-5 tablet:py-4 tablet:text-sm"
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        EcoGen FAQ Chat
      </button>
    </div>
  );
}
