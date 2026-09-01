import Link from "next/link";
import { orgInfo, coreValues, timeline } from "@/lib/data/demo";
import {
  Heart,
  Eye,
  Target,
  BookOpen,
  Users,
  Shield,
  CheckCircle,
  Handshake,
  Globe,
  Calendar,
  ArrowRight,
  Sparkles,
  Building,
  GraduationCap,
} from "lucide-react";

export const metadata = {
  title: "About Us — Biddyasetu",
  description: "Learn about Biddyasetu — its history, mission, vision, and core values. A non-profit alumni organization of Adarsha High School, Kaitola.",
};

const iconMap = {
  Heart,
  Eye,
  BookOpen,
  Users,
  Shield,
  CheckCircle,
  HandHeart: Handshake,
  Globe,
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner with Modern Gradient */}
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
            <Sparkles size={14} color="#fde047" /> Est. 17 February 2026 · Non-profit
          </span>
          <h1 style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", fontWeight: 900, marginBottom: "0.75rem", letterSpacing: "-0.02em" }}>
            About Biddyasetu
          </h1>
          <p style={{ fontSize: "1.0625rem", opacity: 0.92, lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
            The official alumni and student welfare organization of Adarsha High School, Kaitola.
          </p>
        </div>
      </section>

      {/* Story & Quick Facts */}
      <section className="section-padding" style={{ background: "var(--surface)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "3.5rem", alignItems: "center" }}>
            <div>
              <span className="badge badge-primary" style={{ marginBottom: "1rem" }}>
                <BookOpen size={12} /> Our Story & Heritage
              </span>
              <h2 className="section-heading" style={{ marginBottom: "1rem" }}>
                Who We Are
              </h2>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1rem", fontSize: "0.95rem" }}>
                <strong style={{ color: "var(--text)" }}>Biddyasetu (বিদ্যাসেতু)</strong> — meaning "Bridge of Education" — is a voluntary, non-political, non-profit alumni organization founded by former students of Adarsha High School, Kaitola.
              </p>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1rem", fontSize: "0.95rem" }}>
                Established on <strong style={{ color: "var(--text)" }}>17 February 2026</strong>, Biddyasetu was born from the collective aspiration of alumni across generations to remain connected, mentor students, and give back to our beloved alma mater.
              </p>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "2rem", fontSize: "0.95rem" }}>
                Operating across <strong style={{ color: "var(--text)" }}>Bangladesh and internationally</strong>, we empower students through scholarships, emergency aid, school development projects, and networking reunions.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/membership" className="btn-primary">
                  Join Biddyasetu <ArrowRight size={15} />
                </Link>
                <Link href="/structure" className="btn-outline">
                  View Organization Structure
                </Link>
              </div>
            </div>

            {/* Quick facts card */}
            <div
              className="card interactive-card-sm"
              style={{
                padding: "2rem",
                borderRadius: "1.25rem",
                border: "1.5px solid var(--border)",
                background: "linear-gradient(135deg, #ffffff 0%, rgba(6,163,236,0.02) 100%)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem" }}>
                <Building size={20} color="var(--primary)" />
                <h3 style={{ fontWeight: 800, fontSize: "1.15rem", color: "var(--text)", margin: 0 }}>
                  Organization Overview
                </h3>
              </div>

              {[
                { label: "Organization Name", val: "Biddyasetu (বিদ্যাসেতু)" },
                { label: "Institution", val: orgInfo.school },
                { label: "Established Date", val: orgInfo.established },
                { label: "Operating Area", val: orgInfo.workingArea },
                { label: "Legal Entity", val: "Non-profit · Voluntary Organization" },
                { label: "Official Contact", val: orgInfo.email },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "1rem",
                    padding: "0.85rem 0",
                    borderBottom: "1px solid var(--border)",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: 500 }}>{item.label}</span>
                  <span style={{ fontSize: "0.875rem", color: "var(--text)", fontWeight: 700, textAlign: "right" }}>{item.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="section-padding" style={{ background: "var(--background)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="badge badge-primary" style={{ marginBottom: "0.75rem" }}>
              <Target size={12} /> Strategic Purpose
            </span>
            <h2 className="section-heading">Mission & Vision</h2>
            <p className="section-subheading" style={{ margin: "0.5rem auto 0" }}>
              Our guiding compass for building an inclusive and impactful alumni community.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
            {/* Mission Card */}
            <div
              className="card interactive-card"
              style={{
                padding: "2.5rem",
                borderRadius: "1.25rem",
                background: "#ffffff",
                borderTop: "5px solid var(--primary)",
                border: "1.5px solid var(--border)",
                borderTopWidth: "5px",
                borderTopColor: "var(--primary)",
              }}
            >
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "12px",
                  background: "rgba(6,163,236,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                }}
              >
                <Target size={26} color="var(--primary)" />
              </div>
              <h3 style={{ fontWeight: 800, fontSize: "1.35rem", marginBottom: "1rem", color: "var(--text)" }}>Our Mission</h3>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "0.95rem" }}>
                {orgInfo.mission}
              </p>
            </div>

            {/* Vision Card */}
            <div
              className="card interactive-card"
              style={{
                padding: "2.5rem",
                borderRadius: "1.25rem",
                background: "#ffffff",
                borderTop: "5px solid var(--secondary-dark)",
                border: "1.5px solid var(--border)",
                borderTopWidth: "5px",
                borderTopColor: "var(--secondary-dark)",
              }}
            >
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "12px",
                  background: "rgba(250,228,6,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                }}
              >
                <Eye size={26} color="var(--secondary-dark)" />
              </div>
              <h3 style={{ fontWeight: 800, fontSize: "1.35rem", marginBottom: "1rem", color: "var(--text)" }}>Our Vision</h3>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "0.95rem" }}>
                {orgInfo.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section id="values" className="section-padding" style={{ background: "var(--surface)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="badge badge-secondary" style={{ marginBottom: "0.75rem" }}>
              <Heart size={12} /> Pillars of Action
            </span>
            <h2 className="section-heading">Our Core Values</h2>
            <p className="section-subheading" style={{ margin: "0.5rem auto 0" }}>
              The foundational principles that guide every initiative and interaction at Biddyasetu.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {coreValues.map((val, i) => {
              const Icon = iconMap[val.icon] || Heart;
              const colors = [
                { icon: "var(--primary)", bg: "rgba(6,163,236,0.1)" },
                { icon: "#7c3aed", bg: "rgba(124,58,237,0.1)" },
                { icon: "var(--success)", bg: "rgba(22,163,74,0.1)" },
                { icon: "#d97706", bg: "rgba(217,119,6,0.1)" },
                { icon: "#dc2626", bg: "rgba(220,38,38,0.1)" },
                { icon: "#0891b2", bg: "rgba(8,145,178,0.1)" },
              ];
              const c = colors[i % colors.length];
              return (
                <div
                  key={val.title}
                  className="card interactive-card-sm"
                  style={{
                    padding: "1.75rem",
                    borderRadius: "1rem",
                    border: "1.5px solid var(--border)",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      background: c.bg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <Icon size={22} color={c.icon} />
                  </div>
                  <h3 style={{ fontWeight: 800, fontSize: "1.0625rem", color: "var(--text)", marginBottom: "0.5rem" }}>
                    {val.title}
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.65, margin: 0 }}>
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding" style={{ background: "var(--background)" }}>
        <div style={{ maxWidth: "840px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="badge badge-primary" style={{ marginBottom: "0.75rem" }}>
              <Calendar size={12} /> Milestones
            </span>
            <h2 className="section-heading">Our Founding Journey</h2>
          </div>

          <div style={{ position: "relative", paddingLeft: "2.25rem" }}>
            {/* Vertical timeline line */}
            <div
              style={{
                position: "absolute",
                left: "0.95rem",
                top: 0,
                bottom: 0,
                width: "3px",
                background: "linear-gradient(180deg, var(--primary) 0%, var(--border) 100%)",
                borderRadius: "9999px",
              }}
            />

            {timeline.map((item, i) => (
              <div key={i} style={{ position: "relative", paddingBottom: "2rem" }}>
                {/* Dot */}
                <div
                  style={{
                    position: "absolute",
                    left: "-1.85rem",
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    background: "var(--primary)",
                    border: "3px solid #ffffff",
                    boxShadow: "0 0 0 3px rgba(6,163,236,0.3)",
                    top: "8px",
                  }}
                />
                <div
                  className="card interactive-card-slide"
                  style={{
                    padding: "1.35rem 1.75rem",
                    borderRadius: "1rem",
                    border: "1.5px solid var(--border)",
                  }}
                >
                  <div style={{ fontSize: "0.8125rem", fontWeight: 800, color: "var(--primary)", marginBottom: "0.25rem" }}>
                    {item.year}
                  </div>
                  <h3 style={{ fontWeight: 800, color: "var(--text)", marginBottom: "0.35rem", fontSize: "1.05rem" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", margin: 0, lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
