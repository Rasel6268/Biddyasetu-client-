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
      className="rounded-full flex items-center justify-center text-white font-extrabold shrink-0 border-2 border-white shadow-md"
      style={{
        width: size,
        height: size,
        background: `linear-gradient(135deg, ${color || "#06A3EC"}cc, ${color || "#06A3EC"})`,
        fontSize: size * 0.32,
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

  // Stats
  const totalVerified = alumniMembers.filter((m) => m.verified).length;
  const totalLife = alumniMembers.filter((m) => m.membership === "Life Member").length;
  const totalAbroad = alumniMembers.filter((m) => m.country !== "Bangladesh").length;
  const totalBloodDonors = alumniMembers.filter((m) => m.bloodGroup).length;

  return (
    <>
      {/* Hero Banner with Tailwind CSS */}
      <section className="relative bg-gradient-to-br from-sky-700 via-sky-500 to-sky-400 text-white py-16 sm:py-20 px-4 text-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/15 border border-white/30 text-xs sm:text-sm font-semibold mb-4 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-yellow-300" /> Official Alumni Network
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-3 tracking-tight">
            Alumni Directory
          </h1>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto mb-8 font-medium">
            Discover and connect with {alumniMembers.length}+ Adarsha High School graduates across Bangladesh and abroad.
          </p>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 max-w-3xl mx-auto">
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
                  className="bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl p-3.5 text-center shadow-sm"
                >
                  <div className="text-2xl sm:text-3xl font-black leading-none mb-1 text-white">
                    {st.val}
                  </div>
                  <div className="text-[11px] font-bold text-white/85 uppercase flex items-center justify-center gap-1">
                    <Icon className="w-3 h-3" /> {st.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Sticky Search & Filters Bar */}
      <section className="sticky top-[72px] z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 py-4 px-4 sm:px-6 shadow-sm">
        <div className="max-w-7xl mx-auto">
          {/* Top Search Controls */}
          <div className="flex flex-wrap items-center gap-3 mb-3">
            {/* Search Input */}
            <div className="flex-1 min-w-[260px] relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search by name, profession, batch, or location..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-sm text-slate-800 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-xl px-3 py-2">
              <ArrowUpDown className="w-4 h-4 text-slate-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-xs font-bold text-slate-700 bg-transparent outline-none cursor-pointer"
              >
                <option value="batch-desc">Batch: Newest First</option>
                <option value="batch-asc">Batch: Oldest First</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200">
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  viewMode === "grid" ? "bg-white text-sky-600 shadow-sm" : "text-slate-500 hover:text-slate-800"
                }`}
                title="Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode("list")}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  viewMode === "list" ? "bg-white text-sky-600 shadow-sm" : "text-slate-500 hover:text-slate-800"
                }`}
                title="List View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>

            {/* More Filters Toggle */}
            <button
              type="button"
              onClick={() => setShowFilters(!showFilters)}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                showFilters
                  ? "bg-sky-50 border-sky-500 text-sky-700"
                  : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
              }`}
            >
              <Filter className="w-4 h-4" />
              Filters
            </button>

            {hasFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="inline-flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-bold bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 transition-colors cursor-pointer"
              >
                <X className="w-3.5 h-3.5" /> Clear
              </button>
            )}
          </div>

          {/* Quick Filter Pills */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            {quickPills.map((pill) => {
              const isActive = activePill === pill.id;
              return (
                <button
                  key={pill.id}
                  type="button"
                  onClick={() => setActivePill(pill.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? "bg-sky-500 text-white shadow-sm"
                      : "bg-slate-100 hover:bg-slate-200/80 text-slate-700"
                  }`}
                >
                  {pill.label}
                </button>
              );
            })}
          </div>

          {/* Expanded Secondary Filter Dropdowns */}
          {showFilters && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3 p-4 bg-slate-50 border border-slate-200 rounded-2xl animate-fadeIn">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Batch
                </label>
                <select
                  value={filterBatch}
                  onChange={(e) => setFilterBatch(e.target.value)}
                  className="w-full p-2 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-700 outline-none focus:border-sky-500"
                >
                  <option value="">All Batches</option>
                  {batches.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Profession
                </label>
                <select
                  value={filterProfession}
                  onChange={(e) => setFilterProfession(e.target.value)}
                  className="w-full p-2 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-700 outline-none focus:border-sky-500"
                >
                  <option value="">All Professions</option>
                  {professions.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Country
                </label>
                <select
                  value={filterCountry}
                  onChange={(e) => setFilterCountry(e.target.value)}
                  className="w-full p-2 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-700 outline-none focus:border-sky-500"
                >
                  <option value="">All Countries</option>
                  {countries.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Membership
                </label>
                <select
                  value={filterMembership}
                  onChange={(e) => setFilterMembership(e.target.value)}
                  className="w-full p-2 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-700 outline-none focus:border-sky-500"
                >
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

      {/* Directory Results */}
      <section className="py-12 bg-[#FDF9DF] min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Status Count Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-6 text-sm text-slate-600 font-medium">
            <p>
              Showing <strong className="text-slate-900 font-extrabold">{filtered.length}</strong> of {alumniMembers.length} alumni members
            </p>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs text-slate-500">
              <BadgeCheck className="w-3.5 h-3.5 text-sky-500" /> Click on any profile to connect
            </span>
          </div>

          {/* Results Display */}
          {filtered.length === 0 ? (
            <div className="p-16 rounded-3xl bg-white border-2 border-dashed border-slate-200 text-center text-slate-500">
              <Search className="w-12 h-12 mx-auto mb-4 opacity-30 text-slate-400" />
              <h3 className="text-lg font-bold text-slate-800 mb-1">No alumni members found</h3>
              <p className="text-sm text-slate-500 mb-4">Try adjusting your filters or search keywords.</p>
              <button
                type="button"
                onClick={clearFilters}
                className="px-5 py-2.5 rounded-xl bg-sky-500 text-white font-bold text-sm shadow-md hover:bg-sky-600 transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          ) : viewMode === "grid" ? (
            /* Grid View */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((member, index) => (
                <ScrollAnimation key={member.id} animation="fade-in-up" delay={(index % 12) * 40}>
                  <article
                    onClick={() => setSelectedMember(member)}
                    className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-sky-400 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full cursor-pointer group"
                  >
                    <div>
                      <div className="flex items-start gap-4 mb-4">
                        <div className="relative shrink-0">
                          <Avatar initials={member.initials} color={member.avatarColor} size={60} />
                          {member.verified && (
                            <div
                              className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm"
                              title="Verified Member"
                            >
                              <BadgeCheck className="w-5 h-5 text-sky-500 fill-sky-500 stroke-white" />
                            </div>
                          )}
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="font-extrabold text-base sm:text-lg text-slate-900 truncate group-hover:text-sky-600 transition-colors">
                            {member.name}
                          </h3>

                          <div className="flex items-center gap-1.5 flex-wrap my-1.5">
                            <span className="px-2 py-0.5 rounded-md bg-sky-50 text-sky-700 font-bold text-xs">
                              {member.batch}
                            </span>
                            <span
                              className={`px-2 py-0.5 rounded-md text-xs font-semibold ${
                                member.membership === "Life Member"
                                  ? "bg-amber-50 text-amber-800 border border-amber-200"
                                  : "bg-slate-100 text-slate-600"
                              }`}
                            >
                              {member.membership}
                            </span>
                            {member.bloodGroup && (
                              <span
                                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-red-50 text-red-600 font-bold text-xs border border-red-100"
                                title={`Blood Group: ${member.bloodGroup}`}
                              >
                                <Droplets className="w-3 h-3 fill-red-500 text-red-500" />
                                {member.bloodGroup}
                              </span>
                            )}
                          </div>

                          <div className="flex flex-col gap-1 text-xs sm:text-sm text-slate-500 font-medium">
                            <span className="flex items-center gap-1.5 truncate">
                              <GraduationCap className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                              {member.profession}
                            </span>
                            <span className="flex items-center gap-1.5 truncate">
                              <MapPin className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                              {member.location}, {member.country}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-2">
                        {member.bio}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs font-semibold text-slate-500">
                      <div className="flex items-center gap-1.5">
                        {member.social?.linkedin && <FaLinkedin className="w-4 h-4 text-[#0a66c2]" />}
                        {member.social?.facebook && <FaFacebook className="w-4 h-4 text-[#1877f2]" />}
                      </div>
                      <span className="inline-flex items-center gap-1 text-sky-600 font-bold group-hover:translate-x-1 transition-transform">
                        View Profile <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </article>
                </ScrollAnimation>
              ))}
            </div>
          ) : (
            /* List View */
            <div className="flex flex-col gap-2.5">
              {filtered.map((member) => (
                <div
                  key={member.id}
                  onClick={() => setSelectedMember(member)}
                  className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-sky-400 hover:shadow-md transition-all flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3.5 min-w-[220px]">
                    <Avatar initials={member.initials} color={member.avatarColor} size={44} />
                    <div>
                      <div className="font-bold text-sm sm:text-base text-slate-900 flex items-center gap-1">
                        {member.name}
                        {member.verified && <BadgeCheck className="w-4 h-4 text-sky-500 fill-sky-500 stroke-white" />}
                      </div>
                      <div className="text-xs font-bold text-sky-600">{member.batch}</div>
                    </div>
                  </div>

                  <div className="hidden md:flex flex-1 items-center gap-6">
                    <div className="min-w-[160px]">
                      <div className="text-xs font-bold text-slate-800">{member.profession}</div>
                      <div className="text-[11px] text-slate-500 truncate">{member.education || "Alumnus"}</div>
                    </div>
                    <div className="min-w-[140px] text-xs text-slate-600 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-sky-500" /> {member.location}
                    </div>
                    <div>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-sky-50 text-sky-700">
                        {member.membership}
                      </span>
                    </div>
                    {member.bloodGroup && (
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-50 text-red-600">
                        {member.bloodGroup}
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    className="px-3.5 py-1.5 rounded-lg border border-sky-500 text-sky-600 hover:bg-sky-500 hover:text-white font-bold text-xs transition-colors shrink-0"
                  >
                    View
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
