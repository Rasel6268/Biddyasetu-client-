"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  GraduationCap,
  ChevronDown,
  Users,
  Sparkles,
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Biddyasetu", href: "/about" },
      { label: "Mission & Vision", href: "/about#mission" },
      { label: "Core Values", href: "/about#values" },
    ],
  },
  { label: "Structure", href: "/structure" },
  { label: "Alumni Directory", href: "/members" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: scrolled ? "rgba(255,255,255,0.96)" : "rgba(253,249,223,0.98)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 20px -2px rgba(0,0,0,0.06)" : "none",
        transition: "all 0.25s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}
        >
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #0369a1, #06A3EC)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              boxShadow: "0 4px 12px rgba(6,163,236,0.3)",
            }}
          >
            <GraduationCap size={24} color="white" />
          </div>
          <div>
            <div style={{ fontWeight: 900, fontSize: "1.2rem", color: "var(--text)", lineHeight: 1.15, letterSpacing: "-0.01em" }}>
              বিদ্যাসেতু
            </div>
            <div style={{ fontSize: "0.68rem", color: "var(--text-muted)", lineHeight: 1, fontWeight: 600 }}>
              Adarsha High School, Kaitola
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "0.25rem" }} className="hide-mobile">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                style={{ position: "relative" }}
                onMouseEnter={() => setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem",
                    padding: "0.5rem 0.875rem",
                    borderRadius: "0.5rem",
                    background: openDropdown === link.label ? "rgba(6,163,236,0.08)" : "transparent",
                    color: openDropdown === link.label ? "var(--primary)" : "var(--text)",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                  }}
                >
                  {link.label}
                  <ChevronDown
                    size={14}
                    style={{
                      transition: "transform 0.2s",
                      transform: openDropdown === link.label ? "rotate(180deg)" : "none",
                    }}
                  />
                </button>
                {openDropdown === link.label && (
                  <div
                    style={{
                      position: "absolute",
                      top: "calc(100% + 4px)",
                      left: 0,
                      background: "white",
                      border: "1px solid var(--border)",
                      borderRadius: "0.75rem",
                      padding: "0.5rem",
                      minWidth: "210px",
                      boxShadow: "0 15px 35px -5px rgba(0,0,0,0.12)",
                      animation: "fadeIn 0.15s ease",
                    }}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="nav-pill"
                        style={{ display: "block", fontSize: "0.875rem", padding: "0.55rem 0.85rem" }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={link.href} href={link.href} className="nav-pill">
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }} className="hide-mobile">
          <Link
            href="/membership"
            className="btn-primary"
            style={{ padding: "0.55rem 1.25rem", fontSize: "0.875rem", borderRadius: "9999px" }}
          >
            <Users size={15} /> Join Biddyasetu
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: "none",
            padding: "0.5rem",
            borderRadius: "0.5rem",
            border: "1px solid var(--border)",
            background: "transparent",
            cursor: "pointer",
            color: "var(--text)",
          }}
          className="show-mobile"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div
          style={{
            background: "white",
            borderTop: "1px solid var(--border)",
            padding: "1rem 1.5rem",
            animation: "fadeIn 0.2s ease",
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
          }}
          className="show-mobile"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="nav-pill"
                style={{ display: "block", padding: "0.75rem 1rem", fontSize: "0.95rem" }}
              >
                {link.label}
              </Link>
            ))}
            <div style={{ paddingTop: "0.75rem", borderTop: "1px solid var(--border)", marginTop: "0.25rem" }}>
              <Link
                href="/membership"
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center", borderRadius: "9999px" }}
                onClick={() => setMobileOpen(false)}
              >
                <Users size={16} /> Become a Member
              </Link>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .hide-mobile {
            display: none !important;
          }
          .show-mobile {
            display: flex !important;
          }
        }
        @media (min-width: 769px) {
          .show-mobile {
            display: none !important;
          }
          .hide-mobile {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
