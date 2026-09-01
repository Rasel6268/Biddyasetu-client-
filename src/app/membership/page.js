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

const inputStyle = {
  width: "100%",
  padding: "0.75rem 1rem",
  borderRadius: "0.625rem",
  border: "1.5px solid var(--border)",
  background: "#ffffff",
  fontSize: "0.9rem",
  color: "var(--text)",
  outline: "none",
  transition: "border-color 0.15s, box-shadow 0.15s",
  fontFamily: "inherit",
};

const labelStyle = {
  display: "block",
  fontSize: "0.85rem",
  fontWeight: 700,
  color: "var(--text)",
  marginBottom: "0.4rem",
};

function FormGroup({ label, required, children, hint }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label style={labelStyle}>
        {label} {required && <span style={{ color: "var(--danger)" }}>*</span>}
      </label>
      {children}
      {hint && <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.35rem", margin: "0.35rem 0 0" }}>{hint}</p>}
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

  const focusStyle = (e) => {
    e.target.style.borderColor = "var(--primary)";
    e.target.style.boxShadow = "0 0 0 3px rgba(6,163,236,0.1)";
  };
  const blurStyle = (e) => {
    e.target.style.borderColor = "var(--border)";
    e.target.style.boxShadow = "none";
  };

  if (submitted) {
    return (
      <div style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
        <div
          className="card"
          style={{
            textAlign: "center",
            maxWidth: "520px",
            padding: "3.5rem 2rem",
            borderRadius: "1.25rem",
            border: "1.5px solid var(--border)",
            background: "#ffffff",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              background: "rgba(22,163,74,0.1)",
              border: "3px solid var(--success)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1.5rem",
            }}
          >
            <CheckCircle size={44} color="var(--success)" />
          </div>
          <h1 style={{ fontSize: "1.85rem", fontWeight: 900, marginBottom: "0.75rem", color: "var(--text)" }}>
            Application Submitted!
          </h1>
          <p style={{ color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "2rem", fontSize: "0.95rem" }}>
            Thank you for applying to join the Biddyasetu Alumni Organization. Your credentials have been submitted for verification. We will send a confirmation email once approved.
          </p>
          <Link href="/" className="btn-primary" style={{ padding: "0.85rem 2rem" }}>
            Return to Homepage <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    );
  }

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
            <Sparkles size={14} color="#fde047" /> Join 850+ Registered Alumni
          </span>
          <h1 style={{ fontSize: "clamp(2.25rem, 5vw, 3.25rem)", fontWeight: 900, marginBottom: "0.75rem", letterSpacing: "-0.02em" }}>
            Alumni Registration
          </h1>
          <p style={{ fontSize: "1.0625rem", opacity: 0.92, lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
            Register your profile to access the verified directory, vote in committee elections, and receive scholarship updates.
          </p>
        </div>
      </section>

      {/* Main Registration Layout */}
      <section className="section-padding" style={{ background: "var(--background)" }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2.5rem", alignItems: "flex-start" }}>
            {/* Sidebar: Membership Options */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div>
                <h2 style={{ fontWeight: 800, fontSize: "1.25rem", color: "var(--text)", marginBottom: "0.25rem" }}>
                  Membership Tiers
                </h2>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                  Select your desired membership tier to pre-select it in the form.
                </p>
              </div>

              {membershipTypes.map((type) => {
                const isSelected = selectedTier === type.name;
                return (
                  <div
                    key={type.name}
                    onClick={() => setSelectedTier(type.name)}
                    className="card interactive-card-sm"
                    style={{
                      padding: "1.5rem",
                      border: isSelected ? "2px solid var(--primary)" : "1.5px solid var(--border)",
                      background: isSelected ? "rgba(6,163,236,0.03)" : "#ffffff",
                      borderRadius: "1rem",
                      cursor: "pointer",
                      position: "relative",
                    }}
                  >
                    {type.popular && (
                      <span
                        style={{
                          position: "absolute",
                          top: "-10px",
                          right: "16px",
                          background: "#fae406",
                          color: "#1e293b",
                          padding: "0.2rem 0.75rem",
                          borderRadius: "9999px",
                          fontSize: "0.7rem",
                          fontWeight: 800,
                        }}
                      >
                        RECOMMENDED
                      </span>
                    )}

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.35rem" }}>
                      <h3 style={{ fontWeight: 800, fontSize: "1.1rem", margin: 0, color: "var(--text)" }}>{type.name}</h3>
                      <span style={{ fontWeight: 800, color: "var(--primary)", fontSize: "0.95rem" }}>{type.fee}</span>
                    </div>

                    <ul style={{ listStyle: "none", padding: 0, margin: "0.75rem 0 0", display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                      {type.features.map((f) => (
                        <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.8125rem", color: "var(--text-muted)" }}>
                          <CheckCircle size={14} color="var(--success)" style={{ marginTop: "2px", flexShrink: 0 }} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}

              <div style={{ padding: "1.25rem", background: "rgba(6,163,236,0.05)", borderRadius: "0.75rem", border: "1px solid rgba(6,163,236,0.15)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "var(--primary-dark)", fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.25rem" }}>
                  <ShieldCheck size={16} /> Privacy Guarantee
                </div>
                <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", margin: 0, lineHeight: 1.6 }}>
                  Contact numbers and private addresses are concealed from the public directory. Only your verified name, batch, and profession are visible to fellow alumni.
                </p>
              </div>
            </div>

            {/* Main Form Container */}
            <div
              className="card"
              style={{
                padding: "2.25rem",
                borderRadius: "1.25rem",
                border: "1.5px solid var(--border)",
                background: "#ffffff",
                boxShadow: "0 10px 30px -5px rgba(0,0,0,0.04)",
              }}
            >
              {/* Step Progress Header */}
              <div style={{ marginBottom: "2rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.625rem" }}>
                  {["Personal Info", "Education & Work", "Account Security"].map((label, i) => (
                    <div key={label} style={{ textAlign: "center", flex: 1 }}>
                      <div
                        style={{
                          width: "32px",
                          height: "32px",
                          borderRadius: "50%",
                          background: step > i + 1 ? "var(--success)" : step === i + 1 ? "var(--primary)" : "var(--border)",
                          color: step >= i + 1 ? "white" : "var(--text-muted)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: 800,
                          fontSize: "0.8rem",
                          margin: "0 auto 0.35rem",
                          transition: "all 0.3s ease",
                        }}
                      >
                        {step > i + 1 ? <CheckCircle size={16} /> : i + 1}
                      </div>
                      <span
                        style={{
                          fontSize: "0.72rem",
                          color: step === i + 1 ? "var(--primary)" : "var(--text-muted)",
                          fontWeight: step === i + 1 ? 800 : 500,
                        }}
                      >
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
                <div style={{ height: "4px", background: "var(--border)", borderRadius: "2px", overflow: "hidden" }}>
                  <div
                    style={{
                      height: "100%",
                      width: `${((step - 1) / (totalSteps - 1)) * 100}%`,
                      background: "var(--primary)",
                      transition: "width 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      borderRadius: "2px",
                    }}
                  />
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Step 1: Personal Info */}
                {step === 1 && (
                  <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                    <div>
                      <h3 style={{ fontWeight: 800, fontSize: "1.15rem", color: "var(--text)", margin: "0 0 0.25rem" }}>
                        Personal Information
                      </h3>
                      <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)", margin: 0 }}>
                        Provide your official name and identification details.
                      </p>
                    </div>

                    <FormGroup label="Full Name" required>
                      <div style={{ position: "relative" }}>
                        <User size={16} color="var(--text-muted)" style={{ position: "absolute", left: "0.875rem", top: "50%", transform: "translateY(-50%)" }} />
                        <input type="text" placeholder="e.g. Md. Rafiqul Islam" style={{ ...inputStyle, paddingLeft: "2.5rem" }} onFocus={focusStyle} onBlur={blurStyle} required />
                      </div>
                    </FormGroup>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                      <FormGroup label="Email Address" required>
                        <div style={{ position: "relative" }}>
                          <Mail size={16} color="var(--text-muted)" style={{ position: "absolute", left: "0.875rem", top: "50%", transform: "translateY(-50%)" }} />
                          <input type="email" placeholder="you@email.com" style={{ ...inputStyle, paddingLeft: "2.5rem" }} onFocus={focusStyle} onBlur={blurStyle} required />
                        </div>
                      </FormGroup>
                      <FormGroup label="Phone Number" required>
                        <div style={{ position: "relative" }}>
                          <Phone size={16} color="var(--text-muted)" style={{ position: "absolute", left: "0.875rem", top: "50%", transform: "translateY(-50%)" }} />
                          <input type="tel" placeholder="+880 17..." style={{ ...inputStyle, paddingLeft: "2.5rem" }} onFocus={focusStyle} onBlur={blurStyle} required />
                        </div>
                      </FormGroup>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                      <FormGroup label="Gender" required>
                        <div style={{ position: "relative" }}>
                          <User size={16} color="var(--text-muted)" style={{ position: "absolute", left: "0.875rem", top: "50%", transform: "translateY(-50%)" }} />
                          <select style={{ ...inputStyle, paddingLeft: "2.5rem" }} onFocus={focusStyle} onBlur={blurStyle} required>
                            <option value="">Select gender...</option>
                            {genders.map((g) => (
                              <option key={g}>{g}</option>
                            ))}
                          </select>
                        </div>
                      </FormGroup>
                      <FormGroup label="Date of Birth" required>
                        <div style={{ position: "relative" }}>
                          <Calendar size={16} color="var(--text-muted)" style={{ position: "absolute", left: "0.875rem", top: "50%", transform: "translateY(-50%)" }} />
                          <input type="date" style={{ ...inputStyle, paddingLeft: "2.5rem" }} onFocus={focusStyle} onBlur={blurStyle} required />
                        </div>
                      </FormGroup>
                    </div>

                    <FormGroup label="Blood Group (Optional)" hint="Helpful for alumni emergency blood donor coordination">
                      <div style={{ position: "relative" }}>
                        <Droplets size={16} color="#dc2626" style={{ position: "absolute", left: "0.875rem", top: "50%", transform: "translateY(-50%)" }} />
                        <select style={{ ...inputStyle, paddingLeft: "2.5rem" }} onFocus={focusStyle} onBlur={blurStyle}>
                          <option value="">Select blood group...</option>
                          {bloodGroups.map((b) => (
                            <option key={b}>{b}</option>
                          ))}
                        </select>
                      </div>
                    </FormGroup>

                    <FormGroup label="Profile Photo" hint="JPG or PNG, max 5MB">
                      <div className="upload-dropzone">
                        <Camera size={26} color="var(--primary)" style={{ margin: "0 auto 0.4rem" }} />
                        <p style={{ fontSize: "0.85rem", color: "var(--text)", fontWeight: 600, margin: "0 0 0.15rem" }}>
                          Click or drag photo here
                        </p>
                        <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Supports PNG, JPG up to 5MB</span>
                      </div>
                    </FormGroup>

                    <button
                      type="button"
                      className="btn-primary"
                      style={{ marginTop: "0.5rem", justifyContent: "center", padding: "0.85rem" }}
                      onClick={() => setStep(2)}
                    >
                      Continue to Education & Work <ArrowRight size={16} />
                    </button>
                  </div>
                )}

                {/* Step 2: Education & Work */}
                {step === 2 && (
                  <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                    <div>
                      <h3 style={{ fontWeight: 800, fontSize: "1.15rem", color: "var(--text)", margin: "0 0 0.25rem" }}>
                        Education & Professional Info
                      </h3>
                      <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)", margin: 0 }}>
                        Your graduation batch and current workplace details.
                      </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                      <FormGroup label="SSC Year" required>
                        <div style={{ position: "relative" }}>
                          <Calendar size={16} color="var(--text-muted)" style={{ position: "absolute", left: "0.875rem", top: "50%", transform: "translateY(-50%)" }} />
                          <input type="number" placeholder="e.g. 2006" min="1970" max="2026" style={{ ...inputStyle, paddingLeft: "2.5rem" }} onFocus={focusStyle} onBlur={blurStyle} required />
                        </div>
                      </FormGroup>
                      <FormGroup label="Batch" required>
                        <div style={{ position: "relative" }}>
                          <GraduationCap size={16} color="var(--text-muted)" style={{ position: "absolute", left: "0.875rem", top: "50%", transform: "translateY(-50%)" }} />
                          <select style={{ ...inputStyle, paddingLeft: "2.5rem" }} onFocus={focusStyle} onBlur={blurStyle} required>
                            <option value="">Select batch...</option>
                            {batches.map((b) => (
                              <option key={b}>{b}</option>
                            ))}
                          </select>
                        </div>
                      </FormGroup>
                    </div>

                    <FormGroup label="Current Profession" required>
                      <div style={{ position: "relative" }}>
                        <Briefcase size={16} color="var(--text-muted)" style={{ position: "absolute", left: "0.875rem", top: "50%", transform: "translateY(-50%)" }} />
                        <input type="text" placeholder="e.g. Software Engineer, Doctor, Educator..." style={{ ...inputStyle, paddingLeft: "2.5rem" }} onFocus={focusStyle} onBlur={blurStyle} required />
                      </div>
                    </FormGroup>

                    <FormGroup label="Organization / Institution">
                      <div style={{ position: "relative" }}>
                        <Briefcase size={16} color="var(--text-muted)" style={{ position: "absolute", left: "0.875rem", top: "50%", transform: "translateY(-50%)" }} />
                        <input type="text" placeholder="Your current employer or business" style={{ ...inputStyle, paddingLeft: "2.5rem" }} onFocus={focusStyle} onBlur={blurStyle} />
                      </div>
                    </FormGroup>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                      <FormGroup label="Current City" required>
                        <div style={{ position: "relative" }}>
                          <MapPin size={16} color="var(--text-muted)" style={{ position: "absolute", left: "0.875rem", top: "50%", transform: "translateY(-50%)" }} />
                          <input type="text" placeholder="e.g. Dhaka" style={{ ...inputStyle, paddingLeft: "2.5rem" }} onFocus={focusStyle} onBlur={blurStyle} required />
                        </div>
                      </FormGroup>
                      <FormGroup label="Current Country" required>
                        <div style={{ position: "relative" }}>
                          <Globe size={16} color="var(--text-muted)" style={{ position: "absolute", left: "0.875rem", top: "50%", transform: "translateY(-50%)" }} />
                          <select style={{ ...inputStyle, paddingLeft: "2.5rem" }} onFocus={focusStyle} onBlur={blurStyle} required>
                            <option value="">Select country...</option>
                            {countries.map((c) => (
                              <option key={c}>{c}</option>
                            ))}
                          </select>
                        </div>
                      </FormGroup>
                    </div>

                    <FormGroup label="Permanent Address">
                      <div style={{ position: "relative" }}>
                        <MapPin size={16} color="var(--text-muted)" style={{ position: "absolute", left: "0.875rem", top: "1rem" }} />
                        <textarea rows={2} placeholder="Your permanent address in Bangladesh" style={{ ...inputStyle, resize: "vertical", paddingLeft: "2.5rem" }} onFocus={focusStyle} onBlur={blurStyle} />
                      </div>
                    </FormGroup>

                    <FormGroup label="Membership Tier" required>
                      <div style={{ position: "relative" }}>
                        <Award size={16} color="var(--primary)" style={{ position: "absolute", left: "0.875rem", top: "50%", transform: "translateY(-50%)" }} />
                        <select
                          value={selectedTier}
                          onChange={(e) => setSelectedTier(e.target.value)}
                          style={{ ...inputStyle, paddingLeft: "2.5rem" }}
                          onFocus={focusStyle}
                          onBlur={blurStyle}
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

                    <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.5rem" }}>
                      <button type="button" className="btn-outline" onClick={() => setStep(1)} style={{ padding: "0.75rem 1.25rem" }}>
                        Back
                      </button>
                      <button
                        type="button"
                        className="btn-primary"
                        style={{ flex: 1, justifyContent: "center", padding: "0.85rem" }}
                        onClick={() => setStep(3)}
                      >
                        Continue to Security <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Account Security */}
                {step === 3 && (
                  <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                    <div>
                      <h3 style={{ fontWeight: 800, fontSize: "1.15rem", color: "var(--text)", margin: "0 0 0.25rem" }}>
                        Create Your Password
                      </h3>
                      <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)", margin: 0 }}>
                        Set a secure password for your alumni account portal.
                      </p>
                    </div>

                    <FormGroup label="Password" required hint="Must be at least 8 characters">
                      <div style={{ position: "relative" }}>
                        <Lock size={16} color="var(--text-muted)" style={{ position: "absolute", left: "0.875rem", top: "50%", transform: "translateY(-50%)" }} />
                        <input type="password" placeholder="Create a strong password" style={{ ...inputStyle, paddingLeft: "2.5rem" }} onFocus={focusStyle} onBlur={blurStyle} required />
                      </div>
                    </FormGroup>

                    <FormGroup label="Confirm Password" required>
                      <div style={{ position: "relative" }}>
                        <Lock size={16} color="var(--text-muted)" style={{ position: "absolute", left: "0.875rem", top: "50%", transform: "translateY(-50%)" }} />
                        <input type="password" placeholder="Repeat your password" style={{ ...inputStyle, paddingLeft: "2.5rem" }} onFocus={focusStyle} onBlur={blurStyle} required />
                      </div>
                    </FormGroup>

                    {/* Terms Checkbox */}
                    <label style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", cursor: "pointer", background: "var(--background)", padding: "1rem", borderRadius: "0.75rem", border: "1px solid var(--border)" }}>
                      <input
                        type="checkbox"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        style={{ marginTop: "3px", width: "18px", height: "18px", accentColor: "var(--primary)" }}
                      />
                      <span style={{ fontSize: "0.8125rem", color: "var(--text)", lineHeight: 1.6 }}>
                        I confirm that I am a former student of <strong>Adarsha High School, Kaitola</strong> and agree to the <strong>Terms & Conditions</strong> of Biddyasetu Alumni Organization.
                      </span>
                    </label>

                    {!agreed && (
                      <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "var(--text-muted)", fontSize: "0.78rem" }}>
                        <AlertCircle size={14} color="var(--primary)" /> Please check the agreement box to enable submission.
                      </div>
                    )}

                    <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.5rem" }}>
                      <button type="button" className="btn-outline" onClick={() => setStep(2)} style={{ padding: "0.75rem 1.25rem" }}>
                        Back
                      </button>
                      <button
                        type="submit"
                        className="btn-primary"
                        style={{
                          flex: 1,
                          justifyContent: "center",
                          padding: "0.85rem",
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
