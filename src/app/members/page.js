"use client";

import { useState, useMemo } from "react";
import { alumniMembers, batches } from "@/lib/data/demo";
import {
  Search,
  MapPin,
  GraduationCap,
  BadgeCheck,
  Filter,
  X,
  LayoutGrid,
  List,
  Droplets,
  ArrowUpDown,
  UserCheck,
  Globe,
  Award,
  ExternalLink,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import MemberModal from "@/components/members/MemberModal";

const professions = [...new Set(alumniMembers.map((m) => m.profession))];
const countries = [...new Set(alumniMembers.map((m) => m.country))];
const membershipTypes = ["Life Member", "General Member"];

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

export default function MembersPage() {
  const [search, setSearch] = useState("");
  const [filterBatch, setFilterBatch] = useState("");
  const [filterProfession, setFilterProfession] = useState("");
  const [filterCountry, setFilterCountry] = useState("");
  const [filterMembership, setFilterMembership] = useState("");
  const [activePill, setActivePill] = useState("all");
  const [sortBy, setSortBy] = useState("batch-desc");
  const [viewMode, setViewMode] = useState("grid"); // "grid" | "list"
  const [showFilters, setShowFilters] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  // Quick category pills
  const quickPills = [
    { id: "all", label: "All Members" },
    { id: "life", label: "Life Members" },
    { id: "verified", label: "Verified Only" },
    { id: "blood", label: "Blood Donors" },
    { id: "abroad", label: "Global / Abroad" },
    { id: "engineers", label: "Tech & Engineers" },
    { id: "doctors", label: "Medical & Health" },
  ];

  // Filtering & Sorting
  const filtered = useMemo(() => {
    let list = alumniMembers.filter((m) => {
      const q = search.toLowerCase();
      if (
        q &&
        !m.name.toLowerCase().includes(q) &&
        !m.profession.toLowerCase().includes(q) &&
        !m.location.toLowerCase().includes(q) &&
        !m.batch.toLowerCase().includes(q)
      )
        return false;

      if (filterBatch && m.batch !== filterBatch) return false;
      if (filterProfession && m.profession !== filterProfession) return false;
      if (filterCountry && m.country !== filterCountry) return false;
      if (filterMembership && m.membership !== filterMembership) return false;

      // Quick pill filtering
      if (activePill === "life" && m.membership !== "Life Member") return false;
      if (activePill === "verified" && !m.verified) return false;
      if (activePill === "blood" && !m.bloodGroup) return false;
      if (activePill === "abroad" && m.country === "Bangladesh") return false;
      if (activePill === "engineers" && !m.profession.toLowerCase().includes("engineer")) return false;
      if (activePill === "doctors" && !m.profession.toLowerCase().includes("doctor")) return false;

      return true;
    });

    // Sorting
    list.sort((a, b) => {
      if (sortBy === "name-asc") return a.name.localeCompare(b.name);
      if (sortBy === "name-desc") return b.name.localeCompare(a.name);
      if (sortBy === "batch-desc") {
        const yearA = parseInt(a.batch.replace(/\D/g, ""), 10) || 0;
        const yearB = parseInt(b.batch.replace(/\D/g, ""), 10) || 0;
        return yearB - yearA;
      }
      if (sortBy === "batch-asc") {
        const yearA = parseInt(a.batch.replace(/\D/g, ""), 10) || 0;
        const yearB = parseInt(b.batch.replace(/\D/g, ""), 10) || 0;
        return yearA - yearB;
      }
      return 0;
    });

    return list;
  }, [search, filterBatch, filterProfession, filterCountry, filterMembership, activePill, sortBy]);

  const hasFilters = filterBatch || filterProfession || filterCountry || filterMembership || activePill !== "all";

  const clearFilters = () => {
    setFilterBatch("");
    setFilterProfession("");
    setFilterCountry("");
    setFilterMembership("");
    setActivePill("all");
    setSearch("");
  };

  const selectStyle = {
    padding: "0.625rem 0.875rem",
    borderRadius: "0.5rem",
    border: "1.5px solid var(--border)",
    background: "#ffffff",
    color: "var(--text)",
    fontSize: "0.875rem",
    cursor: "pointer",
    outline: "none",
    width: "100%",
  };

  // Stats calculation
  const totalVerified = alumniMembers.filter((m) => m.verified).length;
  const totalLife = alumniMembers.filter((m) => m.membership === "Life Member").length;
  const totalAbroad = alumniMembers.filter((m) => m.country !== "Bangladesh").length;
  const totalBloodDonors = alumniMembers.filter((m) => m.bloodGroup).length;

  return (
    <>
      {/* Hero Banner with Modern Gradient */}
      <section
        style={{
          background: "linear-gradient(135deg, #0284c7 0%, #06A3EC 50%, #38bdf8 100%)",
          padding: "4.5rem 1.5rem 3.5rem",
          color: "white",
          textAlign: "center",
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
        <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.35rem 1rem",
              borderRadius: "9999px",
              background: "rgba(255, 255, 255, 0.15)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              fontSize: "0.8125rem",
              fontWeight: 600,
              marginBottom: "1rem",
              backdropFilter: "blur(6px)",
            }}
          >
            <Sparkles size={14} color="#fde047" /> Official Alumni Network
          </span>
          <h1 style={{ fontSize: "clamp(2.25rem, 5vw, 3.25rem)", fontWeight: 900, marginBottom: "0.75rem", letterSpacing: "-0.02em" }}>
            Alumni Directory
          </h1>
          <p style={{ fontSize: "1.0625rem", opacity: 0.92, lineHeight: 1.6, maxWidth: "600px", margin: "0 auto 2rem" }}>
            Discover and connect with {alumniMembers.length}+ Adarsha High School graduates across Bangladesh and 12+ countries.
          </p>

          {/* Quick Metrics Strip */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
              gap: "0.75rem",
              maxWidth: "680px",
              margin: "0 auto",
            }}
          >
            {[
              { label: "Total Members", val: alumniMembers.length, icon: GraduationCap },
              { label: "Verified Alumni", val: totalVerified, icon: UserCheck },
              { label: "Life Members", val: totalLife, icon: Award },
              { label: "Global Network", val: totalAbroad, icon: Globe },
              { label: "Blood Donors", val: totalBloodDonors, icon: Droplets },
            ].map((st) => {
              const Icon = st.icon;
              return (
                <div
                  key={st.label}
                  style={{
                    background: "rgba(255, 255, 255, 0.12)",
                    backdropFilter: "blur(8px)",
                    borderRadius: "0.75rem",
                    padding: "0.75rem 0.5rem",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <div style={{ fontSize: "1.25rem", fontWeight: 800, lineHeight: 1, marginBottom: "0.25rem" }}>
                    {st.val}
                  </div>
                  <div style={{ fontSize: "0.7rem", opacity: 0.85, fontWeight: 500, display: "flex", alignItems: "center", justifyContent: "center", gap: "0.25rem" }}>
                    <Icon size={11} /> {st.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Filter & Controls Bar */}
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
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          {/* Top Search & Action Bar */}
          <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", flexWrap: "wrap", marginBottom: "1rem" }}>
            {/* Search input */}
            <div style={{ flex: 1, minWidth: "240px", position: "relative" }}>
              <Search
                size={16}
                color="var(--text-muted)"
                style={{ position: "absolute", left: "0.875rem", top: "50%", transform: "translateY(-50%)" }}
              />
              <input
                type="text"
                placeholder="Search by name, profession, batch, or location..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.7rem 0.875rem 0.7rem 2.5rem",
                  borderRadius: "0.625rem",
                  border: "1.5px solid var(--border)",
                  background: "var(--background)",
                  fontSize: "0.875rem",
                  color: "var(--text)",
                  outline: "none",
                  transition: "border-color 0.15s, box-shadow 0.15s",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "var(--primary)";
                  e.target.style.boxShadow = "0 0 0 3px rgba(6,163,236,0.1)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "var(--border)";
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>

            {/* Sort Dropdown */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <ArrowUpDown size={15} color="var(--text-muted)" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  padding: "0.65rem 0.85rem",
                  borderRadius: "0.5rem",
                  border: "1.5px solid var(--border)",
                  background: "white",
                  fontSize: "0.8125rem",
                  color: "var(--text)",
                  fontWeight: 600,
                  cursor: "pointer",
                  outline: "none",
                }}
              >
                <option value="batch-desc">Batch: Newest First</option>
                <option value="batch-asc">Batch: Oldest First</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
              </select>
            </div>

            {/* View Mode Toggle */}
            <div
              style={{
                display: "flex",
                background: "var(--background)",
                borderRadius: "0.5rem",
                padding: "2px",
                border: "1px solid var(--border)",
              }}
            >
              <button
                onClick={() => setViewMode("grid")}
                title="Grid View"
                style={{
                  padding: "0.5rem 0.65rem",
                  borderRadius: "0.375rem",
                  border: "none",
                  background: viewMode === "grid" ? "white" : "transparent",
                  color: viewMode === "grid" ? "var(--primary)" : "var(--text-muted)",
                  boxShadow: viewMode === "grid" ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <LayoutGrid size={16} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                title="List View"
                style={{
                  padding: "0.5rem 0.65rem",
                  borderRadius: "0.375rem",
                  border: "none",
                  background: viewMode === "list" ? "white" : "transparent",
                  color: viewMode === "list" ? "var(--primary)" : "var(--text-muted)",
                  boxShadow: viewMode === "list" ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <List size={16} />
              </button>
            </div>

            {/* More Filters Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.65rem 1rem",
                borderRadius: "0.5rem",
                border: `1.5px solid ${showFilters ? "var(--primary)" : "var(--border)"}`,
                background: showFilters ? "rgba(6,163,236,0.08)" : "#ffffff",
                color: showFilters ? "var(--primary)" : "var(--text)",
                fontWeight: 600,
                fontSize: "0.8125rem",
                cursor: "pointer",
              }}
            >
              <Filter size={15} />
              More Filters
            </button>

            {hasFilters && (
              <button
                onClick={clearFilters}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.3rem",
                  padding: "0.65rem 0.85rem",
                  borderRadius: "0.5rem",
                  border: "1.5px solid var(--danger)",
                  background: "rgba(220,38,38,0.06)",
                  color: "var(--danger)",
                  fontWeight: 600,
                  fontSize: "0.8125rem",
                  cursor: "pointer",
                }}
              >
                <X size={14} /> Clear
              </button>
            )}
          </div>

          {/* Quick Category Filter Pills */}
          <div style={{ display: "flex", gap: "0.5rem", overflowX: "auto", paddingBottom: "0.25rem", scrollbarWidth: "none" }}>
            {quickPills.map((pill) => {
              const isActive = activePill === pill.id;
              return (
                <button
                  key={pill.id}
                  onClick={() => setActivePill(pill.id)}
                  style={{
                    padding: "0.35rem 0.85rem",
                    borderRadius: "9999px",
                    border: `1px solid ${isActive ? "var(--primary)" : "var(--border)"}`,
                    background: isActive ? "var(--primary)" : "#ffffff",
                    color: isActive ? "#ffffff" : "var(--text)",
                    fontSize: "0.8rem",
                    fontWeight: isActive ? 700 : 500,
                    whiteSpace: "nowrap",
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                  }}
                >
                  {pill.label}
                </button>
              );
            })}
          </div>

          {/* Expanded Secondary Filters Row */}
          {showFilters && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
                gap: "0.75rem",
                marginTop: "1rem",
                padding: "1rem",
                background: "var(--background)",
                borderRadius: "0.75rem",
                border: "1px solid var(--border)",
                animation: "fadeIn 0.2s ease",
              }}
            >
              <div>
                <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: "var(--text-muted)", marginBottom: "0.3rem" }}>
                  Batch
                </label>
                <select value={filterBatch} onChange={(e) => setFilterBatch(e.target.value)} style={selectStyle}>
                  <option value="">All Batches</option>
                  {batches.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: "var(--text-muted)", marginBottom: "0.3rem" }}>
                  Profession
                </label>
                <select value={filterProfession} onChange={(e) => setFilterProfession(e.target.value)} style={selectStyle}>
                  <option value="">All Professions</option>
                  {professions.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: "var(--text-muted)", marginBottom: "0.3rem" }}>
                  Country
                </label>
                <select value={filterCountry} onChange={(e) => setFilterCountry(e.target.value)} style={selectStyle}>
                  <option value="">All Countries</option>
                  {countries.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: "var(--text-muted)", marginBottom: "0.3rem" }}>
                  Membership
                </label>
                <select value={filterMembership} onChange={(e) => setFilterMembership(e.target.value)} style={selectStyle}>
                  <option value="">All Memberships</option>
                  {membershipTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Directory Results Section */}
      <section className="section-padding" style={{ background: "var(--background)", minHeight: "60vh" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
          {/* Status Count Strip */}
          <div style={{ marginBottom: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
            <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", margin: 0 }}>
              Showing <strong style={{ color: "var(--text)", fontWeight: 700 }}>{filtered.length}</strong> of {alumniMembers.length} members
            </p>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.35rem 0.85rem",
                borderRadius: "9999px",
                background: "#ffffff",
                border: "1px solid var(--border)",
                fontSize: "0.75rem",
                color: "var(--text-muted)",
              }}
            >
              <BadgeCheck size={14} color="var(--primary)" /> Click on any card to view full profile & connect
            </div>
          </div>

          {/* Empty State */}
          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "5rem 1.5rem", background: "white", borderRadius: "1rem", border: "1px dashed var(--border)", color: "var(--text-muted)" }}>
              <Search size={48} style={{ margin: "0 auto 1rem", opacity: 0.3 }} />
              <h3 style={{ fontWeight: 700, fontSize: "1.125rem", color: "var(--text)", marginBottom: "0.5rem" }}>No alumni members found</h3>
              <p style={{ fontSize: "0.875rem", maxWidth: "400px", margin: "0 auto 1.5rem" }}>
                We couldn't find any member matching your current search criteria.
              </p>
              <button onClick={clearFilters} className="btn-primary" style={{ padding: "0.5rem 1.25rem", fontSize: "0.85rem" }}>
                Reset All Filters
              </button>
            </div>
          ) : viewMode === "grid" ? (
            /* ─── Modern Interactive Grid View ─── */
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: "1.25rem" }}>
              {filtered.map((member, index) => (
                <ScrollAnimation key={member.id} animation="fade-in-up" delay={(index % 12) * 40}>
                  <article
                    onClick={() => setSelectedMember(member)}
                    className="card"
                    style={{
                      padding: "1.5rem",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: "100%",
                      cursor: "pointer",
                      transition: "all 0.25s ease",
                      border: "1.5px solid var(--border)",
                      position: "relative",
                      overflow: "hidden",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.borderColor = "var(--primary)";
                      e.currentTarget.style.boxShadow = "0 12px 24px -4px rgba(6,163,236,0.12)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.borderColor = "var(--border)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    {/* Top Row: Avatar & Metadata */}
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "1.15rem", marginBottom: "1rem" }}>
                      {/* Left: Avatar with badge */}
                      <div style={{ flexShrink: 0, position: "relative" }}>
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
                            title="Verified Member"
                          >
                            <BadgeCheck size={18} color="#06A3EC" fill="#06A3EC" stroke="#ffffff" />
                          </div>
                        )}
                      </div>

                      {/* Right info */}
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem", marginBottom: "0.2rem" }}>
                          <h3
                            style={{
                              fontWeight: 700,
                              fontSize: "1.0625rem",
                              color: "var(--text)",
                              margin: 0,
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {member.name}
                          </h3>
                        </div>

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
                              title={`Blood Group: ${member.bloodGroup}`}
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

                    {/* Bio excerpt */}
                    <p
                      style={{
                        fontSize: "0.8125rem",
                        color: "var(--text-muted)",
                        lineHeight: 1.6,
                        margin: "0 0 1.25rem",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {member.bio}
                    </p>

                    {/* Card Footer: Action & Social */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingTop: "0.85rem",
                        borderTop: "1px solid var(--border)",
                      }}
                    >
                      <div style={{ display: "flex", gap: "0.4rem" }}>
                        {member.social?.linkedin && (
                          <span style={{ color: "#0a66c2", display: "flex" }}>
                            <FaLinkedin size={15} />
                          </span>
                        )}
                        {member.social?.facebook && (
                          <span style={{ color: "#1877f2", display: "flex" }}>
                            <FaFacebook size={15} />
                          </span>
                        )}
                      </div>

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
          ) : (
            /* ─── Compact Table / List Row View ─── */
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {filtered.map((member) => (
                <div
                  key={member.id}
                  onClick={() => setSelectedMember(member)}
                  className="card"
                  style={{
                    padding: "1rem 1.25rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "1rem",
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--primary)";
                    e.currentTarget.style.background = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", minWidth: "220px" }}>
                    <Avatar initials={member.initials} color={member.avatarColor} size={44} />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--text)", display: "flex", alignItems: "center", gap: "0.35rem" }}>
                        {member.name}
                        {member.verified && <BadgeCheck size={15} color="#06A3EC" fill="#06A3EC" stroke="#ffffff" />}
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "var(--primary)", fontWeight: 600 }}>{member.batch}</div>
                    </div>
                  </div>

                  <div style={{ flex: 1, display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
                    <div style={{ minWidth: "150px" }}>
                      <div style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--text)" }}>{member.profession}</div>
                      <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{member.education || "Alumnus"}</div>
                    </div>

                    <div style={{ minWidth: "140px", display: "flex", alignItems: "center", gap: "0.35rem", fontSize: "0.8125rem", color: "var(--text-muted)" }}>
                      <MapPin size={13} color="var(--primary)" /> {member.location}
                    </div>

                    <div>
                      <span
                        style={{
                          padding: "0.2rem 0.6rem",
                          borderRadius: "9999px",
                          background: member.membership === "Life Member" ? "rgba(250,228,6,0.15)" : "rgba(6,163,236,0.08)",
                          color: member.membership === "Life Member" ? "#854d0e" : "var(--primary-dark)",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                        }}
                      >
                        {member.membership}
                      </span>
                    </div>

                    {member.bloodGroup && (
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.2rem",
                          padding: "0.2rem 0.5rem",
                          borderRadius: "9999px",
                          background: "rgba(220,38,38,0.08)",
                          color: "#dc2626",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                        }}
                      >
                        <Droplets size={11} fill="#dc2626" /> {member.bloodGroup}
                      </span>
                    )}
                  </div>

                  <button
                    style={{
                      padding: "0.4rem 0.85rem",
                      borderRadius: "0.5rem",
                      border: "1px solid var(--primary)",
                      background: "transparent",
                      color: "var(--primary)",
                      fontWeight: 600,
                      fontSize: "0.8rem",
                      cursor: "pointer",
                      flexShrink: 0,
                    }}
                  >
                    Profile
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Interactive Member Modal */}
      {selectedMember && <MemberModal member={selectedMember} onClose={() => setSelectedMember(null)} />}
    </>
  );
}
