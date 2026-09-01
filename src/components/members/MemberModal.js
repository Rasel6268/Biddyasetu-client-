"use client";

import { useState } from "react";
import {
  X,
  MapPin,
  GraduationCap,
  BadgeCheck,
  Droplets,
  Briefcase,
  Mail,
  Share2,
  Calendar,
  Building,
  Award,
  CheckCircle,
  ExternalLink,
  MessageSquare,
} from "lucide-react";
import { FaLinkedin, FaFacebook } from "react-icons/fa";

export default function MemberModal({ member, onClose }) {
  const [copied, setCopied] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [showContactForm, setShowContactForm] = useState(false);

  if (!member) return null;

  const handleShare = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!messageText.trim()) return;
    setMessageSent(true);
    setTimeout(() => {
      setMessageSent(false);
      setShowContactForm(false);
      setMessageText("");
    }, 2000);
  };

  return (
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
        backdropFilter: "blur(6px)",
        animation: "fadeIn 0.2s ease-out",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#ffffff",
          borderRadius: "1.25rem",
          maxWidth: "600px",
          width: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          position: "relative",
          border: "1px solid var(--border)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Cover Banner */}
        <div
          style={{
            height: "120px",
            background: "linear-gradient(135deg, #0369a1 0%, #06A3EC 60%, #9BD6E4 100%)",
            position: "relative",
            borderTopLeftRadius: "1.25rem",
            borderTopRightRadius: "1.25rem",
          }}
        >
          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              background: "rgba(0, 0, 0, 0.3)",
              border: "none",
              color: "white",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0, 0, 0, 0.5)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(0, 0, 0, 0.3)")}
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: "0 2rem 2rem", marginTop: "-50px" }}>
          {/* Avatar & Key Meta */}
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", marginBottom: "1rem" }}>
            <div style={{ position: "relative" }}>
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${member.avatarColor || "#06A3EC"}bb, ${member.avatarColor || "#06A3EC"})`,
                  border: "4px solid #ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: 800,
                  fontSize: "2rem",
                  boxShadow: "0 8px 16px rgba(0,0,0,0.12)",
                }}
              >
                {member.initials}
              </div>
              {member.verified && (
                <div
                  style={{
                    position: "absolute",
                    bottom: 2,
                    right: 2,
                    background: "#ffffff",
                    borderRadius: "50%",
                    padding: "2px",
                    display: "flex",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  }}
                  title="Verified Alumni Member"
                >
                  <BadgeCheck size={24} color="#06A3EC" fill="#06A3EC" stroke="#ffffff" />
                </div>
              )}
            </div>

            <div style={{ display: "flex", gap: "0.5rem" }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  padding: "0.35rem 0.85rem",
                  borderRadius: "9999px",
                  background: member.membership === "Life Member" ? "rgba(250,228,6,0.18)" : "rgba(6,163,236,0.1)",
                  color: member.membership === "Life Member" ? "#854d0e" : "var(--primary-dark)",
                  fontWeight: 700,
                  fontSize: "0.75rem",
                }}
              >
                <Award size={13} />
                {member.membership}
              </span>
              {member.bloodGroup && (
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.25rem",
                    padding: "0.35rem 0.75rem",
                    borderRadius: "9999px",
                    background: "rgba(220,38,38,0.1)",
                    color: "#dc2626",
                    fontWeight: 700,
                    fontSize: "0.75rem",
                  }}
                  title={`Blood Donor: ${member.bloodGroup}`}
                >
                  <Droplets size={12} fill="#dc2626" />
                  {member.bloodGroup}
                </span>
              )}
            </div>
          </div>

          {/* Member Name & Subtitles */}
          <div style={{ marginBottom: "1.5rem" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.25rem" }}>
              {member.name}
            </h2>
            <p style={{ fontSize: "0.95rem", color: "var(--primary)", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.35rem" }}>
              <GraduationCap size={16} /> Batch: {member.batch}
            </p>
            <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Briefcase size={15} /> {member.profession} · <MapPin size={15} /> {member.location}, {member.country}
            </p>
          </div>

          {/* Info Cards Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "0.75rem",
              marginBottom: "1.5rem",
            }}
          >
            {member.education && (
              <div style={{ background: "var(--background)", padding: "0.85rem 1rem", borderRadius: "0.75rem", border: "1px solid var(--border)" }}>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 600, marginBottom: "0.25rem", display: "flex", alignItems: "center", gap: "0.35rem" }}>
                  <Building size={13} /> Higher Education
                </div>
                <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text)" }}>{member.education}</div>
              </div>
            )}
            <div style={{ background: "var(--background)", padding: "0.85rem 1rem", borderRadius: "0.75rem", border: "1px solid var(--border)" }}>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 600, marginBottom: "0.25rem", display: "flex", alignItems: "center", gap: "0.35rem" }}>
                <Calendar size={13} /> Community Status
              </div>
              <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text)" }}>
                {member.verified ? "Verified Alumnus" : "Active Member"}
              </div>
            </div>
          </div>

          {/* Biography */}
          <div style={{ marginBottom: "1.75rem" }}>
            <h4 style={{ fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--text-muted)", marginBottom: "0.5rem" }}>
              About
            </h4>
            <p style={{ fontSize: "0.925rem", color: "var(--text)", lineHeight: 1.7, background: "rgba(6,163,236,0.03)", padding: "1rem", borderRadius: "0.75rem", border: "1px solid var(--border)" }}>
              {member.bio || "Proud alumnus of Adarsha High School, Kaitola committed to community development, youth mentorship, and student welfare."}
            </p>
          </div>

          {/* Social Links & Interactive Actions */}
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem", paddingTop: "1rem", borderTop: "1px solid var(--border)" }}>
            <div style={{ display: "flex", gap: "0.6rem" }}>
              {member.social?.linkedin && (
                <a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    padding: "0.5rem 0.85rem",
                    borderRadius: "0.5rem",
                    background: "#0a66c2",
                    color: "white",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  <FaLinkedin size={14} /> LinkedIn
                </a>
              )}
              {member.social?.facebook && (
                <a
                  href={member.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    padding: "0.5rem 0.85rem",
                    borderRadius: "0.5rem",
                    background: "#1877f2",
                    color: "white",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  <FaFacebook size={14} /> Facebook
                </a>
              )}
              <button
                onClick={handleShare}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  padding: "0.5rem 0.85rem",
                  borderRadius: "0.5rem",
                  background: "var(--background)",
                  border: "1px solid var(--border)",
                  color: "var(--text)",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                <Share2 size={14} /> {copied ? "Copied!" : "Share"}
              </button>
            </div>

            <button
              onClick={() => setShowContactForm(!showContactForm)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.55rem 1.25rem",
                borderRadius: "0.5rem",
                background: "var(--primary)",
                color: "white",
                border: "none",
                fontWeight: 700,
                fontSize: "0.85rem",
                cursor: "pointer",
                transition: "background 0.2s",
              }}
            >
              <MessageSquare size={14} />
              {showContactForm ? "Cancel" : "Connect"}
            </button>
          </div>

          {/* Quick Connect / Message Form */}
          {showContactForm && (
            <div style={{ marginTop: "1.25rem", padding: "1.25rem", background: "var(--background)", borderRadius: "0.75rem", border: "1px solid var(--border)", animation: "fadeIn 0.2s ease" }}>
              <h5 style={{ fontWeight: 700, fontSize: "0.875rem", marginBottom: "0.5rem", color: "var(--text)" }}>
                Send a message to {member.name}
              </h5>
              {messageSent ? (
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--success)", fontSize: "0.875rem", fontWeight: 600, padding: "0.5rem 0" }}>
                  <CheckCircle size={18} /> Message request sent successfully!
                </div>
              ) : (
                <form onSubmit={handleSendMessage}>
                  <textarea
                    rows={3}
                    placeholder={`Hi ${member.name}, I am also an alumnus of Adarsha High School...`}
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    required
                    style={{
                      width: "100%",
                      padding: "0.6rem 0.75rem",
                      borderRadius: "0.5rem",
                      border: "1.5px solid var(--border)",
                      background: "#ffffff",
                      fontSize: "0.85rem",
                      marginBottom: "0.75rem",
                      outline: "none",
                      fontFamily: "inherit",
                    }}
                  />
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <button
                      type="submit"
                      style={{
                        padding: "0.45rem 1rem",
                        borderRadius: "0.5rem",
                        background: "var(--primary)",
                        color: "white",
                        border: "none",
                        fontWeight: 600,
                        fontSize: "0.8rem",
                        cursor: "pointer",
                      }}
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
