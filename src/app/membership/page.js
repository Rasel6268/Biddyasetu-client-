"use client";

import { useState } from "react";
import Link from "next/link";
import { batches, membershipTypes } from "@/lib/data/demo";
import {
  User,
  Mail,
  Phone,
  Calendar,
  Droplets,
  GraduationCap,
  Briefcase,
  MapPin,
  Globe,
  Camera,
  Lock,
  CheckCircle,
  ArrowRight,
  AlertCircle,
  Sparkles,
  ShieldCheck,
  Award,
} from "lucide-react";

const bloodGroups = ["A+", "A−", "B+", "B−", "AB+", "AB−", "O+", "O−"];
const genders = ["Male", "Female", "Other", "Prefer not to say"];
const countries = [
  "Bangladesh",
  "India",
  "USA",
  "UK",
  "Canada",
  "Australia",
  "UAE",
  "Saudi Arabia",
  "Qatar",
  "Germany",
  "Other",
];

function FormGroup({ label, required, children, hint }) {
  return (
    <div className="flex flex-col">
      <label className="block text-sm font-bold text-[var(--text)] mb-1.5">
        {label} {required && <span className="text-[var(--danger)]">*</span>}
      </label>
      {children}
      {hint && <p className="text-xs text-[var(--text-muted)] mt-1.5">{hint}</p>}
    </div>
  );
}

export default function MembershipPage() {
  const [step, setStep] = useState(1);
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedTier, setSelectedTier] = useState("Life Member");

  const totalSteps = 3;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreed) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center p-8">
        <div
          className="card text-center max-w-[520px] p-14 rounded-2xl border-[1.5px] border-[var(--border)] bg-white"
        >
          <div className="w-20 h-20 rounded-full bg-[rgba(22,163,74,0.1)] border-3 border-[var(--success)] flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={44} color="var(--success)" />
          </div>
          <h1 className="text-[1.85rem] font-black mb-3 text-[var(--text)]">
            Application Submitted!
          </h1>
          <p className="text-[var(--text-muted)] leading-relaxed mb-8 text-sm">
            Thank you for applying to join the Biddyasetu Alumni Organization. Your credentials have been submitted for verification. We will send a confirmation email once approved.
          </p>
          <Link href="/" className="btn-primary inline-flex items-center gap-2 px-8 py-3.5">
            Return to Homepage <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0284c7] via-[#06A3EC] to-[#38bdf8] py-18 px-6 text-center text-white">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.12) 0%, transparent 40%), radial-gradient(circle at 80% 20%, rgba(250,228,6,0.15) 0%, transparent 40%)",
          }}
        />
        <div className="max-w-[760px] mx-auto relative z-10">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/20 border border-white/30 text-[0.8125rem] font-semibold mb-4 backdrop-blur-sm">
            <Sparkles size={14} color="#fde047" /> Join 850+ Registered Alumni
          </span>
          <h1 className="text-[clamp(2.25rem,5vw,3.25rem)] font-black mb-3 tracking-tight">
            Alumni Registration
          </h1>
          <p className="text-[1.0625rem] opacity-92 leading-relaxed max-w-[600px] mx-auto">
            Register your profile to access the verified directory, vote in committee elections, and receive scholarship updates.
          </p>
        </div>
      </section>

      {/* Main Registration Layout */}
      <section className="section-padding bg-[var(--background)]">
        <div className="max-w-[1080px] mx-auto px-6">
          <div className="grid grid-cols-1 gap-10 items-start">
            {/* Privacy Guarantee Banner */}
            <div className="flex justify-center mb-2">
              <div className="flex items-center gap-3 flex-wrap justify-center px-6 py-4 bg-[rgba(6,163,236,0.05)] rounded-xl border border-[rgba(6,163,236,0.15)]">
                <div className="flex items-center gap-1.5 text-[var(--primary-dark)] font-bold text-sm">
                  <ShieldCheck size={16} /> Privacy Guarantee
                </div>
                <p className="text-xs text-[var(--text-muted)] m-0 leading-relaxed">
                  Contact numbers and private addresses are concealed from the public directory. Only your verified name, batch, and profession are visible to fellow alumni.
                </p>
              </div>
            </div>

            {/* Main Form Container */}
            <div
              className="card p-9 rounded-2xl border-[1.5px] border-[var(--border)] bg-white shadow-[0_10px_30px_-5px_rgba(0,0,0,0.04)] max-w-[800px] mx-auto w-full"
            >
              {/* Step Progress Header */}
              <div className="mb-8">
                <div className="flex justify-between mb-2.5">
                  {["Personal Info", "Education & Work", "Account Security"].map((label, i) => (
                    <div key={label} className="text-center flex-1">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-extrabold text-xs mx-auto mb-1.5 transition-all duration-300 ${step > i + 1
                          ? "bg-[var(--success)] text-white"
                          : step === i + 1
                            ? "bg-[var(--primary)] text-white"
                            : "bg-[var(--border)] text-[var(--text-muted)]"
                          }`}
                      >
                        {step > i + 1 ? <CheckCircle size={16} /> : i + 1}
                      </div>
                      <span
                        className={`text-[0.72rem] ${step === i + 1
                          ? "text-[var(--primary)] font-extrabold"
                          : "text-[var(--text-muted)] font-medium"
                          }`}
                      >
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="h-1 bg-[var(--border)] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[var(--primary)] transition-all duration-[0.4s] ease-[cubic-bezier(0.4,0,0.2,1)] rounded-full"
                    style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
                  />
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Step 1: Personal Info */}
                {step === 1 && (
                  <div className="flex flex-col gap-5">
                    <div>
                      <h3 className="font-extrabold text-[1.15rem] text-[var(--text)] m-0 mb-1">
                        Personal Information
                      </h3>
                      <p className="text-[0.8125rem] text-[var(--text-muted)] m-0">
                        Provide your official name and identification details.
                      </p>
                    </div>

                    <FormGroup label="Full Name" required>
                      <div className="relative">
                        <User size={16} color="var(--text-muted)" className="absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          placeholder="e.g. Md. Rafiqul Islam"
                          className="w-full px-4 py-3 pl-10 rounded-[0.625rem] border-[1.5px] border-[var(--border)] bg-white text-sm text-[var(--text)] outline-none transition-all duration-[0.15s] font-inherit focus:border-[var(--primary)] focus:shadow-[0_0_0_3px_rgba(6,163,236,0.1)]"
                          required
                        />
                      </div>
                    </FormGroup>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormGroup label="Email Address" required>
                        <div className="relative">
                          <Mail size={16} color="var(--text-muted)" className="absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="email"
                            placeholder="you@email.com"
                            className="w-full px-4 py-3 pl-10 rounded-[0.625rem] border-[1.5px] border-[var(--border)] bg-white text-sm text-[var(--text)] outline-none transition-all duration-[0.15s] font-inherit focus:border-[var(--primary)] focus:shadow-[0_0_0_3px_rgba(6,163,236,0.1)]"
                            required
                          />
                        </div>
                      </FormGroup>
                      <FormGroup label="Phone Number" required>
                        <div className="relative">
                          <Phone size={16} color="var(--text-muted)" className="absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="tel"
                            placeholder="+880 17..."
                            className="w-full px-4 py-3 pl-10 rounded-[0.625rem] border-[1.5px] border-[var(--border)] bg-white text-sm text-[var(--text)] outline-none transition-all duration-[0.15s] font-inherit focus:border-[var(--primary)] focus:shadow-[0_0_0_3px_rgba(6,163,236,0.1)]"
                            required
                          />
                        </div>
                      </FormGroup>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormGroup label="Gender" required>
                        <div className="relative">
                          <User size={16} color="var(--text-muted)" className="absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <select
                            className="w-full px-4 py-3 pl-10 rounded-[0.625rem] border-[1.5px] border-[var(--border)] bg-white text-sm text-[var(--text)] outline-none transition-all duration-[0.15s] font-inherit focus:border-[var(--primary)] focus:shadow-[0_0_0_3px_rgba(6,163,236,0.1)] appearance-none"
                            required
                          >
                            <option value="">Select gender...</option>
                            {genders.map((g) => (
                              <option key={g}>{g}</option>
                            ))}
                          </select>
                        </div>
                      </FormGroup>
                      <FormGroup label="Date of Birth" required>
                        <div className="relative">
                          <Calendar size={16} color="var(--text-muted)" className="absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="date"
                            className="w-full px-4 py-3 pl-10 rounded-[0.625rem] border-[1.5px] border-[var(--border)] bg-white text-sm text-[var(--text)] outline-none transition-all duration-[0.15s] font-inherit focus:border-[var(--primary)] focus:shadow-[0_0_0_3px_rgba(6,163,236,0.1)]"
                            required
                          />
                        </div>
                      </FormGroup>
                    </div>

                    <FormGroup label="Blood Group (Optional)" hint="Helpful for alumni emergency blood donor coordination">
                      <div className="relative">
                        <Droplets size={16} color="#dc2626" className="absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <select
                          className="w-full px-4 py-3 pl-10 rounded-[0.625rem] border-[1.5px] border-[var(--border)] bg-white text-sm text-[var(--text)] outline-none transition-all duration-[0.15s] font-inherit focus:border-[var(--primary)] focus:shadow-[0_0_0_3px_rgba(6,163,236,0.1)] appearance-none"
                        >
                          <option value="">Select blood group...</option>
                          {bloodGroups.map((b) => (
                            <option key={b}>{b}</option>
                          ))}
                        </select>
                      </div>
                    </FormGroup>

                    <FormGroup label="Profile Photo" hint="JPG or PNG, max 5MB">
                      <div className="upload-dropzone border-2 border-dashed border-[var(--border)] rounded-[0.625rem] p-8 text-center cursor-pointer hover:border-[var(--primary)] transition-colors">
                        <Camera size={26} color="var(--primary)" className="mx-auto mb-1.5" />
                        <p className="text-sm text-[var(--text)] font-semibold m-0 mb-0.5">
                          Click or drag photo here
                        </p>
                        <span className="text-xs text-[var(--text-muted)]">Supports PNG, JPG up to 5MB</span>
                      </div>
                    </FormGroup>

                    <button
                      type="button"
                      className="btn-primary inline-flex items-center justify-center gap-2 px-4 py-3.5 mt-2"
                      onClick={() => setStep(2)}
                    >
                      Continue to Education & Work <ArrowRight size={16} />
                    </button>
                  </div>
                )}

                {/* Step 2: Education & Work */}
                {step === 2 && (
                  <div className="flex flex-col gap-5">
                    <div>
                      <h3 className="font-extrabold text-[1.15rem] text-[var(--text)] m-0 mb-1">
                        Education & Professional Info
                      </h3>
                      <p className="text-[0.8125rem] text-[var(--text-muted)] m-0">
                        Your graduation batch and current workplace details.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormGroup label="SSC Year" required>
                        <div className="relative">
                          <Calendar size={16} color="var(--text-muted)" className="absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="number"
                            placeholder="e.g. 2006"
                            min="1970"
                            max="2026"
                            className="w-full px-4 py-3 pl-10 rounded-[0.625rem] border-[1.5px] border-[var(--border)] bg-white text-sm text-[var(--text)] outline-none transition-all duration-[0.15s] font-inherit focus:border-[var(--primary)] focus:shadow-[0_0_0_3px_rgba(6,163,236,0.1)]"
                            required
                          />
                        </div>
                      </FormGroup>
                      <FormGroup label="Batch" required>
                        <div className="relative">
                          <GraduationCap size={16} color="var(--text-muted)" className="absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <select
                            className="w-full px-4 py-3 pl-10 rounded-[0.625rem] border-[1.5px] border-[var(--border)] bg-white text-sm text-[var(--text)] outline-none transition-all duration-[0.15s] font-inherit focus:border-[var(--primary)] focus:shadow-[0_0_0_3px_rgba(6,163,236,0.1)] appearance-none"
                            required
                          >
                            <option value="">Select batch...</option>
                            {batches.map((b) => (
                              <option key={b}>{b}</option>
                            ))}
                          </select>
                        </div>
                      </FormGroup>
                    </div>

                    <FormGroup label="Current Profession" required>
                      <div className="relative">
                        <Briefcase size={16} color="var(--text-muted)" className="absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          placeholder="e.g. Software Engineer, Doctor, Educator..."
                          className="w-full px-4 py-3 pl-10 rounded-[0.625rem] border-[1.5px] border-[var(--border)] bg-white text-sm text-[var(--text)] outline-none transition-all duration-[0.15s] font-inherit focus:border-[var(--primary)] focus:shadow-[0_0_0_3px_rgba(6,163,236,0.1)]"
                          required
                        />
                      </div>
                    </FormGroup>

                    <FormGroup label="Organization / Institution">
                      <div className="relative">
                        <Briefcase size={16} color="var(--text-muted)" className="absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          placeholder="Your current employer or business"
                          className="w-full px-4 py-3 pl-10 rounded-[0.625rem] border-[1.5px] border-[var(--border)] bg-white text-sm text-[var(--text)] outline-none transition-all duration-[0.15s] font-inherit focus:border-[var(--primary)] focus:shadow-[0_0_0_3px_rgba(6,163,236,0.1)]"
                        />
                      </div>
                    </FormGroup>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormGroup label="Current City" required>
                        <div className="relative">
                          <MapPin size={16} color="var(--text-muted)" className="absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            placeholder="e.g. Dhaka"
                            className="w-full px-4 py-3 pl-10 rounded-[0.625rem] border-[1.5px] border-[var(--border)] bg-white text-sm text-[var(--text)] outline-none transition-all duration-[0.15s] font-inherit focus:border-[var(--primary)] focus:shadow-[0_0_0_3px_rgba(6,163,236,0.1)]"
                            required
                          />
                        </div>
                      </FormGroup>
                      <FormGroup label="Current Country" required>
                        <div className="relative">
                          <Globe size={16} color="var(--text-muted)" className="absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <select
                            className="w-full px-4 py-3 pl-10 rounded-[0.625rem] border-[1.5px] border-[var(--border)] bg-white text-sm text-[var(--text)] outline-none transition-all duration-[0.15s] font-inherit focus:border-[var(--primary)] focus:shadow-[0_0_0_3px_rgba(6,163,236,0.1)] appearance-none"
                            required
                          >
                            <option value="">Select country...</option>
                            {countries.map((c) => (
                              <option key={c}>{c}</option>
                            ))}
                          </select>
                        </div>
                      </FormGroup>
                    </div>

                    <FormGroup label="Permanent Address">
                      <div className="relative">
                        <MapPin size={16} color="var(--text-muted)" className="absolute left-3.5 top-4" />
                        <textarea
                          rows={2}
                          placeholder="Your permanent address in Bangladesh"
                          className="w-full px-4 py-3 pl-10 rounded-[0.625rem] border-[1.5px] border-[var(--border)] bg-white text-sm text-[var(--text)] outline-none transition-all duration-[0.15s] font-inherit resize-y focus:border-[var(--primary)] focus:shadow-[0_0_0_3px_rgba(6,163,236,0.1)]"
                        />
                      </div>
                    </FormGroup>

                    <FormGroup label="Membership Tier" required>
                      <div className="relative">
                        <Award size={16} color="var(--primary)" className="absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <select
                          value={selectedTier}
                          onChange={(e) => setSelectedTier(e.target.value)}
                          className="w-full px-4 py-3 pl-10 rounded-[0.625rem] border-[1.5px] border-[var(--border)] bg-white text-sm text-[var(--text)] outline-none transition-all duration-[0.15s] font-inherit focus:border-[var(--primary)] focus:shadow-[0_0_0_3px_rgba(6,163,236,0.1)] appearance-none"
                          required
                        >
                          {membershipTypes.map((t) => (
                            <option key={t.name} value={t.name}>
                              {t.name} — {t.fee}
                            </option>
                          ))}
                        </select>
                      </div>
                    </FormGroup>

                    <div className="flex gap-3 mt-2">
                      <button type="button" className="btn-outline px-5 py-3" onClick={() => setStep(1)}>
                        Back
                      </button>
                      <button
                        type="button"
                        className="btn-primary flex-1 inline-flex items-center justify-center gap-2 px-4 py-3.5"
                        onClick={() => setStep(3)}
                      >
                        Continue to Security <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Account Security */}
                {step === 3 && (
                  <div className="flex flex-col gap-5">
                    <div>
                      <h3 className="font-extrabold text-[1.15rem] text-[var(--text)] m-0 mb-1">
                        Create Your Password
                      </h3>
                      <p className="text-[0.8125rem] text-[var(--text-muted)] m-0">
                        Set a secure password for your alumni account portal.
                      </p>
                    </div>

                    <FormGroup label="Password" required hint="Must be at least 8 characters">
                      <div className="relative">
                        <Lock size={16} color="var(--text-muted)" className="absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="password"
                          placeholder="Create a strong password"
                          className="w-full px-4 py-3 pl-10 rounded-[0.625rem] border-[1.5px] border-[var(--border)] bg-white text-sm text-[var(--text)] outline-none transition-all duration-[0.15s] font-inherit focus:border-[var(--primary)] focus:shadow-[0_0_0_3px_rgba(6,163,236,0.1)]"
                          required
                        />
                      </div>
                    </FormGroup>

                    <FormGroup label="Confirm Password" required>
                      <div className="relative">
                        <Lock size={16} color="var(--text-muted)" className="absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="password"
                          placeholder="Repeat your password"
                          className="w-full px-4 py-3 pl-10 rounded-[0.625rem] border-[1.5px] border-[var(--border)] bg-white text-sm text-[var(--text)] outline-none transition-all duration-[0.15s] font-inherit focus:border-[var(--primary)] focus:shadow-[0_0_0_3px_rgba(6,163,236,0.1)]"
                          required
                        />
                      </div>
                    </FormGroup>

                    {/* Terms Checkbox */}
                    <label className="flex items-start gap-3 cursor-pointer bg-[var(--background)] p-4 rounded-xl border border-[var(--border)]">
                      <input
                        type="checkbox"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="mt-0.5 w-[18px] h-[18px] accent-[var(--primary)]"
                      />
                      <span className="text-[0.8125rem] text-[var(--text)] leading-relaxed">
                        I confirm that I am a former student of <strong>Adarsha High School, Kaitola</strong> and agree to the <strong>Terms & Conditions</strong> of Biddyasetu Alumni Organization.
                      </span>
                    </label>

                    {!agreed && (
                      <div className="flex items-center gap-1.5 text-[var(--text-muted)] text-[0.78rem]">
                        <AlertCircle size={14} color="var(--primary)" /> Please check the agreement box to enable submission.
                      </div>
                    )}

                    <div className="flex gap-3 mt-2">
                      <button type="button" className="btn-outline px-5 py-3" onClick={() => setStep(2)}>
                        Back
                      </button>
                      <button
                        type="submit"
                        className="btn-primary flex-1 inline-flex items-center justify-center gap-2 px-4 py-3.5"
                        style={{
                          opacity: agreed ? 1 : 0.5,
                          cursor: agreed ? "pointer" : "not-allowed",
                        }}
                        disabled={!agreed}
                      >
                        Submit Registration <CheckCircle size={16} />
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}