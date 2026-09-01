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
    <section
      style={{
        position: "relative",
        minHeight: "92vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
        background: "linear-gradient(145deg, #0284c7 0%, #06A3EC 45%, #0ea5e9 75%, #38bdf8 100%)",
        color: "white",
      }}
    >
      {/* Background Decorative Mesh & Patterns */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <div
          style={{
            position: "absolute",
            top: "-15%",
            right: "-5%",
            width: "clamp(350px, 45vw, 650px)",
            height: "clamp(350px, 45vw, 650px)",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-10%",
            left: "-5%",
            width: "clamp(250px, 35vw, 500px)",
            height: "clamp(250px, 35vw, 500px)",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(250,228,6,0.18) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
        {/* Subtle geometric dot grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            opacity: 0.6,
          }}
        />
      </div>

      {/* Main Container */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "5rem 1.5rem 3rem",
          width: "100%",
          position: "relative",
          zIndex: 10,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "3.5rem",
            alignItems: "center",
          }}
        >
          {/* Left Column: Text & CTAs */}
          <div style={{ maxWidth: "640px" }}>
            {/* School & Est. Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.4rem 1rem",
                borderRadius: "9999px",
                background: "rgba(255, 255, 255, 0.16)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                color: "#ffffff",
                fontSize: "0.8125rem",
                fontWeight: 600,
                marginBottom: "1.5rem",
                backdropFilter: "blur(10px)",
                boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
              }}
            >
              <GraduationCap size={15} color="#fde047" />
              <span>Adarsha High School, Kaitola · Est. 2026</span>
            </div>

            {/* Title / Bengali Name */}
            <h1
              style={{
                fontSize: "clamp(2.75rem, 6.5vw, 4.75rem)",
                fontWeight: 900,
                lineHeight: 1.05,
                marginBottom: "0.25rem",
                letterSpacing: "-0.02em",
                textShadow: "0 4px 24px rgba(0,0,0,0.15)",
              }}
            >
              বিদ্যাসেতু
            </h1>
            <h2
              style={{
                fontSize: "clamp(1.25rem, 2.5vw, 1.85rem)",
                fontWeight: 600,
                color: "rgba(255, 255, 255, 0.92)",
                marginBottom: "1.25rem",
                letterSpacing: "-0.01em",
              }}
            >
              Biddyasetu Alumni Organization
            </h2>

            {/* Tagline / Mission */}
            <p
              style={{
                fontSize: "clamp(1rem, 2vw, 1.15rem)",
                color: "rgba(255, 255, 255, 0.95)",
                lineHeight: 1.65,
                marginBottom: "2rem",
                textShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              "{orgInfo.tagline}"
            </p>

            {/* Identity Badges */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2.25rem" }}>
              {["Non-Political", "Non-Profit", "Non-Communal", "Voluntary"].map((t) => (
                <span
                  key={t}
                  style={{
                    padding: "0.25rem 0.75rem",
                    borderRadius: "9999px",
                    background: "rgba(255,255,255,0.14)",
                    border: "1px solid rgba(255,255,255,0.22)",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    backdropFilter: "blur(6px)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem" }}>
              <Link
                href="/membership"
                className="hero-btn-primary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.85rem 1.75rem",
                  borderRadius: "9999px",
                  background: "#ffffff",
                  color: "#0369a1",
                  fontWeight: 800,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  boxShadow: "0 10px 25px -5px rgba(0,0,0,0.2)",
                }}
              >
                <Users size={17} /> Become a Member
              </Link>
              <Link
                href="/contact#donate"
                className="hero-btn-secondary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.85rem 1.75rem",
                  borderRadius: "9999px",
                  background: "rgba(250, 228, 6, 0.95)",
                  color: "#1e293b",
                  fontWeight: 800,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  boxShadow: "0 10px 25px -5px rgba(250,228,6,0.3)",
                }}
              >
                <Heart size={17} /> Donate Fund
              </Link>
              <Link
                href="/members"
                className="hero-btn-outline"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.85rem 1.5rem",
                  borderRadius: "9999px",
                  background: "rgba(255,255,255,0.12)",
                  border: "1.5px solid rgba(255,255,255,0.35)",
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  backdropFilter: "blur(8px)",
                }}
              >
                <BookOpen size={17} /> Explore Directory
              </Link>
            </div>
          </div>

          {/* Right Column: Modern Glass Stats & Quick Feature Cards */}
          <div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.25rem",
                maxWidth: "520px",
                margin: "0 auto",
              }}
            >
              {stats.map((st) => {
                const Icon = st.icon;
                return (
                  <div key={st.label} className="hero-stat-card">
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "50%",
                        background: "rgba(255, 255, 255, 0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 0.75rem",
                      }}
                    >
                      <Icon size={22} color="#ffffff" />
                    </div>
                    <div style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 900, lineHeight: 1, marginBottom: "0.35rem" }}>
                      {st.value}
                    </div>
                    <div
                      style={{
                        fontSize: "0.8125rem",
                        color: "rgba(255, 255, 255, 0.85)",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                      }}
                    >
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
      <div style={{ textAlign: "center", paddingBottom: "1.5rem", position: "relative", zIndex: 10 }}>
        <div style={{ animation: "bounce 2s infinite", display: "inline-block", opacity: 0.75 }}>
          <ChevronDown size={24} color="#ffffff" />
        </div>
      </div>
    </section>
  );
}