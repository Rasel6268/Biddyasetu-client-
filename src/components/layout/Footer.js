"use client";

import Link from "next/link";
import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Heart,
  ArrowRight,
} from "lucide-react";
import { orgInfo } from "@/lib/data/demo";

const footerLinks = {
  Organization: [
    { label: "About Biddyasetu", href: "/about" },
    { label: "Organization Structure", href: "/structure" },
    { label: "Core Values", href: "/about#values" },
    { label: "Founding Milestones", href: "/about#timeline" },
  ],
  Community: [
    { label: "Alumni Directory", href: "/members" },
    { label: "Upcoming Events", href: "/events" },
    { label: "Scholarship Program", href: "/#scholarships" },
    { label: "Inspiring Stories", href: "/#stories" },
  ],
  "Get Involved": [
    { label: "Become a Member", href: "/membership" },
    { label: "Donate to Welfare Fund", href: "/contact#donate" },
    { label: "Contact Committee", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: "#0a1526", color: "white" }}>
      {/* Donation Banner */}
      <div
        style={{
          background: "linear-gradient(135deg, #0369a1 0%, #06A3EC 100%)",
          padding: "3rem 1.5rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <p style={{ fontSize: "0.8125rem", fontWeight: 800, letterSpacing: "0.08em", opacity: 0.9, marginBottom: "0.4rem", textTransform: "uppercase" }}>
            Support Student Education
          </p>
          <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontWeight: 900, marginBottom: "0.85rem", letterSpacing: "-0.01em" }}>
            Help Us Empower More Students
          </h2>
          <p style={{ opacity: 0.9, marginBottom: "1.75rem", lineHeight: 1.6, fontSize: "0.95rem" }}>
            Your contribution directly finances scholarships and emergency relief for deserving students of Adarsha High School, Kaitola.
          </p>
          <Link
            href="/contact#donate"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.85rem 2rem",
              background: "#fae406",
              color: "#1e293b",
              fontWeight: 800,
              borderRadius: "9999px",
              textDecoration: "none",
              fontSize: "0.95rem",
              boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
              transition: "transform 0.2s ease",
            }}
            className="hero-btn-secondary"
          >
            <Heart size={18} />
            Donate to Fund
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Main Footer Links */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "4rem 1.5rem 2.5rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "3rem",
        }}
      >
        {/* Brand Column */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #0369a1, #06A3EC)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 12px rgba(6,163,236,0.3)",
              }}
            >
              <GraduationCap size={24} color="white" />
            </div>
            <div>
              <div style={{ fontWeight: 900, fontSize: "1.2rem", lineHeight: 1.15 }}>বিদ্যাসেতু</div>
              <div style={{ fontSize: "0.68rem", opacity: 0.65, fontWeight: 500 }}>Adarsha High School, Kaitola</div>
            </div>
          </div>

          <p style={{ opacity: 0.75, fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
            A non-political, non-profit voluntary alumni network committed to educational empowerment, student scholarships, and community welfare.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
            <a href={`mailto:${orgInfo.email}`} className="footer-contact-link">
              <Mail size={14} color="var(--primary-light)" /> {orgInfo.email}
            </a>
            <a href={`tel:${orgInfo.phone}`} className="footer-contact-link">
              <Phone size={14} color="var(--primary-light)" /> {orgInfo.phone}
            </a>
            <span className="footer-contact-link">
              <MapPin size={14} color="var(--primary-light)" style={{ marginTop: "3px", flexShrink: 0 }} /> {orgInfo.address}
            </span>
          </div>
        </div>

        {/* Link Columns */}
        {Object.entries(footerLinks).map(([section, links]) => (
          <div key={section}>
            <h3
              style={{
                fontWeight: 800,
                fontSize: "0.85rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "var(--primary-light)",
                marginBottom: "1.25rem",
              }}
            >
              {section}
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">
                    <ArrowRight size={12} color="var(--primary-light)" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Legal Bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          padding: "1.5rem",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        <p style={{ opacity: 0.6, fontSize: "0.8125rem", margin: 0 }}>
          © {new Date().getFullYear()} Biddyasetu — Adarsha High School, Kaitola. All rights reserved.
        </p>
        <p style={{ opacity: 0.5, fontSize: "0.8125rem", margin: 0 }}>
          Est. 17 February 2026 · {orgInfo.type}
        </p>
      </div>
    </footer>
  );
}
