"use client";

import { useState } from "react";
import { Bell, AlertCircle, Info, ChevronRight, Calendar, X, Pin } from "lucide-react";
import { announcements } from "@/lib/data/demo";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

const priorityConfig = {
  High: { color: "#dc2626", bg: "rgba(220,38,38,0.1)", label: "Urgent Notice", icon: AlertCircle },
  Medium: { color: "var(--primary-dark)", bg: "rgba(6,163,236,0.1)", label: "Important", icon: Bell },
  Low: { color: "var(--text-muted)", bg: "rgba(95,100,112,0.1)", label: "General", icon: Info },
};

export default function Announcements() {
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

  return (
    <section className="section-padding" style={{ background: "var(--surface)", position: "relative" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        <ScrollAnimation animation="fade-in-up">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="badge badge-primary" style={{ marginBottom: "0.75rem" }}>
              <Bell size={12} /> Notice Board
            </span>
            <h2 className="section-heading">Official Announcements</h2>
            <p className="section-subheading" style={{ margin: "0.5rem auto 0" }}>
              Stay updated with news, meeting notes, election schedules, and welfare notices.
            </p>
          </div>
        </ScrollAnimation>

        <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
          {announcements.map((a, index) => {
            const pc = priorityConfig[a.priority] || priorityConfig.Low;
            const Icon = pc.icon;
            const d = new Date(a.date);
            const dateStr = d.toLocaleDateString("en-BD", { day: "numeric", month: "short", year: "numeric" });

            return (
              <ScrollAnimation key={a.id} animation="fade-in-up" delay={index * 80}>
                <div
                  onClick={() => setSelectedAnnouncement(a)}
                  className="card interactive-card-slide"
                  style={{
                    padding: "1.25rem 1.5rem",
                    display: "flex",
                    gap: "1.25rem",
                    alignItems: "center",
                    cursor: "pointer",
                    borderLeft: `4px solid ${pc.color}`,
                    borderRadius: "0.875rem",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "0.625rem",
                      background: pc.bg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={20} color={pc.color} />
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", flexWrap: "wrap", marginBottom: "0.25rem" }}>
                      <span
                        style={{
                          padding: "0.15rem 0.5rem",
                          borderRadius: "9999px",
                          background: pc.bg,
                          color: pc.color,
                          fontSize: "0.7rem",
                          fontWeight: 700,
                        }}
                      >
                        {pc.label}
                      </span>
                      <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "0.25rem" }}>
                        <Calendar size={12} /> {dateStr}
                      </span>
                    </div>

                    <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "var(--text)", margin: "0 0 0.25rem" }}>
                      {a.title}
                    </h3>
                    <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", margin: 0, lineHeight: 1.5, display: "-webkit-box", WebkitLineClamp: 1, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                      {a.content}
                    </p>
                  </div>

                  <ChevronRight size={18} color="var(--text-muted)" style={{ flexShrink: 0 }} />
                </div>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>

      {/* Announcement Detail Modal */}
      {selectedAnnouncement && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
            backgroundColor: "rgba(15, 23, 42, 0.6)",
            backdropFilter: "blur(4px)",
            animation: "fadeIn 0.2s ease-out",
          }}
          onClick={() => setSelectedAnnouncement(null)}
        >
          <div
            style={{
              background: "#ffffff",
              borderRadius: "1rem",
              maxWidth: "540px",
              width: "100%",
              padding: "2rem",
              position: "relative",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedAnnouncement(null)}
              style={{
                position: "absolute",
                top: "1.25rem",
                right: "1.25rem",
                background: "var(--background)",
                border: "none",
                borderRadius: "50%",
                width: "32px",
                height: "32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <X size={18} />
            </button>

            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <Pin size={16} color="var(--primary)" />
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 600 }}>
                {new Date(selectedAnnouncement.date).toLocaleDateString("en-BD", { day: "numeric", month: "long", year: "numeric" })}
              </span>
            </div>

            <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--text)", marginBottom: "1rem", lineHeight: 1.3 }}>
              {selectedAnnouncement.title}
            </h3>

            <p style={{ fontSize: "0.95rem", color: "var(--text)", lineHeight: 1.7, background: "var(--background)", padding: "1.25rem", borderRadius: "0.75rem", border: "1px solid var(--border)", marginBottom: "1.5rem" }}>
              {selectedAnnouncement.content}
            </p>

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                onClick={() => setSelectedAnnouncement(null)}
                className="btn-primary"
                style={{ padding: "0.5rem 1.25rem", fontSize: "0.85rem" }}
              >
                Close Notice
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
