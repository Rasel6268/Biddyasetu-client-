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
  LogIn,
  UserCircle,
  Bell,
  Search,
} from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",

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
      className={`sticky top-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-white/95 backdrop-blur-md border-b border-sky-100/80 shadow-lg shadow-sky-900/5"
        : "bg-gradient-to-r from-[#FDF9DF]/95 via-[#FDF9DF]/90 to-[#FDF9DF]/95 backdrop-blur-sm border-b border-sky-100/30"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-[76px] flex items-center justify-between">
          {/* Brand Logo - Enhanced Focus */}
          <Link href="/" className="flex items-center gap-4 no-underline group">
            <div className="relative flex-shrink-0">
              {/* Animated glow ring */}
              <div className="absolute -inset-1 rounded-xl  group-hover:from-sky-400/40 group-hover:to-sky-600/40 transition-all duration-700 opacity-0 group-hover:opacity-100" />

              {/* Logo container with premium border */}
              <div className="relative rounded-xl  p-1  group-hover:shadow-sky-500/30 transition-all duration-500">
                <div className="rounded-lg overflow-hidden p-1">
                  <Image
                    src="/logo.png"
                    alt="Biddyasetu Logo"
                    width={56}
                    height={56}
                    className="rounded-lg transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              {/* Main title with premium styling */}
              <div className="flex items-center gap-2">
                <span className="font-black text-2xl text-slate-900 leading-tight tracking-tight transition-colors duration-300 group-hover:text-sky-700">
                  বিদ্যাসেতু
                </span>
                {/* Premium badge */}
                <span className="hidden sm:inline-block text-[9px] font-extrabold bg-gradient-to-r from-sky-500 to-sky-600 text-white px-2.5 py-0.5 rounded-full uppercase tracking-widest shadow-sm shadow-sky-500/20">
                  Alumni
                </span>
              </div>

              {/* Subtitle with elegant styling */}
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] text-slate-500 font-semibold leading-none tracking-wide transition-colors duration-300 group-hover:text-slate-700">
                  Adarsha High School, Kaitola
                </span>
                {/* Decorative dot */}
                <span className="w-1 h-1 rounded-full bg-sky-400/40" />
                <span className="text-[10px] text-sky-500 font-medium leading-none">
                  Est. 2026
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    type="button"
                    className={`flex items-center gap-1 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all cursor-pointer ${openDropdown === link.label
                      ? "bg-sky-50 text-sky-600 shadow-sm"
                      : "text-slate-600 hover:text-sky-600 hover:bg-sky-50/60"
                      }`}
                  >
                    {link.label}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-all duration-200 ${openDropdown === link.label
                        ? "rotate-180 text-sky-600 scale-110"
                        : ""
                        }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  {openDropdown === link.label && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-md border border-sky-100 rounded-2xl p-2 shadow-2xl shadow-sky-900/15 animate-fadeIn">
                      <div className="absolute -top-1.5 left-6 w-3 h-3 bg-white border-t border-l border-sky-100 rotate-45" />
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:text-sky-600 hover:bg-sky-50 transition-all"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2.5 rounded-xl font-semibold text-sm text-slate-600 hover:text-sky-600 hover:bg-sky-50/60 transition-all relative group"
                >
                  {link.label}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-sky-500 rounded-full group-hover:w-4 transition-all duration-300" />
                </Link>
              )
            )}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-2">
            {/* Search Button */}
            <button
              type="button"
              className="p-2.5 rounded-xl text-slate-500 hover:text-sky-600 hover:bg-sky-50 transition-all"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Notification Bell */}
            <button
              type="button"
              className="p-2.5 rounded-xl text-slate-500 hover:text-sky-600 hover:bg-sky-50 transition-all relative"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white" />
            </button>

            {/* Login Button */}
            <Link
              href="/login"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border-2 border-slate-200 hover:border-sky-400 text-slate-700 hover:text-sky-600 font-semibold text-sm transition-all hover:shadow-md hover:shadow-sky-500/10"
            >
              <LogIn className="w-4 h-4" />
              Log In
            </Link>

            {/* Join Button */}
            <Link
              href="/membership"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-bold text-sm shadow-md shadow-sky-500/25 hover:shadow-lg hover:shadow-sky-500/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              <Users className="w-4 h-4" />
              Join Now
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/login"
              className="p-2.5 rounded-xl text-slate-600 hover:text-sky-600 hover:bg-sky-50 transition-all"
            >
              <UserCircle className="w-6 h-6" />
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2.5 rounded-xl border-2 border-slate-200 hover:border-sky-400 hover:bg-sky-50 text-slate-700 transition-all"
              aria-label="Toggle menu"
              type="button"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div >

      {/* Mobile Menu Dropdown Drawer */}
      {
        mobileOpen && (
          <div className="lg:hidden bg-white/98 backdrop-blur-md border-t border-sky-100 px-4 py-5 shadow-2xl animate-fadeIn">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-slate-700 hover:text-sky-600 hover:bg-sky-50 transition-all"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 mt-3 border-t border-slate-100 space-y-3">
                <Link
                  href="/login"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white border-2 border-slate-200 hover:border-sky-400 text-slate-700 font-semibold text-sm transition-all"
                  onClick={() => setMobileOpen(false)}
                >
                  <LogIn className="w-4 h-4" />
                  Log In
                </Link>
                <Link
                  href="/membership"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-bold text-sm shadow-md shadow-sky-500/25 transition-all"
                  onClick={() => setMobileOpen(false)}
                >
                  <Users className="w-4 h-4" />
                  Join Biddyasetu
                </Link>
              </div>
            </div>
          </div>
        )
      }
    </header >
  );
}