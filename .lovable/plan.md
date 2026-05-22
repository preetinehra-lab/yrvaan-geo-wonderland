
## YRVAAN GeoSystems Pvt Ltd — Website Plan

A focused 4-page marketing site positioning YRVAAN as a specialist geotechnical contractor (Soldier Pile, Diaphragm Wall, Shotcreting, Retention Systems), with a clear "Request a Quote" funnel and contact details visible everywhere.

### Pages (separate routes, each SEO-optimized)

1. **Home (`/`)**
   - Hero: bold statement on deep excavation & earth-retention expertise, primary CTA "Request a Quote", secondary "View Services"
   - Capabilities strip (4 service icons)
   - Why YRVAAN (engineering rigor, safety, on-time delivery)
   - Featured service highlights with imagery
   - Contact CTA band

2. **About (`/about`)**
   - Company intro & mission
   - What we specialize in (geotechnical & substructure works)
   - Values: Safety, Engineering Precision, Reliability
   - Leadership / experience blurb (placeholder — you can edit)

3. **Services (`/services`)**
   - Soldier Pile Walls — what it is, where used, our approach
   - Diaphragm (D) Wall Works
   - Shotcreting Works
   - Retention Systems
   - Each with a short technical description, use cases, and an inline "Request a Quote" CTA

4. **Contact (`/contact`)**
   - Quote request form: Name, Email, Phone, Project Location, Service Needed, Message
   - Email, Phone, Address shown prominently
   - Map placeholder + business hours

### Shared layout
- Sticky header with logo wordmark "YRVAAN GeoSystems" + nav (Home, About, Services, Contact) + "Request a Quote" button
- Footer with contact info, services list, copyright

### Design direction
Industrial-engineering aesthetic — confident, technical, trustworthy. Deep navy + concrete grey palette with a strong accent (safety amber/orange) for CTAs. Strong typography pairing (geometric display + clean sans body). Generous whitespace, structured grids, subtle motion on scroll. I'll generate hero/section imagery showing construction & geotechnical work.

### Content you still need to provide (I'll use clear placeholders you can swap)
- Final email, phone, office address, and any registration/CIN details
- Year founded, team size, notable past projects (if you want them shown)
- Logo file (otherwise I'll set a clean wordmark)

### Connecting yrvaangeo.com
After the site is built and you click **Publish**:
1. Open **Project Settings → Domains → Connect Domain**, enter `yrvaangeo.com`.
2. Lovable will show DNS records (A record `@` → `185.158.133.1`, A record `www` → `185.158.133.1`, plus a TXT verification record).
3. Since your domain is on **Google Workspace / Google Domains DNS**, add those records in the Google Admin / Squarespace Domains DNS panel (Google Domains migrated to Squarespace). Keep your existing **MX records** for Workspace email untouched.
4. Wait for DNS propagation (usually minutes, up to 72h). SSL is auto-provisioned.

I'll walk you through the exact DNS steps once we're ready to publish.

### Technical notes
- TanStack Start (already scaffolded), file-based routes under `src/routes/`
- Each route gets its own `head()` with title/description/OG tags for SEO
- Quote form: starts as a client-side form posting to a serverless function; we can wire it to send email via Lovable Cloud + Resend in a follow-up step (let me know if you want this in v1)
- Tailwind tokens defined in `src/styles.css` (oklch); shadcn components for form/buttons
- Responsive mobile-first; semantic HTML; JSON-LD `Organization` schema on home

### Out of scope for v1 (can add later)
- Blog/news, Projects portfolio, Industries pages
- Multi-language
- Backend-powered quote submissions with email delivery & DB storage
- Admin dashboard

Approve this and I'll build it.
