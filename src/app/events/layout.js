export const metadata = {
  title: "Events & Reunions — Upcoming Programs | Biddyasetu",
  description:
    "Explore upcoming alumni reunions, batch gatherings, workshops, award ceremonies, and fundraisers organized by Biddyasetu — the alumni organization of Adarsha High School, Kaitola. RSVP online.",

  keywords: [
    "Biddyasetu events", "alumni reunion Bangladesh", "Adarsha High School reunion",
    "Kaitola alumni gathering", "batch reunion Bangladesh", "school alumni events",
    "alumni fundraiser Bangladesh", "alumni workshop Kaitola",
  ],

  alternates: {
    canonical: "https://biddyasetu.org/events",
  },

  openGraph: {
    title: "Events & Reunions — Biddyasetu Alumni Programs",
    description:
      "Join upcoming reunions, workshops, and community events organized by Biddyasetu alumni of Adarsha High School, Kaitola. Register your RSVP online.",
    url: "https://biddyasetu.org/events",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Biddyasetu Events & Reunions" }],
  },

  twitter: {
    card: "summary_large_image",
    title: "Biddyasetu Events — Alumni Reunions & Programs",
    description:
      "Upcoming alumni reunions, batch gatherings, and community programs by Biddyasetu — Adarsha High School, Kaitola.",
    images: ["/og-image.jpg"],
  },
};

export default function EventsLayout({ children }) {
  return children;
}
