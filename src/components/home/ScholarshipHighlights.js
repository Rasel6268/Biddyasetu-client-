"use client";

import Link from "next/link";
import { Award, ArrowRight, CheckCircle, GraduationCap, HeartHandshake, Sparkles } from "lucide-react";
import { scholarships } from "@/lib/data/demo";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

export default function ScholarshipHighlights() {
  return (
    <section className="section-padding" style={{ background: "var(--surface)", position: "relative" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "3.5rem",
            alignItems: "center",
          }}
        >
          {/* Left: Text & Key Highlights */}
          <ScrollAnimation animation="fade-in-right">
            <div>
              <span className="badge badge-secondary" style={{ marginBottom: "1rem" }}>
                <Award size={12} /> Education & Welfare
              </span>
              <h2 className="section-heading" style={{ marginBottom: "1rem" }}>
                Empowering the Next Generation
              </h2>
              <p className="section-subheading" style={{ marginBottom: "1.75rem" }}>
                Biddyasetu provides merit and need-based scholarships, financial aid, and academic mentorship to ensure no deserving student of Adarsha High School is left behind.
              </p>

              {/* Feature Checklist */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", marginBottom: "2.25rem" }}>
                {[
                  "124+ scholarships awarded to meritorious students",
                  "BDT 36 Lakh+ disbursed directly for tuition & supplies",
                  "Open to all grade levels and SSC candidates",
                  "Year-round emergency student welfare assistance",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div
                      style={{
                        width: "22px",
                        height: "22px",
                        borderRadius: "50%",
                        background: "rgba(22,163,74,0.12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <CheckCircle size={14} color="var(--success)" />
                    </div>
                    <span style={{ fontSize: "0.9375rem", color: "var(--text)", fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem" }}>
                <Link href="/membership" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                  Apply for Scholarship <ArrowRight size={15} />
                </Link>
                <Link href="/contact#donate" className="btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                  <HeartHandshake size={16} /> Sponsor a Student
                </Link>
              </div>
            </div>
          </ScrollAnimation>

          {/* Right: Modern Scholarship Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scholarships.map((s, i) => (
              <ScrollAnimation key={s.name} animation="fade-in-left" delay={i * 120}>
                <div
                  className="card"
                  style={{
                    padding: "1.35rem 1.5rem",
                    display: "flex",
                    gap: "1.15rem",
                    alignItems: "flex-start",
                    borderLeft: "4px solid var(--primary)",
                    borderRadius: "0.875rem",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateX(4px)";
                    e.currentTarget.style.borderColor = "var(--primary)";
                    e.currentTarget.style.boxShadow = "0 8px 20px -4px rgba(6,163,236,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateX(0)";
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.borderLeftColor = "var(--primary)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "0.625rem",
                      background: "rgba(6,163,236,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Award size={20} color="var(--primary)" />
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.5rem", flexWrap: "wrap", marginBottom: "0.35rem" }}>
                      <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "var(--text)", margin: 0 }}>
                        {s.name}
                      </h3>
                      <span
                        style={{
                          padding: "0.2rem 0.65rem",
                          borderRadius: "9999px",
                          background: "rgba(22,163,74,0.1)",
                          color: "var(--success)",
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          flexShrink: 0,
                        }}
                      >
                        {s.status}
                      </span>
                    </div>

                    <p style={{ fontSize: "0.845rem", color: "var(--text-muted)", marginBottom: "0.75rem", lineHeight: 1.55 }}>
                      {s.desc}
                    </p>

                    <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", alignItems: "center" }}>
                      <span style={{ fontSize: "0.875rem", fontWeight: 800, color: "var(--primary)" }}>
                        {s.amount}
                      </span>
                      <span style={{ fontSize: "0.785rem", color: "var(--text-muted)", fontWeight: 500, display: "flex", alignItems: "center", gap: "0.3rem" }}>
                        <GraduationCap size={13} /> {s.recipients} students supported
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
