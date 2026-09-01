"use client";

import { Activity, ArrowRight, Calendar, Tag } from "lucide-react";
import { latestActivities } from "@/lib/data/demo";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

const categoryStyle = {
  Scholarship: { bg: "rgba(22,163,74,0.1)", color: "var(--success)", border: "var(--success)" },
  Organization: { bg: "rgba(6,163,236,0.1)", color: "var(--primary-dark)", border: "var(--primary)" },
  Event: { bg: "rgba(124,58,237,0.1)", color: "#7c3aed", border: "#7c3aed" },
  Welfare: { bg: "rgba(217,119,6,0.1)", color: "#d97706", border: "#d97706" },
};

export default function LatestActivities() {
  return (
    <section className="section-padding" style={{ background: "var(--surface)", position: "relative" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        <ScrollAnimation animation="fade-in-up">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="badge badge-primary" style={{ marginBottom: "0.75rem" }}>
              <Activity size={12} /> Community Initiatives
            </span>
            <h2 className="section-heading">Recent Activities & Progress</h2>
            <p className="section-subheading" style={{ margin: "0.5rem auto 0" }}>
              Tracking milestones, community outreach programs, and organizational updates.
            </p>
          </div>
        </ScrollAnimation>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.25rem" }}>
          {latestActivities.map((activity, i) => {
            const cs = categoryStyle[activity.category] || categoryStyle.Event;
            const d = new Date(activity.date);
            const dateStr = d.toLocaleDateString("en-BD", { day: "numeric", month: "short", year: "numeric" });

            return (
              <ScrollAnimation key={activity.id} animation="fade-in-up" delay={i * 80}>
                <div
                  className="card"
                  style={{
                    padding: "1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                    borderRadius: "0.875rem",
                    border: "1.5px solid var(--border)",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.borderColor = "var(--primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = "var(--border)";
                  }}
                >
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.875rem" }}>
                      <span
                        style={{
                          padding: "0.2rem 0.65rem",
                          borderRadius: "9999px",
                          background: cs.bg,
                          color: cs.color,
                          fontSize: "0.72rem",
                          fontWeight: 700,
                        }}
                      >
                        {activity.category}
                      </span>
                      <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "0.25rem" }}>
                        <Calendar size={12} /> {dateStr}
                      </span>
                    </div>

                    <h3 style={{ fontWeight: 700, fontSize: "1.0625rem", color: "var(--text)", marginBottom: "0.5rem", lineHeight: 1.4 }}>
                      {activity.title}
                    </h3>
                    <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.65, margin: 0 }}>
                      {activity.desc}
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
}
