# Biddyasetu — বিদ্যাসেতু

> **Official Alumni Web Platform of Adarsha High School, Kaitola**

Biddyasetu is a non-profit voluntary alumni organization established on **17 February 2026**, connecting former students of Adarsha High School, Kaitola across Bangladesh and internationally. This repository contains the **client-side** Next.js web application.

---

## 🌐 Live Site

[https://biddyasetu.org](https://biddyasetu.org)

---

## ✨ Features

- **Home Page** — Hero banner, announcements, upcoming events, alumni highlights, scholarship section, success stories, latest activities, and donation CTA
- **Alumni Directory** — Verified member profiles browsable by batch and profession
- **Membership Registration** — 3-step registration form (Personal Info → Education & Work → Account Security) with membership tier selection
- **Events** — Listing of upcoming and past alumni events
- **About** — Organization history, mission, vision, and committee structure
- **Contact** — Get in touch with the Biddyasetu team
- **SEO Optimized** — Full Open Graph, Twitter Card, JSON-LD Schema markup, `robots.txt`, and `sitemap.xml`

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Language | JavaScript (React 19) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| Icons | [Lucide React](https://lucide.dev) · [React Icons](https://react-icons.github.io/react-icons) |
| Font | [Inter](https://fonts.google.com/specimen/Inter) via `next/font` |
| Deployment | [Vercel](https://vercel.com) |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── events/           # Events listing page
│   ├── members/          # Alumni directory page
│   ├── membership/       # Alumni registration form (3-step)
│   ├── structure/        # Committee / org structure page
│   ├── layout.js         # Root layout (Navbar, Footer, SEO metadata)
│   ├── page.js           # Home page
│   ├── globals.css       # Global styles & CSS variables
│   ├── robots.js         # /robots.txt generation
│   └── sitemap.js        # /sitemap.xml generation
├── components/
│   ├── home/             # Home page sections (Hero, Events, Alumni, etc.)
│   ├── layout/           # Navbar & Footer
│   ├── members/          # Member card components
│   └── ui/               # Shared UI primitives (ScrollAnimation, etc.)
└── lib/
    └── data/             # Static demo data (batches, membership types, etc.)
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Rasel6268/Biddyasetu-client-.git
cd Biddyasetu-client-

# Install dependencies
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

---

## 🎨 Design System

The project uses CSS custom properties for theming defined in `globals.css`:

| Variable | Purpose |
|---|---|
| `--primary` | Brand blue `#06A3EC` |
| `--primary-dark` | Darker blue for hover states |
| `--text` | Primary text color |
| `--text-muted` | Secondary / muted text |
| `--background` | Page background |
| `--border` | Border color |
| `--success` | Success green |
| `--danger` | Error / danger red |

---

## 🔍 SEO

- Full metadata via Next.js `metadata` API (title, description, keywords, Open Graph, Twitter Card)
- JSON-LD structured data for `Organization`, `WebSite`, and `BreadcrumbList`
- Auto-generated `/robots.txt` and `/sitemap.xml`
- Canonical URLs pointing to `https://biddyasetu.org`

---

## 📬 Contact

For queries, reach out at **info@biddyasetu.org** or visit the [Contact](https://biddyasetu.org/contact) page.

---

## 📄 License

This project is maintained by the **Biddyasetu Alumni Organization**. All rights reserved.
