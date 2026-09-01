import Hero from "@/components/home/Hero";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import LatestActivities from "@/components/home/LatestActivities";
import ScholarshipHighlights from "@/components/home/ScholarshipHighlights";
import SuccessStories from "@/components/home/SuccessStories";
import Announcements from "@/components/home/Announcements";
import AlumniHighlights from "@/components/home/AlumniHighlights";
import DonationCTA from "@/components/home/DonationCTA";

export const metadata = {
  title: "Home — Biddyasetu",
  description:
    "Biddyasetu — Connecting Alumni, Empowering Students, Building a Better Future. Join the alumni community of Adarsha High School, Kaitola.",
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
