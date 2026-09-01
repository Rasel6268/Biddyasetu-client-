"use client";

import { Quote, Star, Award, GraduationCap } from "lucide-react";
import { successStories } from "@/lib/data/demo";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

function Avatar({ initials, color, size = 56 }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: `linear-gradient(135deg, ${color || "#06A3EC"}cc, ${color || "#06A3EC"})`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontWeight: 800,
        fontSize: size * 0.32,
        flexShrink: 0,
        border: "3px solid #ffffff",
        boxShadow: `0 4px 12px ${color || "#06A3EC"}35`,
      }}
    >
      {initials}
    </div>
  );
}

export default function SuccessStories() {
  return (
    <section className="section-padding" style={{ background: "var(--background)", position: "relative" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        <ScrollAnimation animation="fade-in-up">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="badge badge-primary" style={{ marginBottom: "0.75rem" }}>
              <Star size={12} fill="var(--primary)" /> Inspiring Alumni
            </span>
            <h2 className="section-heading">Success Stories & Impact</h2>
            <p className="section-subheading" style={{ margin: "0.5rem auto 0" }}>
              From the classrooms of Kaitola to national and international leadership.
            </p>
          </div>
        </ScrollAnimation>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.5rem" }}>
          {successStories.map((story, i) => (
            <ScrollAnimation key={story.id} animation="fade-in-up" delay={i * 100}>
              <article
                className="card"
                style={{
                  padding: "2rem",
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                  borderRadius: "1rem",
                  border: "1.5px solid var(--border)",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.borderColor = "var(--primary)";
                  e.currentTarget.style.boxShadow = "0 12px 24px -4px rgba(6,163,236,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Decorative background quote mark */}
                <Quote
                  size={72}
                  color="rgba(6,163,236,0.06)"
                  style={{ position: "absolute", top: 12, right: 12, pointerEvents: "none" }}
                />

                <div style={{ position: "relative", zIndex: 2 }}>
                  {/* Header Author Info */}
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                    <Avatar initials={story.initials} color={story.avatarColor} />
                    <div>
                      <div style={{ fontWeight: 800, color: "var(--text)", fontSize: "1rem" }}>{story.name}</div>
                      <div style={{ fontSize: "0.8125rem", color: "var(--primary)", fontWeight: 700, display: "flex", alignItems: "center", gap: "0.3rem" }}>
                        <GraduationCap size={13} /> {story.batch}
                      </div>
                    </div>
                  </div>

                  {/* Headline & Story Text */}
                  <h3 style={{ fontWeight: 700, fontSize: "1.0625rem", color: "var(--text)", marginBottom: "0.75rem", lineHeight: 1.35 }}>
                    "{story.title}"
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
                    {story.story}
                  </p>
                </div>

                {/* Card Footer Badge */}
                <div style={{ marginTop: "1.5rem", paddingTop: "0.85rem", borderTop: "1px solid var(--border)", display: "flex", alignItems: "center", gap: "0.35rem" }}>
                  <Award size={13} color="var(--primary)" />
                  <span style={{ fontSize: "0.75rem", color: "var(--primary-dark)", fontWeight: 700 }}>
                    Alumni Role Model
                  </span>
                </div>
              </article>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
