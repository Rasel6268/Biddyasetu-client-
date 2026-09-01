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
      className="rounded-full flex items-center justify-center text-white font-extrabold shrink-0 border-2 border-white shadow-md"
      style={{
        width: size,
        height: size,
        background: `linear-gradient(135deg, ${colors[idx]}cc, ${colors[idx]})`,
        fontSize: size * 0.32,
      }}
    >
      {initials}
    </div>
  );
}

export default function StructurePage() {
  const leadership = committeeRoles.slice(0, 6);
  const secretaries = committeeRoles.slice(6);

  return (
    <>
      {/* Hero Banner */}
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
            <Crown className="w-4 h-4 text-yellow-300" /> Governing Body & Representatives
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-3 tracking-tight">
            Organization Structure
          </h1>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto font-medium">
            Meet the leadership team, secretariat, executive members, and batch liaisons driving Biddyasetu.
          </p>
        </div>
      </section>

      {/* 1. Executive Leadership */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-200 text-sky-700 font-bold text-xs mb-3">
              <Crown className="w-3.5 h-3.5" /> Key Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Executive Leadership
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl mx-auto">
              The core leadership team responsible for governance and strategic direction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadership.map((member) => (
              <div
                key={member.role}
                className="p-5 rounded-2xl bg-white border border-slate-200/80 border-l-4 border-l-sky-500 shadow-sm hover:shadow-xl hover:border-sky-400 hover:-translate-y-1 transition-all duration-300 flex items-center gap-4"
              >
                {/* Left Side: Avatar */}
                <Avatar name={member.name} size={64} />

                {/* Right Side: Information */}
                <div className="flex-1 min-w-0">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800 font-bold text-xs mb-1.5">
                    {member.role}
                  </span>
                  <h3 className="font-black text-base sm:text-lg text-slate-900 truncate">
                    {member.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-semibold flex items-center gap-1 mt-0.5">
                    <GraduationCap className="w-3.5 h-3.5 text-sky-500" /> Batch: {member.batch}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Committee Secretaries */}
      <section className="py-16 sm:py-20 bg-[#FDF9DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-200 text-sky-700 font-bold text-xs mb-3">
              <Shield className="w-3.5 h-3.5" /> Secretariat
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Secretaries & Department Leads
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl mx-auto">
              Departmental secretaries executing education, social welfare, culture, and communication programs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {secretaries.map((member) => (
              <div
                key={member.role}
                className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-lg hover:border-sky-400 hover:-translate-y-0.5 transition-all flex items-center gap-3.5"
              >
                <Avatar name={member.name} size={50} />
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold text-sky-600 truncate">{member.role}</div>
                  <h3 className="font-extrabold text-sm sm:text-base text-slate-900 truncate">
                    {member.name}
                  </h3>
                  <div className="text-xs text-slate-500 font-medium flex items-center gap-1 mt-0.5">
                    <GraduationCap className="w-3 h-3" /> Batch: {member.batch}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Executive Members */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-800 font-bold text-xs mb-3">
              <Users className="w-3.5 h-3.5" /> Executive Committee
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Executive Members
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl mx-auto">
              Active committee members participating in community decisions and welfare initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {executiveMembers.map((m) => (
              <div
                key={m.name}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-md hover:border-sky-300 transition-all flex items-center gap-3"
              >
                <Avatar name={m.name} size={46} />
                <div className="flex-1 min-w-0">
                  <span className="inline-block px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-bold text-[10px] mb-0.5">
                    Executive
                  </span>
                  <h3 className="font-extrabold text-sm text-slate-900 truncate">{m.name}</h3>
                  <div className="text-xs text-slate-500 font-medium flex items-center gap-1">
                    <GraduationCap className="w-3 h-3" /> Batch: {m.batch}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Batch Representatives */}
      <section className="py-16 sm:py-20 bg-[#FDF9DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-200 text-sky-700 font-bold text-xs mb-3">
              <Star className="w-3.5 h-3.5 fill-sky-500 text-sky-500" /> Batch Liaisons
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Batch Representatives
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl mx-auto">
              Dedicated alumni representatives coordinating communications and connecting batchmates.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {batchRepresentatives.map((rep) => (
              <div
                key={rep.batch}
                className="p-4 rounded-2xl bg-white border border-slate-200/80 hover:shadow-md hover:border-sky-300 transition-all flex items-center gap-3.5"
              >
                <Avatar name={rep.name} size={48} />
                <div className="flex-1 min-w-0">
                  <div className="font-black text-sky-600 text-xs">{rep.batch}</div>
                  <h3 className="font-extrabold text-sm text-slate-900 truncate">{rep.name}</h3>
                  <div className="text-xs text-slate-400 font-medium">Batch Representative</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
