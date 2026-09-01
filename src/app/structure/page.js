import { committeeRoles, executiveMembers, batchRepresentatives } from "@/lib/data/demo";
import { Users, Crown, Shield, Star, Award, GraduationCap } from "lucide-react";

export const metadata = {
  title: "Organization Structure — Biddyasetu",
  description: "View the executive committee, members, and batch representatives of Biddyasetu alumni organization.",
};

function Avatar({ name, size = 56 }) {
  const colors = ["#06A3EC", "#0588C5", "#16A34A", "#7c3aed", "#dc2626", "#d97706", "#0891b2", "#be185d", "#059669"];
  const idx = name.charCodeAt(0) % colors.length;
  const initials = name.split(" ").slice(0, 2).map((n) => n[0]).join("").toUpperCase();
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: `linear-gradient(135deg, ${colors[idx]}cc, ${colors[idx]})`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontWeight: 800,
        fontSize: size * 0.32,
        flexShrink: 0,
        boxShadow: `0 4px 12px ${colors[idx]}30`,
        border: "2px solid #ffffff",
      }}
    >
      {initials}
    </div>
  );
}

export default function StructurePage() {
  // Split into key leadership and secretaries
  const leadership = committeeRoles.slice(0, 6);
  const secretaries = committeeRoles.slice(6);

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
        <div style={{ maxWidth: "720px", margin: "0 auto", position: "relative", zIndex: 2 }}>
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
            <Crown size={14} color="#fde047" /> Governing Body & Representatives
          </span>
          <h1 style={{ fontSize: "clamp(2.25rem, 5vw, 3.25rem)", fontWeight: 900, marginBottom: "0.75rem", letterSpacing: "-0.02em" }}>
            Organization Structure
          </h1>
          <p style={{ fontSize: "1.0625rem", opacity: 0.92, lineHeight: 1.6 }}>
            Meet the dedicated leadership team, secretariat, executive members, and batch liaisons steering Biddyasetu.
          </p>
        </div>
      </section>

      {/* 1. Executive Leadership */}
      <section className="section-padding" style={{ background: "var(--surface)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="badge badge-primary" style={{ marginBottom: "0.75rem" }}>
              <Crown size={12} /> Key Leadership
            </span>
            <h2 className="section-heading">Executive Leadership</h2>
            <p className="section-subheading" style={{ margin: "0.5rem auto 0" }}>
              The core leadership team responsible for governance and strategic direction.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "1.25rem" }}>
            {leadership.map((member) => (
              <div
                key={member.role}
                className="card interactive-card"
                style={{
                  padding: "1.35rem 1.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.25rem",
                  borderLeft: "4px solid var(--primary)",
                  borderRadius: "1rem",
                  border: "1.5px solid var(--border)",
                  borderLeftWidth: "4px",
                  borderLeftColor: "var(--primary)",
                }}
              >
                {/* Left Side: Avatar */}
                <Avatar name={member.name} size={64} />

                {/* Right Side: Information */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "0.2rem 0.65rem",
                      borderRadius: "9999px",
                      background: "rgba(6,163,236,0.1)",
                      color: "var(--primary-dark)",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      marginBottom: "0.35rem",
                    }}
                  >
                    {member.role}
                  </span>
                  <h3
                    style={{
                      fontWeight: 800,
                      fontSize: "1.0625rem",
                      color: "var(--text)",
                      margin: "0 0 0.25rem",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {member.name}
                  </h3>
                  <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)", margin: 0, display: "flex", alignItems: "center", gap: "0.35rem", fontWeight: 500 }}>
                    <GraduationCap size={13} color="var(--primary)" /> Batch: {member.batch}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Committee Secretaries */}
      <section className="section-padding" style={{ background: "var(--background)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="badge badge-primary" style={{ marginBottom: "0.75rem" }}>
              <Shield size={12} /> Secretariat
            </span>
            <h2 className="section-heading">Secretaries & Department Leads</h2>
            <p className="section-subheading" style={{ margin: "0.5rem auto 0" }}>
              Departmental secretaries executing education, social welfare, culture, and communication programs.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.15rem" }}>
            {secretaries.map((member) => (
              <div
                key={member.role}
                className="card interactive-card-sm"
                style={{
                  padding: "1.25rem 1.35rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.15rem",
                  borderRadius: "0.875rem",
                  border: "1.5px solid var(--border)",
                }}
              >
                {/* Left Side: Avatar */}
                <Avatar name={member.name} size={52} />

                {/* Right Side: Information */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color: "var(--primary)",
                      marginBottom: "0.2rem",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {member.role}
                  </div>
                  <h3
                    style={{
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      color: "var(--text)",
                      margin: "0 0 0.2rem",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {member.name}
                  </h3>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "0.3rem" }}>
                    <GraduationCap size={12} /> Batch: {member.batch}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Executive Members */}
      <section className="section-padding" style={{ background: "var(--surface)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="badge badge-secondary" style={{ marginBottom: "0.75rem" }}>
              <Users size={12} /> Executive Committee
            </span>
            <h2 className="section-heading">Executive Members</h2>
            <p className="section-subheading" style={{ margin: "0.5rem auto 0" }}>
              Active committee members participating in decision-making and field initiatives.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.15rem" }}>
            {executiveMembers.map((m) => (
              <div
                key={m.name}
                className="card interactive-card-sm"
                style={{
                  padding: "1.15rem 1.25rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.1rem",
                  borderRadius: "0.875rem",
                  border: "1.5px solid var(--border)",
                }}
              >
                {/* Left Side: Avatar */}
                <Avatar name={m.name} size={50} />

                {/* Right Side: Information */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "0.15rem 0.5rem",
                      borderRadius: "9999px",
                      background: "rgba(250,228,6,0.15)",
                      color: "#854d0e",
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      marginBottom: "0.25rem",
                    }}
                  >
                    Executive Member
                  </span>
                  <h3 style={{ fontWeight: 700, fontSize: "0.925rem", color: "var(--text)", margin: "0 0 0.2rem" }}>
                    {m.name}
                  </h3>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "0.3rem" }}>
                    <GraduationCap size={12} /> Batch: {m.batch}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Batch Representatives */}
      <section className="section-padding" style={{ background: "var(--background)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="badge badge-primary" style={{ marginBottom: "0.75rem" }}>
              <Star size={12} fill="var(--primary)" /> Batch Liaisons
            </span>
            <h2 className="section-heading">Batch Representatives</h2>
            <p className="section-subheading" style={{ margin: "0.5rem auto 0" }}>
              Dedicated alumni liaisons coordinating communications and gathering batch feedback.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: "1.15rem" }}>
            {batchRepresentatives.map((rep) => (
              <div
                key={rep.batch}
                className="card interactive-card-sm"
                style={{
                  padding: "1.15rem 1.25rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.15rem",
                  borderRadius: "0.875rem",
                  border: "1.5px solid var(--border)",
                }}
              >
                {/* Left Side: Avatar */}
                <Avatar name={rep.name} size={50} />

                {/* Right Side: Information */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontWeight: 800,
                      color: "var(--primary)",
                      fontSize: "0.8rem",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {rep.batch}
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: "0.925rem", color: "var(--text)", margin: "0 0 0.2rem" }}>
                    {rep.name}
                  </h3>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "0.3rem" }}>
                    <Award size={12} /> Batch Representative
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
