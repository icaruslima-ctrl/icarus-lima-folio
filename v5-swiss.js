// V5 — Swiss Grid
// Pure International Typographic Style: white ground, strict 12-col,
// one red accent, Helvetica-first, Müller-Brockmann proportions.
const V5Swiss = () => {
  const D = window.ICARUS_DATA;
  const sans = '"Helvetica Neue", "Inter", Arial, sans-serif';
  const red  = '#D40000';
  const ink  = '#0A0A0A';
  const mid  = '#6B6B6B';
  const rule = `1px solid ${ink}`;

  const disciplines = ['Product Design', 'UX · UI', 'Design Systems', 'Strategy'];

  const G = ({ children, span = 1, style = {} }) => (
    React.createElement('div', { style: { gridColumn: `span ${span}`, ...style } }, children)
  );

  const Section = ({ children, pt = 48, pb = 48, border = true }) => (
    React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: 0,
        paddingTop: pt,
        paddingBottom: pb,
        paddingLeft: 56,
        paddingRight: 56,
        borderTop: border ? rule : 'none',
      }
    }, children)
  );

  return React.createElement('div', {
    style: {
      width: 1280,
      minHeight: 1800,
      background: '#FFFFFF',
      color: ink,
      fontFamily: sans,
      fontFeatureSettings: "'ss01'",
    }
  },

    // ── NAV BAR ────────────────────────────────────────────────
    React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: 0,
        padding: '18px 56px',
        borderBottom: rule,
        alignItems: 'center',
      }
    },
      React.createElement(G, { span: 1 },
        React.createElement('div', { style: { fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: mid } }, 'IL')
      ),
      React.createElement(G, { span: 5 },
        React.createElement('span', { style: { fontSize: 12, color: ink } }, 'Icarus Lima')
      ),
      React.createElement(G, { span: 3 },
        React.createElement('span', { style: { fontSize: 12, color: mid } }, 'Digital Product Designer')
      ),
      React.createElement(G, { span: 1, style: { textAlign: 'right' } },
        React.createElement('span', { style: { fontSize: 12, color: mid } }, '2026')
      )
    ),

    // ── HERO ─────────────────────────────────────────────────
    React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: 0,
        padding: '72px 56px 80px',
        borderBottom: rule,
      }
    },
      React.createElement(G, { span: 12 },
        React.createElement('div', { style: { height: 4, background: red, marginBottom: 40, width: 48 } })
      ),
      React.createElement(G, { span: 1 },
        React.createElement('div', { style: { fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: mid, paddingTop: 8 } }, '01')
      ),
      React.createElement(G, { span: 8 },
        React.createElement('h1', {
          style: {
            fontFamily: sans,
            fontSize: 96,
            fontWeight: 700,
            lineHeight: 0.92,
            letterSpacing: -3,
            margin: 0,
            color: ink,
            whiteSpace: 'pre-line',
          }
        }, D.headline)
      ),
      React.createElement(G, { span: 3, style: { paddingTop: 8, paddingLeft: 24 } },
        React.createElement('p', { style: { fontSize: 14, lineHeight: 1.6, margin: 0, color: mid, maxWidth: 200 } }, D.manifesto)
      )
    ),

    // ── DISCIPLINE TAGS ──────────────────────────────────────
    React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: 0,
        padding: '40px 56px',
        borderBottom: rule,
      }
    },
      React.createElement(G, { span: 1 },
        React.createElement('div', { style: { fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: mid } }, '02')
      ),
      React.createElement(G, { span: 11 },
        React.createElement('div', { style: { display: 'flex', gap: 0 } },
          disciplines.map((p, i) =>
            React.createElement('div', {
              key: i,
              style: {
                flex: 1,
                borderLeft: i === 0 ? 'none' : rule,
                paddingLeft: i === 0 ? 0 : 24,
                paddingRight: 24,
              }
            },
              React.createElement('div', { style: { fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: mid, marginBottom: 10 } },
                String(i + 1).padStart(2, '0')
              ),
              React.createElement('div', { style: { fontSize: 18, fontWeight: 500, letterSpacing: -0.3, lineHeight: 1.2, color: ink } }, p)
            )
          )
        )
      )
    ),

    // ── MANIFESTO DETAIL ─────────────────────────────────────
    React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: 0,
        padding: '40px 56px',
        borderBottom: rule,
      }
    },
      React.createElement(G, { span: 1 },
        React.createElement('div', { style: { fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: mid } }, '—')
      ),
      React.createElement(G, { span: 7 },
        React.createElement('p', { style: { fontSize: 20, lineHeight: 1.5, fontWeight: 400, letterSpacing: -0.2, margin: 0, color: ink } }, D.approachLong)
      )
    ),

    // ── SELECTED WORK HEADER ─────────────────────────────────
    React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: 0,
        padding: '40px 56px 0',
      }
    },
      React.createElement(G, { span: 1 },
        React.createElement('div', { style: { fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: mid } }, '03')
      ),
      React.createElement(G, { span: 11 },
        React.createElement('div', { style: { fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: mid } }, 'Selected Work')
      )
    ),

    // ── ROLES ────────────────────────────────────────────────
    ...D.roles.map((r, i) =>
      React.createElement('div', {
        key: r.no,
        style: {
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: 0,
          padding: '24px 56px',
          borderTop: rule,
          alignItems: 'start',
        }
      },
        React.createElement(G, { span: 1 },
          React.createElement('div', { style: { fontSize: 11, color: mid, letterSpacing: 0.5 } }, String(i + 1).padStart(2, '0')),
          React.createElement('div', { style: { fontSize: 11, color: mid, marginTop: 4 } }, r.years)
        ),
        React.createElement(G, { span: 4 },
          React.createElement('div', { style: { fontSize: 28, fontWeight: 600, letterSpacing: -0.8, lineHeight: 1.05, color: ink } }, r.company),
          React.createElement('div', { style: { fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', color: mid, marginTop: 6 } }, r.role)
        ),
        React.createElement(G, { span: 4, style: { paddingLeft: 24 } },
          React.createElement('p', { style: { fontSize: 13, lineHeight: 1.6, margin: 0, color: mid } }, r.summary)
        ),
        React.createElement(G, { span: 3, style: { paddingLeft: 24 } },
          React.createElement('ul', { style: { margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: '4px 8px' } },
            r.focus.slice(0, 4).map(f =>
              React.createElement('li', {
                key: f,
                style: {
                  fontSize: 10,
                  letterSpacing: 1.5,
                  textTransform: 'uppercase',
                  color: mid,
                  border: rule,
                  padding: '3px 7px',
                  whiteSpace: 'nowrap',
                }
              }, f)
            )
          )
        )
      )
    ),

    // ── TRUSTED BY ───────────────────────────────────────────
    React.createElement(Section, { pt: 40, pb: 40 },
      React.createElement(G, { span: 1 },
        React.createElement('div', { style: { fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: mid } }, '04')
      ),
      React.createElement(G, { span: 2 },
        React.createElement('div', { style: { fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: mid } }, 'Trusted by')
      ),
      React.createElement(G, { span: 9 },
        React.createElement('div', { style: { display: 'flex', flexWrap: 'wrap', gap: '10px 32px', alignItems: 'baseline' } },
          D.brands.map((b, i) =>
            React.createElement('div', { key: b, style: { display: 'flex', alignItems: 'baseline', gap: 6 } },
              React.createElement('span', { style: { fontSize: 10, color: mid, minWidth: 20 } }, String(i + 1).padStart(2, '0')),
              React.createElement('span', { style: { fontSize: 22, fontWeight: 500, letterSpacing: -0.5, color: ink } }, b)
            )
          )
        )
      )
    ),

    // ── CONTACT ──────────────────────────────────────────────
    React.createElement(Section, { pt: 56, pb: 72 },
      React.createElement(G, { span: 1 },
        React.createElement('div', { style: { fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: mid } }, '05')
      ),
      React.createElement(G, { span: 5 },
        React.createElement('p', {
          style: {
            fontFamily: sans,
            fontSize: 40,
            fontWeight: 500,
            lineHeight: 1.15,
            letterSpacing: -1,
            margin: 0,
            color: ink,
          }
        }, D.intent)
      ),
      React.createElement(G, { span: 3, style: { paddingLeft: 24 } }),
      React.createElement(G, { span: 3, style: { paddingLeft: 24 } },
        React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 12, paddingTop: 6 } },
          React.createElement('div', { style: { fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: mid } }, 'Get in touch'),
          React.createElement('a', {
            href: `mailto:${D.email}`,
            style: {
              fontSize: 18,
              fontWeight: 500,
              color: ink,
              textDecoration: 'none',
              borderBottom: `2px solid ${red}`,
              paddingBottom: 2,
              display: 'inline-block',
            }
          }, D.email),
          React.createElement('span', { style: { fontSize: 13, color: mid } }, D.phone)
        )
      )
    ),

    // ── FOOTER ───────────────────────────────────────────────
    React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: 0,
        padding: '16px 56px',
        borderTop: `2px solid ${ink}`,
        alignItems: 'center',
      }
    },
      React.createElement(G, { span: 4 },
        React.createElement('span', { style: { fontSize: 11, color: mid } }, '© Icarus Lima, 2026')
      ),
      React.createElement(G, { span: 4, style: { textAlign: 'center' } },
        React.createElement('span', { style: { fontSize: 11, color: mid } }, 'Set in Helvetica Neue')
      ),
      React.createElement(G, { span: 4, style: { textAlign: 'right' } },
        React.createElement('span', { style: { fontSize: 11, color: mid } }, 'End of folio · ■')
      )
    )
  );
};

window.V5Swiss = V5Swiss;
