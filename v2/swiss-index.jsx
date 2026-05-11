// Index page — Swiss Grid folio
const SwissIndex = () => {
  const D = window.ICARUS_DATA;
  const { sans, mono, accent, ink, paper, rule, muted, hairline, Placeholder, Masthead, Footer } = window.SwissShared;

  const Cell = ({ children, span, style = {} }) =>
    <div style={{ gridColumn: `span ${span}`, ...style }}>{children}</div>;

  const slug = (c) => c.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  return (
    <div style={{ background: paper, color: ink, fontFamily: sans, minHeight: "100vh" }}>
      <Masthead active="index" />

      {/* HERO */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 16, padding: "60px 56px 16px" }}>
        <Cell span={2}>
          <div style={{ fontSize: 12, letterSpacing: 1, textTransform: "uppercase", color: muted }}>01 / Intro</div>
          <div style={{ fontFamily: mono, fontSize: 11, color: muted, marginTop: 8 }}>26.04.2026</div>
        </Cell>
        <Cell span={10}>
          <h1 style={{ margin: 0, fontWeight: 500, textWrap: "balance", letterSpacing: "-3.6px", lineHeight: "1.05", fontSize: "80px" }}>
            Designing digital products for humans and machines — driven by <span style={{ color: accent }}>creativity, data,</span> and <span style={{ color: accent }}>AI.</span>
          </h1>
        </Cell>
      </div>

      {/* MANIFESTO */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 16, padding: "32px 56px 56px", borderBottom: `1px solid ${rule}` }}>
        <Cell span={2}><div style={{ fontSize: 12, letterSpacing: 1, textTransform: "uppercase", color: muted }}>Manifesto</div></Cell>
        <Cell span={7}>
          <p style={{ fontSize: 18, lineHeight: 1.55, margin: 0 }}>I'm a seasoned Product Designer working at the intersection of strategy, design, and technology — where human-centred thinking meets AI-enabled execution.</p>
          <p style={{ fontSize: 15, lineHeight: 1.6, margin: "16px 0 0", color: "#444" }}>Great design transforms how people interact with technology, shapes brand perception, and drives measurable outcomes for both users and businesses. What defines my practice is how I get there — integrating AI-powered tools across the entire design lifecycle, from research synthesis and ideation through to design system governance and front-end quality assurance.</p>
          <p style={{ fontSize: 15, lineHeight: 1.6, margin: "16px 0 0", color: "#444" }}>My workflow spans Figma, Claude, and Cursor. Not to replace creative thinking, but to compress the low-value work so teams can focus on what actually moves the needle — faster discovery cycles, tighter design-to-dev handoffs, and a design function that actively QAs front-end output against the design system, freeing developers to focus on feature logic rather than implementation detail.</p>
          <p style={{ fontSize: 15, lineHeight: 1.6, margin: "16px 0 0", color: "#444" }}>I'm motivated by learning, mentoring, and building cross-functional capability — bridging design, ent, business, and users through data insights, AI-driven tools, and a consistent bias toward impact.</p>
          <p style={{ fontSize: 15, lineHeight: 1.6, margin: "16px 0 0", color: "#444" }}>Throughout my career I've helped deliver transformative digital experiences for some of Australia's most recognised brands — Foxtel, SBS, Vodafone, Woolworths, News Corp, Ticketek, Service NSW, GrainCorp and THE ICONIC — with one consistent goal: meaningful work that creates lasting value for users, businesses, and society.</p>
        </Cell>
        <Cell span={3} />
      </div>

      {/* PILLARS */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 16, padding: "32px 56px", borderBottom: `1px solid ${rule}` }}>
        <Cell span={2}><div style={{ fontSize: 12, letterSpacing: 1, textTransform: "uppercase", color: muted }}>02 / Pillars</div></Cell>
        {D.pillars.map((p, i) =>
          <Cell key={p} span={i === 3 ? 4 : 2}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
              <span style={{ fontSize: 12, color: accent, fontWeight: 500, fontFamily: mono }}>0{i + 1}</span>
              <span style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.3px" }}>{p}</span>
            </div>
            <div style={{ fontSize: 12, color: muted, marginTop: 4, lineHeight: 1.5 }}>
              {["Curiosity & narrative.", "Behavioural & quantitative.", "Tooling, automation, generative.", "Empathy at the centre."][i]}
            </div>
          </Cell>
        )}
      </div>

      {/* WORK HEADER */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 16, padding: "60px 56px 24px", borderBottom: `1px solid ${rule}`, alignItems: "baseline" }}>
        <Cell span={2}><div style={{ fontSize: 12, letterSpacing: 1, textTransform: "uppercase", color: muted }}>03 / Work</div></Cell>
        <Cell span={8}><h2 style={{ fontSize: "clamp(36px, 5vw, 64px)", margin: 0, fontWeight: 500, letterSpacing: -1.6 }}>Selected engagements, 2006 — 2023.</h2></Cell>
        <Cell span={2} style={{ textAlign: "right", fontFamily: mono, fontSize: 11, color: muted, letterSpacing: 1, textTransform: "uppercase" }}>8 chapters</Cell>
      </div>

      {/* WORK ROWS */}
      {D.roles.map((r) =>
        <a key={r.no} href={`#/work/${slug(r.company)}`}
          style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 16, padding: "26px 56px", borderBottom: `1px solid ${hairline}`, color: ink, textDecoration: "none" }}>
          <Cell span={1}><span style={{ fontSize: 13, color: muted, fontFamily: mono }}>{r.no}</span></Cell>
          <Cell span={1}><span style={{ fontSize: 13, color: muted, fontFamily: mono }}>{r.years}</span></Cell>
          <Cell span={3}>
            <div style={{ fontSize: 26, fontWeight: 500, letterSpacing: -.6 }}>{r.company}</div>
            <div style={{ fontSize: 13, color: muted, marginTop: 2 }}>{r.role}</div>
          </Cell>
          <Cell span={5}>
            <p style={{ fontSize: 15, lineHeight: 1.55, margin: 0 }}>{r.summary}</p>
            <ul style={{ margin: "10px 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 4 }}>
              {r.focus.slice(0, 2).map((f) =>
                <li key={f} style={{ fontSize: 13, color: "#444", position: "relative", paddingLeft: 14 }}>
                  <span style={{ position: "absolute", left: 0, top: 8, width: 8, height: 1, background: accent }} />{f}
                </li>
              )}
            </ul>
          </Cell>
          <Cell span={2} style={{ textAlign: "right" }}>
            <div style={{ fontSize: 12, letterSpacing: 1, textTransform: "uppercase", color: muted }}>Read</div>
            <div style={{ fontSize: 13, marginTop: 6, color: accent }}>Case · {r.no} →</div>
          </Cell>
        </a>
      )}

      {/* BRANDS */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 16, padding: "60px 56px", borderTop: `1px solid ${rule}`, borderBottom: `1px solid ${rule}` }}>
        <Cell span={2}><div style={{ fontSize: 12, letterSpacing: 1, textTransform: "uppercase", color: muted }}>04 / Trusted by</div></Cell>
        <Cell span={10}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", rowGap: 12, columnGap: 16 }}>
            {D.brands.map((b, i) =>
              <div key={b} style={{ fontSize: 28, fontWeight: 500, letterSpacing: -.7, display: "flex", alignItems: "baseline", gap: 12 }}>
                <span style={{ fontSize: 12, color: "#999", fontFamily: mono, minWidth: 24 }}>{String(i + 1).padStart(2, "0")}</span>{b}
              </div>
            )}
          </div>
        </Cell>
      </div>

      {/* CONTACT */}
      <div id="contact" style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 16, padding: "80px 56px 56px" }}>
        <Cell span={2}><div style={{ fontSize: 12, letterSpacing: 1, textTransform: "uppercase", color: muted }}>05 / Coda</div></Cell>
        <Cell span={6}>
          <p style={{ fontSize: 28, lineHeight: 1.3, margin: 0, fontWeight: 400, letterSpacing: -.4 }}>{D.intent}</p>
        </Cell>
        <Cell span={4}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ fontSize: 12, letterSpacing: 1, textTransform: "uppercase", color: muted }}>Get in touch</div>
            <a href={`mailto:${D.email}`} style={{ fontSize: 22, fontWeight: 500, color: ink, textDecoration: "underline", textUnderlineOffset: 4, textDecorationColor: accent }}>{D.email}</a>
            <span style={{ fontSize: 16, color: "#444" }}>{D.phone}</span>
            <a href="pdf/icarus_LIMA_CV2026.pdf" download style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 8, fontSize: 13, fontWeight: 500, color: accent, textDecoration: "none", letterSpacing: 0.5 }}>Download CV ↓</a>
          </div>
        </Cell>
      </div>

      <Footer />
    </div>
  );
};

window.SwissIndex = SwissIndex;
