"use client";

import Link from "next/link";
import {
  Users,
  GraduationCap,
  Award,
  Globe,
  ArrowRight,
  Heart,
  BookOpen,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { orgInfo } from "@/lib/data/demo";

export default function Hero() {
  const stats = [
    { icon: Users, value: "850+", label: "Alumni Network" },
    { icon: GraduationCap, value: "38", label: "Batches" },
    { icon: Award, value: "124", label: "Scholarships" },
    { icon: Globe, value: "12+", label: "Countries" },
  ];

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden bg-gradient-to-br from-sky-700 via-sky-500 to-sky-400 text-white">
      {/* Background Decorative Mesh & Patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[15%] -right-[5%] w-[350px] sm:w-[500px] lg:w-[650px] h-[350px] sm:h-[500px] lg:h-[650px] rounded-full bg-radial from-white/15 to-transparent blur-3xl" />
        <div className="absolute -bottom-[10%] -left-[5%] w-[250px] sm:w-[400px] lg:w-[500px] h-[250px] sm:h-[400px] lg:h-[500px] rounded-full bg-radial from-yellow-300/20 to-transparent blur-3xl" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 max-w-2xl">
            {/* School & Est. Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/30 text-white text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md shadow-sm">
              <GraduationCap className="w-4 h-4 text-yellow-300" />
              <span>Adarsha High School, Kaitola · Est. 2026</span>
            </div>

            {/* Title / Bengali Name */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none mb-2 tracking-tight drop-shadow-sm">
              বিদ্যাসেতু
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white/90 mb-5 tracking-tight">
              Biddyasetu Alumni Organization
            </h2>

            {/* Tagline / Mission */}
            <p className="text-base sm:text-lg text-white/95 leading-relaxed mb-6 font-medium">
              "{orgInfo.tagline}"
            </p>

            {/* Identity Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {["Non-Political", "Non-Profit", "Non-Communal", "Voluntary"].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full bg-white/15 border border-white/25 text-xs font-semibold backdrop-blur-sm"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap gap-3.5">
              <Link
                href="/membership"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-sky-700 font-extrabold text-sm sm:text-base shadow-xl shadow-sky-950/20 hover:shadow-2xl hover:scale-105 transition-all"
              >
                <Users className="w-4 h-4" /> Become a Member
              </Link>
              <Link
                href="/contact#donate"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-extrabold text-sm sm:text-base shadow-xl shadow-yellow-500/30 hover:scale-105 transition-all"
              >
                <Heart className="w-4 h-4 fill-slate-900" /> Donate Fund
              </Link>
              <Link
                href="/members"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/15 hover:bg-white/25 border border-white/35 text-white font-bold text-sm sm:text-base backdrop-blur-md transition-all"
              >
                <BookOpen className="w-4 h-4" /> Directory
              </Link>
            </div>
          </div>

          {/* Right Column: Modern Glass Stats Cards */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:max-w-none">
              {stats.map((st) => {
                const Icon = st.icon;
                return (
                  <div
                    key={st.label}
                    className="p-6 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/30 text-center shadow-lg shadow-sky-950/10 hover:bg-white/20 hover:-translate-y-1.5 transition-all duration-300"
                  >
                    <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-3xl sm:text-4xl font-black leading-none mb-1 text-white">
                      {st.value}
                    </div>
                    <div className="text-xs font-bold text-white/85 uppercase tracking-wider">
                      {st.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="text-center pb-6 relative z-10">
        <div className="inline-block animate-bounce opacity-80">
          <ChevronDown className="w-6 h-6 text-white" />
        </div>
      </div>
    </section>
  );
}