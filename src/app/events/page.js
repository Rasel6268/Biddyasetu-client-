"use client";

import { useState } from "react";
import { upcomingEvents } from "@/lib/data/demo";
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  Search,
  CheckCircle,
  X,
  Sparkles,
  Filter,
} from "lucide-react";

const typeColors = {
  Reunion: { bg: "rgba(6,163,236,0.1)", color: "var(--primary-dark)", border: "var(--primary)" },
  Ceremony: { bg: "rgba(22,163,74,0.1)", color: "var(--success)", border: "var(--success)" },
  Workshop: { bg: "rgba(124,58,237,0.1)", color: "#7c3aed", border: "#7c3aed" },
  Fundraiser: { bg: "rgba(250,228,6,0.15)", color: "#854d0e", border: "#f59e0b" },
};

export default function EventsPage() {
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [registeredEvents, setRegisteredEvents] = useState({});
  const [activeModalEvent, setActiveModalEvent] = useState(null);

  const categories = ["all", "Reunion", "Ceremony", "Workshop", "Fundraiser"];

  const filteredEvents = upcomingEvents.filter((ev) => {
    if (selectedType !== "all" && ev.type !== selectedType) return false;
    if (
      search &&
      !ev.title.toLowerCase().includes(search.toLowerCase()) &&
      !ev.venue.toLowerCase().includes(search.toLowerCase()) &&
      !ev.desc.toLowerCase().includes(search.toLowerCase())
    )
      return false;
    return true;
  });

  const handleRegister = (id) => {
    setRegisteredEvents((prev) => ({ ...prev, [id]: true }));
    setActiveModalEvent(null);
  };

  return (
    <>
      {/* Hero Banner */}
      <section
        style={{
          background: "linear-gradient(135deg, #0284c7 0%, #06A3EC 50%, #38bdf8 100%)",
          padding: "4.5rem 1.5rem 3.5rem",
          textAlign: "center",
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.12) 0%, transparent 40%), radial-gradient(circle at 80% 20%, rgba(250,228,6,0.15) 0%, transparent 40%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: "760px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.35rem 1rem",
              borderRadius: "9999px",
              background: "rgba(255, 255, 255, 0.16)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              fontSize: "0.8125rem",
              fontWeight: 600,
              marginBottom: "1rem",
              backdropFilter: "blur(6px)",
            }}
          >
            <Sparkles size={14} color="#fde047" /> Official Gatherings & Programs
          </span>
          <h1 style={{ fontSize: "clamp(2.25rem, 5vw, 3.25rem)", fontWeight: 900, marginBottom: "0.75rem", letterSpacing: "-0.02em" }}>
            Events & Reunions
          </h1>
          <p style={{ fontSize: "1.0625rem", opacity: 0.92, lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
            Stay connected through batch reunions, skill-building workshops, award ceremonies, and community fundraisers.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section
        style={{
          background: "var(--surface)",
          padding: "1.25rem 1.5rem",
          borderBottom: "1px solid var(--border)",
          position: "sticky",
          top: "70px",
          zIndex: 40,
          boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
          {/* Search */}
          <div style={{ flex: 1, minWidth: "240px", position: "relative" }}>
            <Search size={16} color="var(--text-muted)" style={{ position: "absolute", left: "0.875rem", top: "50%", transform: "translateY(-50%)" }} />
            <input
              type="text"
              placeholder="Search events by title, venue, or keyword..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: "100%",
                padding: "0.65rem 0.875rem 0.65rem 2.5rem",
                borderRadius: "0.5rem",
                border: "1.5px solid var(--border)",
                background: "var(--background)",
                fontSize: "0.875rem",
                outline: "none",
              }}
            />
          </div>

          {/* Category Tabs */}
          <div style={{ display: "flex", gap: "0.4rem", overflowX: "auto" }}>
            {categories.map((cat) => {
              const isSelected = selectedType === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedType(cat)}
                  style={{
                    padding: "0.4rem 0.85rem",
                    borderRadius: "9999px",
                    border: isSelected ? "1px solid var(--primary)" : "1px solid var(--border)",
                    background: isSelected ? "var(--primary)" : "#ffffff",
                    color: isSelected ? "#ffffff" : "var(--text)",
                    fontWeight: isSelected ? 700 : 500,
                    fontSize: "0.8rem",
                    cursor: "pointer",
                    textTransform: "capitalize",
                    whiteSpace: "nowrap",
                    transition: "all 0.15s ease",
                  }}
                >
                  {cat === "all" ? "All Events" : cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="section-padding" style={{ background: "var(--background)", minHeight: "60vh" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 1.5rem" }}>
          {filteredEvents.length === 0 ? (
            <div style={{ textAlign: "center", padding: "4rem 1.5rem", background: "white", borderRadius: "1rem", border: "1px dashed var(--border)", color: "var(--text-muted)" }}>
              <Calendar size={48} style={{ margin: "0 auto 1rem", opacity: 0.3 }} />
              <h3 style={{ fontWeight: 700, fontSize: "1.125rem", color: "var(--text)", marginBottom: "0.5rem" }}>No events found</h3>
              <p style={{ fontSize: "0.875rem" }}>Try changing your filter category or search keyword.</p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {filteredEvents.map((event) => {
                const tc = typeColors[event.type] || typeColors.Reunion;
                const d = new Date(event.date);
                const day = d.getDate();
                const month = d.toLocaleDateString("en-BD", { month: "short" });
                const year = d.getFullYear();
                const isRegistered = !!registeredEvents[event.id];

                return (
                  <article
                    key={event.id}
                    className="card interactive-card-sm"
                    style={{
                      padding: "1.75rem",
                      display: "flex",
                      gap: "1.5rem",
                      alignItems: "center",
                      flexWrap: "wrap",
                      borderRadius: "1.125rem",
                      border: "1.5px solid var(--border)",
                    }}
                  >
                    {/* Date Block */}
                    <div
                      style={{
                        textAlign: "center",
                        background: "linear-gradient(135deg, #0369a1, #06A3EC)",
                        borderRadius: "0.875rem",
                        padding: "1rem 1.25rem",
                        color: "white",
                        minWidth: "75px",
                        flexShrink: 0,
                        boxShadow: "0 4px 14px rgba(6,163,236,0.25)",
                      }}
                    >
                      <div style={{ fontSize: "1.85rem", fontWeight: 900, lineHeight: 1 }}>{day}</div>
                      <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", opacity: 0.9 }}>
                        {month}
                      </div>
                      <div style={{ fontSize: "0.7rem", opacity: 0.75 }}>{year}</div>
                    </div>

                    {/* Content */}
                    <div style={{ flex: 1, minWidth: "260px" }}>
                      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "0.4rem" }}>
                        <span
                          style={{
                            padding: "0.2rem 0.65rem",
                            borderRadius: "9999px",
                            background: tc.bg,
                            color: tc.color,
                            fontSize: "0.72rem",
                            fontWeight: 700,
                            border: `1px solid ${tc.border}30`,
                          }}
                        >
                          {event.type}
                        </span>
                      </div>

                      <h2 style={{ fontWeight: 800, fontSize: "1.25rem", color: "var(--text)", marginBottom: "0.5rem", lineHeight: 1.3 }}>
                        {event.title}
                      </h2>
                      <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.85rem" }}>
                        {event.desc}
                      </p>

                      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                        <span style={{ display: "flex", alignItems: "center", gap: "0.35rem", fontSize: "0.8125rem", color: "var(--text-muted)" }}>
                          <Clock size={14} color="var(--primary)" /> {event.time}
                        </span>
                        <span style={{ display: "flex", alignItems: "center", gap: "0.35rem", fontSize: "0.8125rem", color: "var(--text-muted)" }}>
                          <MapPin size={14} color="var(--primary)" /> {event.venue}
                        </span>
                        <span style={{ display: "flex", alignItems: "center", gap: "0.35rem", fontSize: "0.8125rem", color: "var(--text-muted)" }}>
                          <Users size={14} color="var(--primary)" /> {event.attending + (isRegistered ? 1 : 0)} attending
                        </span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div style={{ flexShrink: 0 }}>
                      {isRegistered ? (
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.35rem",
                            padding: "0.6rem 1.25rem",
                            borderRadius: "0.5rem",
                            background: "rgba(22,163,74,0.1)",
                            color: "var(--success)",
                            fontWeight: 700,
                            fontSize: "0.85rem",
                          }}
                        >
                          <CheckCircle size={16} /> RSVP Confirmed
                        </div>
                      ) : (
                        <button
                          onClick={() => setActiveModalEvent(event)}
                          className="btn-outline"
                          style={{
                            padding: "0.6rem 1.35rem",
                            fontSize: "0.85rem",
                            borderRadius: "0.5rem",
                            fontWeight: 700,
                          }}
                        >
                          Register RSVP
                        </button>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* RSVP Modal */}
      {activeModalEvent && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
            backgroundColor: "rgba(15, 23, 42, 0.65)",
            backdropFilter: "blur(4px)",
            animation: "fadeIn 0.2s ease-out",
          }}
          onClick={() => setActiveModalEvent(null)}
        >
          <div
            style={{
              background: "#ffffff",
              borderRadius: "1.125rem",
              maxWidth: "500px",
              width: "100%",
              padding: "2rem",
              position: "relative",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalEvent(null)}
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

            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
                padding: "0.25rem 0.75rem",
                borderRadius: "9999px",
                background: "rgba(6,163,236,0.1)",
                color: "var(--primary-dark)",
                fontSize: "0.75rem",
                fontWeight: 700,
                marginBottom: "0.75rem",
              }}
            >
              <Sparkles size={12} /> Confirm Attendance
            </span>

            <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.5rem" }}>
              {activeModalEvent.title}
            </h3>

            <div style={{ background: "var(--background)", padding: "1rem", borderRadius: "0.75rem", border: "1px solid var(--border)", marginBottom: "1.25rem" }}>
              <div style={{ fontSize: "0.85rem", color: "var(--text)", fontWeight: 600, marginBottom: "0.35rem" }}>
                📅 Date: {new Date(activeModalEvent.date).toLocaleDateString("en-BD", { day: "numeric", month: "long", year: "numeric" })} ({activeModalEvent.time})
              </div>
              <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                📍 Venue: {activeModalEvent.venue}
              </div>
            </div>

            <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
              Confirm your RSVP to receive schedule updates, entry instructions, and badge registration details.
            </p>

            <div style={{ display: "flex", gap: "0.75rem", justifyContent: "flex-end" }}>
              <button
                onClick={() => setActiveModalEvent(null)}
                style={{
                  padding: "0.6rem 1.25rem",
                  borderRadius: "0.5rem",
                  border: "1px solid var(--border)",
                  background: "white",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
              <button
                onClick={() => handleRegister(activeModalEvent.id)}
                className="btn-primary"
                style={{ padding: "0.6rem 1.5rem", fontSize: "0.85rem" }}
              >
                Confirm RSVP
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
