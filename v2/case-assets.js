// Extended per-case copy — consumed by SwissCaseHero when any slug is promoted to hero.
// Keyed by the same slugs used in data.js (lowercased, hyphenated company names).
window.CASE_ASSETS = {
  "shippit": {
    sector: "Logistics · SaaS",
    team: "Senior UXD · cross-functional squads",
    duration: "Sep 2024 — Apr 2026",
    stack: "Figma · Claude · Cursor · UX research",
    problem: "Logistics workflows are complex and unforgiving — a poor handoff between design and engineering means inconsistent UI, regressions against the design system, and developers spending time on pixel-pushing instead of feature logic.",
    approach: "I work across the full design lifecycle with AI embedded throughout: Claude for research synthesis, Figma for design system governance, and Cursor to bridge design intent directly to front-end implementation — actively QA-ing output so the squad ships with confidence.",
    method: [
      "Accelerate research synthesis using Claude to surface patterns from user interviews and session data.",
      "Govern the design system in Figma, maintaining component fidelity across all product surfaces.",
      "Use Cursor to translate design intent to front-end code, reducing handoff ambiguity.",
      "QA front-end output against the design system so developers stay focused on feature logic.",
    ],
    metrics: [
      { k: "Role", v: "Senior UXD" },
      { k: "Discovery", v: "Faster" },
      { k: "Handoffs", v: "Tighter" },
      { k: "Since", v: "Sep 2024" },
    ],
    pullQuote: "The best design-to-dev handoff is one where the developer doesn't have to guess — and the designer doesn't have to chase.",
  },

  "hello-molly": {
    sector: "E-commerce · Fashion",
    team: "1 designer · tech + exec squads",
    duration: "Jun 2023 — Dec 2023",
    stack: "UX design · Prototyping · Research",
    problem: "Hello Molly's fast-growing e-commerce platform had outpaced its original UX. Navigation was fragmented, search returned poor results, and the user profile lacked the personalisation signals needed to drive repeat purchase.",
    approach: "I embedded with the tech and executive teams to audit the full shopping journey, then prioritised three high-leverage surfaces: the home experience, contextual search, and the wishlist/profile layer. Each sprint started with behavioural data and ended with tested prototypes.",
    method: [
      "Audited the end-to-end shopping funnel using session recordings and heat maps.",
      "Redesigned the homepage and category hierarchy for clearer brand storytelling.",
      "Built a contextual search overlay surfacing trending queries and top sellers.",
      "Introduced wishlist and richer profile features to enable personalised recommendations.",
    ],
    metrics: [
      { k: "Surfaces redesigned", v: "4" },
      { k: "Engagement", v: "↑" },
      { k: "Retention", v: "↑" },
      { k: "Tenure", v: "Jun–Dec 2023" },
    ],
    pullQuote: "Good e-commerce design is invisible — it gets people to the product they want before they know they want it.",
  },

  "oovvuu": {
    sector: "Media · AdTech",
    team: "Senior Lead UX/UI Designer · full product team",
    duration: "Jul 2021 — Jun 2023",
    stack: "Product strategy · UI design · Design systems",
    problem: "Publishers needed a way to monetise articles with video without degrading the reading experience. Sponsored placements had to feel editorial — not interruptive — while still performing for advertisers.",
    approach: "I built the UX vocabulary from scratch: a placement logic that respected editorial hierarchy, a publisher-facing CMS for curating video, and an ad unit that blended into longform content. Revenue model and UX model were designed together.",
    method: [
      "Mapped the publisher and reader journeys to find natural video integration points.",
      "Designed the video curation CMS for journalists with no technical background.",
      "Created ad placement rules that preserved scroll momentum and reading flow.",
    ],
    metrics: [
      { k: "Article engagement", v: "↑" },
      { k: "Revenue streams", v: "New" },
      { k: "Publisher NPS", v: "High" },
      { k: "Tenure", v: "Jul 2021 – Jun 2023" },
    ],
    pullQuote: "The best ad unit is one the reader doesn't resent. That's a design problem before it's an engineering one.",
  },

  "rockmelon": {
    sector: "Healthtech · EdTech",
    team: "Head of UX/UI Designer · multidisciplinary",
    duration: "May 2018 — Jul 2020",
    stack: "UX research · Service design · UI",
    problem: "Parents and therapists supporting children with autism and learning disabilities were coordinating care across disconnected tools — email threads, paper forms, WhatsApp groups. The platform needed to centralise this without adding cognitive load to already stretched families.",
    approach: "We started with deep qualitative research — interviews with carers, therapists, and educators. The resulting platform separated parent-facing from therapist-facing workflows while keeping shared visibility into progress and tasks.",
    method: [
      "Conducted 20+ interviews with carers, therapists, and teachers to map pain points.",
      "Designed role-separated app flows with a shared visibility layer for progress tracking.",
      "Built learning blocks that therapists could assign and parents could monitor asynchronously.",
    ],
    metrics: [
      { k: "Interviews run", v: "20+" },
      { k: "User roles", v: "3" },
      { k: "Comms improved", v: "↑" },
      { k: "Tenure", v: "May 2018 – Jul 2020" },
    ],
    pullQuote: "Designing for caregivers means designing for people who have no spare bandwidth. Every tap you remove is a gift.",
  },

  "the-iconic": {
    sector: "E-commerce · Fashion",
    team: "8 designers · cross-functional squads",
    duration: "Mar 2016 — Jun 2018",
    stack: "UX research · UI systems · A/B testing",
    problem: "A growing marketplace needed a coherent shopping experience across discovery, browse, and checkout — without slowing the velocity of cross-functional squads each owning their own surface.",
    approach: "I led a team of eight designers, each embedded in a different end-user touchpoint. We built a shared methodology — patterns, vocabulary, research cadence — and used behavioural data to prioritise where to invest. The aim: empower users while giving squads autonomy.",
    method: [
      { heading: "Key Responsibilities", items: ["Led design across cross-functional Agile squads at THE ICONIC."] },
      { heading: "Key Achievements", items: ["Curated and advocated UX methodology and patterns at THE ICONIC to speed up design-to-implementation."] },
    ],
    metrics: [
      { k: "Designers led", v: "8" },
      { k: "Squads supported", v: "5+" },
      { k: "Patterns shipped", v: "40+" },
      { k: "Tenure", v: "Mar 2016 – Jun 2018" },
    ],
    pullQuote: "Great teams don't need permission to do great work. They need a shared language, the right data, and the trust to act on it.",
  },

  "skyfii": {
    sector: "Analytics · Retail",
    team: "Lead UX-UI · dev + client teams",
    duration: "Jul 2015 — May 2016",
    stack: "Brand identity · UX · UI systems",
    problem: "Bricks-and-mortar retailers were flying blind on in-store behaviour. Skyfii needed a platform that could ingest Wi-Fi and sensor data and surface it as actionable intelligence — without requiring a data analyst to interpret it.",
    approach: "I defined the brand identity, the information architecture, and the data visualisation system simultaneously. The interface had to make complex foot-traffic analytics readable by store managers, not just analysts.",
    method: [
      "Established the Skyfii visual identity — mark, type, and colour system.",
      "Designed the analytics dashboard with layered disclosure — summary first, drill-down on demand.",
      "Worked directly with developers and retail clients through QA and launch.",
    ],
    metrics: [
      { k: "Platform", v: "0 → 1" },
      { k: "Brand", v: "Built" },
      { k: "Adoption", v: "↑" },
      { k: "Tenure", v: "Jul 2015 – May 2016" },
    ],
    pullQuote: "A dashboard no one understands is just noise with better colours. Clarity is the whole job.",
  },

  "news-corp": {
    sector: "Media · Publishing",
    team: "Senior UX-UI · editorial + dev",
    duration: "Nov 2014 — Jul 2015",
    stack: "UX · UI · Editorial design",
    problem: "News Corp's digital mastheads had inconsistent reading experiences across titles. Each property had evolved independently, producing fragmented navigation, inconsistent type scales, and clashing interaction patterns.",
    approach: "I worked across editorial and engineering to audit all digital properties and extract a shared design language — without flattening the individual character of each masthead. The system was additive, not prescriptive.",
    method: [
      "Audited UX patterns across all digital mastheads to identify divergence and duplication.",
      "Built a shared pattern library with masthead-specific theming capability.",
      "Facilitated cross-team alignment sessions between editorial, product, and engineering.",
    ],
    metrics: [
      { k: "Mastheads", v: "Multiple" },
      { k: "Engagement", v: "↑" },
      { k: "Consistency", v: "↑" },
      { k: "Tenure", v: "Nov 2014 – Jul 2015" },
    ],
    pullQuote: "A design system for editorial should serve the story first. Everything else is infrastructure.",
  },

  "tigerspike": {
    sector: "Digital Agency",
    team: "Lead UX-UI · 6-year tenure",
    duration: "Mar 2008 — Nov 2014",
    stack: "UX · QA · Creative management",
    problem: "A fast-scaling agency needed to maintain design quality and client trust across dozens of concurrent projects without a formalised design operations practice.",
    approach: "Reporting to the Creative Director, I built the QA layer into the design and development cycle — establishing review gates, managing creative workflows, and maintaining the standard of output from brief through delivery.",
    method: [
      "Instituted design QA checkpoints at each development milestone.",
      "Managed creative timelines, client presentations, and stakeholder reviews.",
      "Oversaw technical implementation to ensure design intent survived handoff.",
    ],
    metrics: [
      { k: "Tenure", v: "6 years" },
      { k: "Projects", v: "Dozens" },
      { k: "Clients", v: "Major" },
      { k: "Period", v: "Mar 2008 – Nov 2014" },
    ],
    pullQuote: "Quality isn't a phase at the end. It's a habit you build into every step of the process.",
  },
};
