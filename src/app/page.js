import Hero from "@/components/home/Hero";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import LatestActivities from "@/components/home/LatestActivities";
import ScholarshipHighlights from "@/components/home/ScholarshipHighlights";
import SuccessStories from "@/components/home/SuccessStories";
import Announcements from "@/components/home/Announcements";
import AlumniHighlights from "@/components/home/AlumniHighlights";
import DonationCTA from "@/components/home/DonationCTA";

export const metadata = {
  title: "Home — Biddyasetu | Adarsha High School Alumni Organization",
  description:
    "Biddyasetu (বিদ্যাসেতু) is the official alumni organization of Adarsha High School, Kaitola. Connecting 850+ alumni across Bangladesh and 12+ countries. Join us to support students, scholarships, and reunions.",

  keywords: [
    "Biddyasetu", "বিদ্যাসেতু", "Adarsha High School Kaitola",
    "Bangladesh alumni", "school alumni organization", "scholarship Bangladesh",
    "alumni reunion", "Kaitola school", "student welfare Bangladesh",
  ],

  alternates: {
    canonical: "https://biddyasetu.org",
  },

  openGraph: {
    title: "Biddyasetu — Adarsha High School Alumni Organization",
    description:
      "Connecting 850+ alumni worldwide. Join Biddyasetu — the official alumni community of Adarsha High School, Kaitola, Bangladesh.",
    url: "https://biddyasetu.org",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Biddyasetu Alumni Organization" }],
  },

  twitter: {
    card: "summary_large_image",
    title: "Biddyasetu — Adarsha High School Alumni Organization",
    description: "Connecting 850+ alumni worldwide. Join the official alumni community of Adarsha High School, Kaitola.",
    images: ["/og-image.jpg"],
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Announcements />
      <UpcomingEvents />
      <AlumniHighlights />
      <ScholarshipHighlights />
      <SuccessStories />
      <LatestActivities />
      <DonationCTA />
    </>
  );
}
