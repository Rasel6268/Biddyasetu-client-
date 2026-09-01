"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Users,
  MapPin,
  GraduationCap,
  ArrowRight,
  BadgeCheck,
  Droplets,
  ChevronRight,
} from "lucide-react";
import { alumniMembers } from "@/lib/data/demo";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import MemberModal from "@/components/members/MemberModal";

function Avatar({ initials, color, size = 64 }) {
  return (
    <div
      className="rounded-full flex items-center justify-center text-white font-extrabold shrink-0 border-2 border-white shadow-md"
      style={{
        width: size,
        height: size,
        background: `linear-gradient(135deg, ${color || "#06A3EC"}cc, ${color || "#06A3EC"})`,
        fontSize: size * 0.32,
      }}
    >
      {initials}
    </div>
  );
}

export default function AlumniHighlights() {
  const [selectedMember, setSelectedMember] = useState(null);
  const featured = alumniMembers.filter((m) => m.verified).slice(0, 6);

  return (
    <section className="py-20 bg-[#FDF9DF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation animation="fade-in-up">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sky-100/80 border border-sky-200 text-sky-700 font-bold text-xs mb-3">
                <Users className="w-3.5 h-3.5" /> Alumni Spotlight
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Connect with Inspiring Alumni
              </h2>
              <p className="text-slate-600 text-base sm:text-lg mt-2 max-w-2xl">
                Meet graduates of Adarsha High School making an impact across industries worldwide.
              </p>
            </div>
            <Link
              href="/members"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-sky-500 text-sky-600 hover:bg-sky-500 hover:text-white font-bold text-sm transition-all"
            >
              Explore Full Directory ({alumniMembers.length}+) <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollAnimation>

        {/* Member Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((member, index) => (
            <ScrollAnimation key={member.id} animation="fade-in-up" delay={index * 80}>
              <article
                onClick={() => setSelectedMember(member)}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-sky-400 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full cursor-pointer group"
              >
                {/* Top Info */}
                <div>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative shrink-0">
                      <Avatar initials={member.initials} color={member.avatarColor} size={60} />
                      {member.verified && (
                        <div
                          className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm"
                          title="Verified Alumni"
                        >
                          <BadgeCheck className="w-5 h-5 text-sky-500 fill-sky-500 stroke-white" />
                        </div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-extrabold text-base sm:text-lg text-slate-900 truncate group-hover:text-sky-600 transition-colors">
                        {member.name}
                      </h3>

                      <div className="flex items-center gap-1.5 flex-wrap my-1.5">
                        <span className="px-2 py-0.5 rounded-md bg-sky-50 text-sky-700 font-bold text-xs">
                          {member.batch}
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded-md text-xs font-semibold ${
                            member.membership === "Life Member"
                              ? "bg-amber-50 text-amber-800 border border-amber-200"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {member.membership}
                        </span>
                        {member.bloodGroup && (
                          <span
                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-red-50 text-red-600 font-bold text-xs border border-red-100"
                            title={`Blood Group: ${member.bloodGroup}`}
                          >
                            <Droplets className="w-3 h-3 fill-red-500 text-red-500" />
                            {member.bloodGroup}
                          </span>
                        )}
                      </div>

                      <div className="flex flex-col gap-1 text-xs sm:text-sm text-slate-500 font-medium">
                        <span className="flex items-center gap-1.5 truncate">
                          <GraduationCap className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                          {member.profession}
                        </span>
                        <span className="flex items-center gap-1.5 truncate">
                          <MapPin className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                          {member.location}, {member.country}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-2">
                    {member.bio}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs font-semibold text-slate-500">
                  <span className="truncate">{member.education || "Adarsha High School"}</span>
                  <span className="inline-flex items-center gap-1 text-sky-600 font-bold shrink-0 group-hover:translate-x-1 transition-transform">
                    View Profile <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </article>
            </ScrollAnimation>
          ))}
        </div>
      </div>

      {/* Interactive Member Modal */}
      {selectedMember && <MemberModal member={selectedMember} onClose={() => setSelectedMember(null)} />}
    </section>
  );
}
