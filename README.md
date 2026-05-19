# VONK Gallery Demo

A Tate-inspired, bilingual, static-export-ready artist duo gallery website built with Next.js. 

This website showcases the curated works, studio essays, and exhibition collections of the contemporary artist duo **Esra Yiğit Şahin** and **Onur Şahin**.

---

## Project Overview

This is a private demo layout and portfolio design study. It features a sharp, bold, museum-style aesthetic inspired by the layout principles of the Tate Gallery, adapted specifically to present the works of the VONK artist duo. The codebase features a local, custom state-based English/Turkish (EN/TR) translation system.

## Tech Stack

- **Framework:** Next.js 16 (App Router, React 19, TypeScript strict)
- **Styling:** Tailwind CSS v4 with OKLCH design tokens
- **UI & Components:** Custom shadcn/ui components (Radix primitives, Lucide React icons)
- **Internationalization:** Custom state-based client-side EN/TR language switcher (no heavy third-party translation libraries)
- **Deployment & Output:** Pre-configured for static export (`output: "export"`)

---

## Website Routes

- `/` — Homepage with split-hero artwork showcase, selected collections, and editorial highlights.
- `/artworks` — Archive of all artworks with search and text/filter query support.
- `/artworks/[slug]` — Individual detail page for each artwork.
- `/artists` — Profiles of the artist duo.
- `/artists/[slug]` — Biography and artistic approach details for each artist.
- `/collections` — Listing of curated series and thematic collections.
- `/collections/[slug]` — Artworks belonging to a specific series.
- `/studio` — Studio journals and daily notes archive.
- `/studio/[slug]` — Individual essays and thought pieces from the studio.
- `/contact` — Artwork inquiry and studio contact details with an interactive feedback form.

---

## Local Development

Ensure you have Node.js (version 24 or newer) installed.

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## Build & Static Export

The project is configured for **Static Site Generation (SSG)** and static export, making it highly compatible with static hosting environments such as cPanel, Netlify, or standard Apache/Nginx servers.

### 1. Run the Build & Export Command
```bash
npm run build
```

This command runs TypeScript checks, compiles the application, and outputs a static folder:
- **Output directory:** `/out` (contains pre-rendered HTML, CSS, JS, and media assets)
- You can copy the contents of the `/out` directory directly into your cPanel `public_html` folder or any public root.

### 2. Deployment on Vercel
Because it is a Next.js project, it can be deployed on Vercel out-of-the-box:
1. Push this repository to GitHub.
2. Import the project on Vercel.
3. Vercel will automatically detect the Next.js framework, run `npm run build`, and deploy the site.

---

*Note: This website is a demo mockup. The contact form does not transmit emails to a server, and all artworks, artists, and collections described herein are fictional representations for layout evaluation.*
