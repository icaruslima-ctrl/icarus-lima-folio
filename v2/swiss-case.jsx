// Folder containing real images for each slug (auto-discovered, sorted numerically)
const SLUG_DIRS = {
  "shippit":    "img/shippit",
  "hello-molly": "img/hello-molly",
  "oovvuu":    "img/Ooovuu",
  "rockmelon":  "img/Rockmelon",
  "the-iconic": "img/the iconic",
  "skyfii":     "img/Skyfii",
  "news-corp":  "img/News corp",
  "tigerspike": "img/tigerspike",
};

// Case study pages — hero spread (any promoted slug) + condensed (all others)
const SwissCaseHero = ({ slug }) => {
  const D = window.ICARUS_DATA;
  const A = window.CASE_ASSETS || {};
  const { sans, mono, accent, ink, paper, rule, muted, hairline, Placeholder, DynamicGallery, Masthead, Footer } = window.SwissShared;
  const Cell = ({ children, span, style = {} }) => <div style={{ gridColumn: `span ${span}`, ...style }}>{children}</div>;

  const slugify = (c) => c.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const role = D.roles.find((r) => slugify(r.company) === slug) || D.roles[3];
  const nextRole = D.roles[(D.roles.indexOf(role) + 1) % D.roles.length];
  const nextSlugHero = slugify(nextRole.company);
  const m = A[slug] || {
    sector: "—", team: "—", duration: role.years, stack: "—",
    problem: role.summary, approach: role.summary,
    method: role.focus,
    metrics: [{ k: "Years", v: role.years }],
    pullQuote: null,
  };

  return (
    <div style={{ background: paper, color: ink, fontFamily: sans, minHeight: "100vh" }}>
      <Masthead active="case" page={`Case · ${role.no} · ${role.company}`} nextHref={`#/work/${nextSlugHero}`} nextLabel={nextRole.company} />

      {/* TITLE BLOCK */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 16, padding: "60px 56px 32px" }}>
        <Cell span={2}>
          <div style={{ fontSize: 12, letterSpacing: 1, textTransform: "uppercase", color: muted }}>Case · {role.no}</div>
          <div style={{ fontFamily: mono, fontSize: 11, color: muted, marginTop: 8 }}>{role.years}</div>
        </Cell>
        <Cell span={10}>
          <div style={{ fontSize: 13, color: muted, marginBottom: 14, fontFamily: mono, letterSpacing: 1, textTransform: "uppercase" }}>{role.role}</div>
          <h1 style={{ fontSize: "clamp(72px, 10vw, 132px)", lineHeight: 0.92, letterSpacing: -4, margin: 0, fontWeight: 500 }}>
            {role.company}<span style={{ color: accent }}>.</span>
          </h1>
          <p style={{ fontSize: 22, lineHeight: 1.4, margin: "24px 0 0", maxWidth: 920, color: "#222" }}>{role.summary}</p>
        </Cell>
      </div>

      {/* META STRIP */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 16, padding: "20px 56px", borderTop: `1px solid ${rule}`, borderBottom: `1px solid ${rule}`, fontSize: 13 }}>
        {[
          { k: "Sector",   v: m.sector },
          { k: "Team",     v: m.team },
          { k: "Duration", v: m.duration },
          { k: "Practice", v: m.stack },
        ].map((x) =>
          <Cell key={x.k} span={3}>
            <div style={{ fontSize: 11, letterSpacing: 1, textTransform: "uppercase", color: muted, fontFamily: mono }}>{x.k}</div>
            <div style={{ fontSize: 15, marginTop: 4 }}>{x.v}</div>
          </Cell>
        )}
      </div>

      {/* HERO IMAGE */}
      <div style={{ padding: "32px 56px", borderBottom: `1px solid ${rule}` }}>
        {SLUG_DIRS[slug] ? (
          <DynamicGallery dir={SLUG_DIRS[slug]} ratio="16 / 9" limit={1} />
        ) : (
          <Placeholder ratio="16 / 9" label={`hero · ${slug}`} note="Full-bleed hero shot — flagship screen or moodboard. 16:9 preferred." />
        )}
      </div>

      {/* PROBLEM / APPROACH */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 16, padding: "60px 56px", borderBottom: `1px solid ${rule}` }}>
        <Cell span={2}><div style={{ fontSize: 12, letterSpacing: 1, textTransform: "uppercase", color: muted }}>Problem</div></Cell>
        <Cell span={4}><p style={{ fontSize: 18, lineHeight: 1.55, margin: 0 }}>{m.problem}</p></Cell>
        <Cell span={2}><div style={{ fontSize: 12, letterSpacing: 1, textTransform: "uppercase", color: muted }}>Approach</div></Cell>
        <Cell span={4}><p style={{ fontSize: 18, lineHeight: 1.55, margin: 0 }}>{m.approach}</p></Cell>
      </div>

      {/* METHOD + METRICS */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 16, padding: "60px 56px", borderBottom: `1px solid ${rule}` }}>
        <Cell span={2}><div style={{ fontSize: 12, letterSpacing: 1, textTransform: "uppercase", color: muted }}>Method</div></Cell>
        <Cell span={6}>
          <ol style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {m.method.map((step, i) =>
              <li key={i} style={{ display: "grid", gridTemplateColumns: "60px 1fr", gap: 12, padding: "16px 0", borderTop: i === 0 ? "none" : `1px solid ${hairline}` }}>
                <span style={{ fontFamily: mono, fontSize: 12, color: accent }}>M.0{i + 1}</span>
                <span style={{ fontSize: 17, lineHeight: 1.5 }}>{step}</span>
              </li>
            )}
          </ol>
        </Cell>
        <Cell span={4}>
          <div style={{ fontSize: 12, letterSpacing: 1, textTransform: "uppercase", color: muted, marginBottom: 12 }}>By the numbers</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderTop: `1px solid ${rule}`, borderLeft: `1px solid ${rule}` }}>
            {m.metrics.map((x) =>
              <div key={x.k} style={{ padding: "16px 14px", borderRight: `1px solid ${rule}`, borderBottom: `1px solid ${rule}` }}>
                <div style={{ fontSize: 11, color: muted, fontFamily: mono, letterSpacing: 1, textTransform: "uppercase" }}>{x.k}</div>
                <div style={{ fontSize: 28, fontWeight: 500, letterSpacing: -.6, marginTop: 4 }}>{x.v}</div>
              </div>
            )}
          </div>
        </Cell>
      </div>

      {/* IMAGE GRID */}
      {SLUG_DIRS[slug] ? (
        <div style={{ padding: "32px 56px", borderBottom: `1px solid ${rule}` }}>
          <DynamicGallery dir={SLUG_DIRS[slug]} ratio="auto" offset={1} />
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 16, padding: "32px 56px", borderBottom: `1px solid ${rule}` }}>
          <Cell span={6}><Placeholder ratio="4 / 3" label={`${slug} · 01`} note="Browse / category page" /></Cell>
          <Cell span={6}><Placeholder ratio="4 / 3" label={`${slug} · 02`} note="Product detail" /></Cell>
          <Cell span={4}><Placeholder ratio="3 / 4" label={`${slug} · 03`} note="Mobile view" /></Cell>
          <Cell span={4}><Placeholder ratio="3 / 4" label={`${slug} · 04`} note="Secondary screen" /></Cell>
          <Cell span={4}><Placeholder ratio="3 / 4" label={`${slug} · artefact`} note="Process / system artefact" /></Cell>
        </div>
      )}

      {/* OUTCOMES */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 16, padding: "60px 56px", borderBottom: `1px solid ${rule}` }}>
        <Cell span={2}><div style={{ fontSize: 12, letterSpacing: 1, textTransform: "uppercase", color: muted }}>Outcomes</div></Cell>
        <Cell span={10}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {role.outcomes.map((o, i) =>
              <div key={o} style={{ borderTop: `1px solid ${rule}`, paddingTop: 16 }}>
                <div style={{ fontFamily: mono, fontSize: 11, color: accent, letterSpacing: 1, textTransform: "uppercase" }}>O.0{i + 1}</div>
                <div style={{ fontSize: 22, fontWeight: 500, letterSpacing: -.4, marginTop: 8, lineHeight: 1.25 }}>{o}</div>
              </div>
            )}
          </div>
        </Cell>
      </div>

      {/* PULL QUOTE */}
      {m.pullQuote && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 16, padding: "80px 56px", borderBottom: `1px solid ${rule}` }}>
          <Cell span={2}><div style={{ fontSize: 12, letterSpacing: 1, textTransform: "uppercase", color: muted }}>Reflection</div></Cell>
          <Cell span={10}>
            <p style={{ fontSize: "clamp(28px, 3.4vw, 44px)", lineHeight: 1.2, margin: 0, fontWeight: 500, letterSpacing: -1.2, textWrap: "balance" }}>
              "<span style={{ color: accent }}>{m.pullQuote}</span>"
            </p>
          </Cell>
        </div>
      )}

      {/* NAV */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 16, padding: "32px 56px" }}>
        <Cell span={6}>
          <a href="#/" style={{ color: ink, textDecoration: "none", display: "block" }}>
            <div style={{ fontFamily: mono, fontSize: 11, color: muted, letterSpacing: 1, textTransform: "uppercase", marginBottom: 6 }}>← Back</div>
            <div style={{ fontSize: 24, fontWeight: 500, letterSpacing: -.5 }}>Index</div>
          </a>
        </Cell>
        <Cell span={6} style={{ textAlign: "right" }}>
          {(() => {
            const i = D.roles.indexOf(role);
            const next = D.roles[(i + 1) % D.roles.length];
            const nextSlug = next.company.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
            return (
              <a href={`#/work/${nextSlug}`} style={{ color: ink, textDecoration: "none", display: "block" }}>
                <div style={{ fontFamily: mono, fontSize: 11, color: muted, letterSpacing: 1, textTransform: "uppercase", marginBottom: 6 }}>Next case →</div>
                <div style={{ fontSize: 24, fontWeight: 500, letterSpacing: -.5 }}>{next.company}</div>
              </a>
            );
          })()}
        </Cell>
      </div>

      <Footer no={role.no} of="08" />
    </div>
  );
};

// Real image card
function CaseImage({ src, ratio = "4 / 3", label, note }) {
  const { mono } = window.SwissShared;
  return (
    <div style={{ position: "relative", width: "100%", aspectRatio: ratio, background: "#fafaf7", border: "1px solid #111", overflow: "hidden" }}>
      <img src={src} alt={label} style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
      <div style={{ position: "absolute", left: 14, top: 14, fontFamily: mono, fontSize: 10, color: "#fafaf7", letterSpacing: 1, textTransform: "uppercase", background: "rgba(0,0,0,.6)", padding: "3px 6px" }}>
        [ {label} ]
      </div>
      {note && (
        <div style={{ position: "absolute", left: 14, bottom: 14, fontFamily: mono, fontSize: 11, color: "#fafaf7", lineHeight: 1.5, maxWidth: "70%", background: "rgba(0,0,0,.6)", padding: "6px 8px" }}>
          ↘ {note}
        </div>
      )}
    </div>
  );
}
window.CaseImage = CaseImage;

// Condensed case study
const SwissCaseShort = ({ slug }) => {
  const D = window.ICARUS_DATA;
  const { sans, mono, accent, ink, paper, rule, muted, hairline, Placeholder, DynamicGallery, Masthead, Footer } = window.SwissShared;
  const Cell = ({ children, span, style = {} }) => <div style={{ gridColumn: `span ${span}`, ...style }}>{children}</div>;
  const slugify = (c) => c.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const role = D.roles.find((r) => slugify(r.company) === slug) || D.roles[0];
  const i = D.roles.indexOf(role);
  const next = D.roles[(i + 1) % D.roles.length];

  return (
    <div style={{ background: paper, color: ink, fontFamily: sans, minHeight: "100vh" }}>
      <Masthead active="case" page={`Case · ${role.no} · ${role.company}`} nextHref={`#/work/${slugify(next.company)}`} nextLabel={next.company} />

      {/* TITLE */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 16, padding: "60px 56px 32px" }}>
        <Cell span={2}>
          <div style={{ fontSize: 12, letterSpacing: 1, textTransform: "uppercase", color: muted }}>Case · {role.no}</div>
          <div style={{ fontFamily: mono, fontSize: 11, color: muted, marginTop: 8 }}>{role.years}</div>
        </Cell>
        <Cell span={10}>
          <div style={{ fontSize: 13, color: muted, marginBottom: 14, fontFamily: mono, letterSpacing: 1, textTransform: "uppercase" }}>{role.role}</div>
          <h1 style={{ fontSize: "clamp(64px, 8.4vw, 108px)", lineHeight: 0.95, letterSpacing: -3.5, margin: 0, fontWeight: 500 }}>
            {role.company}<span style={{ color: accent }}>.</span>
          </h1>
        </Cell>
      </div>

      {/* HERO IMAGE */}
      <div style={{ padding: "20px 56px 32px", borderTop: `1px solid ${rule}`, borderBottom: `1px solid ${rule}` }}>
        {SLUG_DIRS[slug] ? (
          <DynamicGallery dir={SLUG_DIRS[slug]} ratio="21 / 9" limit={1} />
        ) : (
          <Placeholder ratio="21 / 9" label={`hero · ${slug}`} note="Single hero image — drop in a flagship screen or visual." />
        )}
      </div>

      {/* SUMMARY */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 16, padding: "60px 56px", borderBottom: `1px solid ${rule}` }}>
        <Cell span={2}><div style={{ fontSize: 12, letterSpacing: 1, textTransform: "uppercase", color: muted }}>Brief</div></Cell>
        <Cell span={6}><p style={{ fontSize: 22, lineHeight: 1.45, margin: 0, textWrap: "pretty" }}>{role.summary}</p></Cell>
        <Cell span={4}>
          <div style={{ fontSize: 12, letterSpacing: 1, textTransform: "uppercase", color: muted, marginBottom: 8 }}>At a glance</div>
          <div style={{ borderTop: `1px solid ${rule}` }}>
            {[["Years", role.years], ["Role", role.role], ["Engagement", role.company]].map((row) =>
              <div key={row[0]} style={{ display: "grid", gridTemplateColumns: "100px 1fr", padding: "10px 0", borderBottom: `1px solid ${hairline}`, fontSize: 14 }}>
                <span style={{ fontFamily: mono, fontSize: 11, color: muted, letterSpacing: 1, textTransform: "uppercase", paddingTop: 2 }}>{row[0]}</span>
                <span>{row[1]}</span>
              </div>
            )}
          </div>
        </Cell>
      </div>

      {/* FOCUS */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 16, padding: "60px 56px", borderBottom: `1px solid ${rule}` }}>
        <Cell span={2}><div style={{ fontSize: 12, letterSpacing: 1, textTransform: "uppercase", color: muted }}>Focus</div></Cell>
        <Cell span={10}>
          <ol style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {role.focus.map((f, j) =>
              <li key={j} style={{ display: "grid", gridTemplateColumns: "60px 1fr", gap: 12, padding: "14px 0", borderTop: j === 0 ? "none" : `1px solid ${hairline}` }}>
                <span style={{ fontFamily: mono, fontSize: 12, color: accent }}>F.0{j + 1}</span>
                <span style={{ fontSize: 17, lineHeight: 1.5 }}>{f}</span>
              </li>
            )}
          </ol>
        </Cell>
      </div>

      {/* IMAGES */}
      {SLUG_DIRS[slug] ? (
        <div style={{ padding: "32px 56px", borderBottom: `1px solid ${rule}` }}>
          <DynamicGallery dir={SLUG_DIRS[slug]} ratio="auto" offset={1} />
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 16, padding: "32px 56px", borderBottom: `1px solid ${rule}` }}>
          <Cell span={6}><Placeholder ratio="4 / 3" label={`${slug} · 01`} note="Process artefact, screen, or sketch" /></Cell>
          <Cell span={6}><Placeholder ratio="4 / 3" label={`${slug} · 02`} note="A second supporting visual" /></Cell>
        </div>
      )}

      {/* OUTCOMES */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 16, padding: "60px 56px", borderBottom: `1px solid ${rule}` }}>
        <Cell span={2}><div style={{ fontSize: 12, letterSpacing: 1, textTransform: "uppercase", color: muted }}>Outcomes</div></Cell>
        <Cell span={10}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {role.outcomes.map((o, j) =>
              <div key={o} style={{ borderTop: `1px solid ${rule}`, paddingTop: 16 }}>
                <div style={{ fontFamily: mono, fontSize: 11, color: accent, letterSpacing: 1, textTransform: "uppercase" }}>O.0{j + 1}</div>
                <div style={{ fontSize: 20, fontWeight: 500, letterSpacing: -.3, marginTop: 8, lineHeight: 1.3 }}>{o}</div>
              </div>
            )}
          </div>
        </Cell>
      </div>

      {/* NAV */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 16, padding: "32px 56px" }}>
        <Cell span={6}>
          <a href="#/" style={{ color: ink, textDecoration: "none", display: "block" }}>
            <div style={{ fontFamily: mono, fontSize: 11, color: muted, letterSpacing: 1, textTransform: "uppercase", marginBottom: 6 }}>← Back</div>
            <div style={{ fontSize: 24, fontWeight: 500, letterSpacing: -.5 }}>Index</div>
          </a>
        </Cell>
        <Cell span={6} style={{ textAlign: "right" }}>
          <a href={`#/work/${slugify(next.company)}`} style={{ color: ink, textDecoration: "none", display: "block" }}>
            <div style={{ fontFamily: mono, fontSize: 11, color: muted, letterSpacing: 1, textTransform: "uppercase", marginBottom: 6 }}>Next case →</div>
            <div style={{ fontSize: 24, fontWeight: 500, letterSpacing: -.5 }}>{next.company}</div>
          </a>
        </Cell>
      </div>

      <Footer no={role.no} of="08" />
    </div>
  );
};

window.SwissCaseHero = SwissCaseHero;
window.SwissCaseShort = SwissCaseShort;
