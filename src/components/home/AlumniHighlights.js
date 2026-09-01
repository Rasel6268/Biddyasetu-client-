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
        boxShadow: `0 4px 12px ${color || "#06A3EC"}30`,
        border: "2px solid #ffffff",
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
    <section className="section-padding" style={{ background: "var(--background)", position: "relative" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        {/* Section Header */}
        <ScrollAnimation animation="fade-in-up">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "1.25rem",
              marginBottom: "3rem",
            }}
          >
            <div>
              <span className="badge badge-primary" style={{ marginBottom: "0.75rem" }}>
                <Users size={12} /> Alumni Spotlight
              </span>
              <h2 className="section-heading">Connect with Inspiring Alumni</h2>
              <p className="section-subheading" style={{ marginTop: "0.5rem" }}>
                Meet graduates of Adarsha High School making an impact across industries worldwide.
              </p>
            </div>
            <Link
              href="/members"
              className="btn-outline"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.65rem 1.25rem",
                borderRadius: "0.5rem",
                fontWeight: 700,
                fontSize: "0.875rem",
              }}
            >
              Explore Full Directory ({alumniMembers.length}+) <ArrowRight size={15} />
            </Link>
          </div>
        </ScrollAnimation>

        {/* Member Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: "1.25rem" }}>
          {featured.map((member, index) => (
            <ScrollAnimation key={member.id} animation="fade-in-up" delay={index * 80}>
              <article
                onClick={() => setSelectedMember(member)}
                className="card interactive-card"
                style={{
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                  cursor: "pointer",
                  border: "1.5px solid var(--border)",
                  position: "relative",
                  borderRadius: "1rem",
                }}
              >
                {/* Top Info */}
                <div>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "1.15rem", marginBottom: "0.85rem" }}>
                    <div style={{ position: "relative", flexShrink: 0 }}>
                      <Avatar initials={member.initials} color={member.avatarColor} size={64} />
                      {member.verified && (
                        <div
                          style={{
                            position: "absolute",
                            bottom: -2,
                            right: -4,
                            background: "#ffffff",
                            borderRadius: "50%",
                            padding: "1px",
                            display: "flex",
                          }}
                          title="Verified Alumni"
                        >
                          <BadgeCheck size={18} color="#06A3EC" fill="#06A3EC" stroke="#ffffff" />
                        </div>
                      )}
                    </div>

                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h3
                        style={{
                          fontWeight: 700,
                          fontSize: "1.0625rem",
                          color: "var(--text)",
                          marginBottom: "0.2rem",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {member.name}
                      </h3>

                      <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", flexWrap: "wrap", marginBottom: "0.4rem" }}>
                        <span
                          style={{
                            padding: "0.15rem 0.5rem",
                            borderRadius: "0.375rem",
                            background: "rgba(6,163,236,0.08)",
                            color: "var(--primary)",
                            fontWeight: 700,
                            fontSize: "0.75rem",
                          }}
                        >
                          {member.batch}
                        </span>
                        <span
                          style={{
                            padding: "0.15rem 0.5rem",
                            borderRadius: "0.375rem",
                            background: member.membership === "Life Member" ? "rgba(250,228,6,0.15)" : "rgba(100,116,139,0.08)",
                            color: member.membership === "Life Member" ? "#854d0e" : "var(--text-muted)",
                            fontWeight: 600,
                            fontSize: "0.7rem",
                          }}
                        >
                          {member.membership}
                        </span>
                        {member.bloodGroup && (
                          <span
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "0.2rem",
                              padding: "0.15rem 0.45rem",
                              borderRadius: "0.375rem",
                              background: "rgba(220,38,38,0.08)",
                              color: "#dc2626",
                              fontWeight: 700,
                              fontSize: "0.7rem",
                            }}
                          >
                            <Droplets size={10} fill="#dc2626" /> {member.bloodGroup}
                          </span>
                        )}
                      </div>

                      <div style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
                        <span style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.8125rem", color: "var(--text-muted)", fontWeight: 500 }}>
                          <GraduationCap size={13} color="var(--primary)" /> {member.profession}
                        </span>
                        <span style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.8125rem", color: "var(--text-muted)" }}>
                          <MapPin size={13} color="var(--primary)" /> {member.location}, {member.country}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p
                    style={{
                      fontSize: "0.8125rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.6,
                      margin: "0 0 1rem",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {member.bio}
                  </p>
                </div>

                {/* Card Action Link */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: "0.75rem",
                    borderTop: "1px solid var(--border)",
                  }}
                >
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 500 }}>
                    {member.education || "Adarsha High School"}
                  </span>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.25rem",
                      color: "var(--primary)",
                      fontWeight: 700,
                      fontSize: "0.8rem",
                    }}
                  >
                    View Profile <ChevronRight size={14} />
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
