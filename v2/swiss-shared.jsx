// Shared tokens, placeholder, chrome, and lightbox for the Swiss folio
window.SwissShared = (() => {
  const sans = '"Helvetica Neue", "Inter", "Söhne", Arial, sans-serif';
  const mono = '"JetBrains Mono", ui-monospace, monospace';
  const accent = "#e63b2e";
  const ink = "#111";
  const paper = "#fafaf7";
  const rule = "#111";
  const muted = "#666";
  const hairline = "#d6d4cf";

  // Striped image placeholder w/ mono caption
  function Placeholder({ ratio = "16 / 10", label = "image", note, dark = false }) {
    const fg = dark ? "#fafaf7" : "#111";
    const bg = dark ? "#111" : "#fafaf7";
    return (
      <div style={{ position: "relative", width: "100%", aspectRatio: ratio, background: bg, border: `1px solid #111`, overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `repeating-linear-gradient(135deg, ${fg} 0 1px, transparent 1px 14px)`, opacity: dark ? .35 : .18 }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 14 }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontFamily: mono, fontSize: 10, color: fg, letterSpacing: 1, textTransform: "uppercase" }}>
            <span>[ {label} ]</span>
            <span>placeholder</span>
          </div>
          {note && (
            <div style={{ fontFamily: mono, fontSize: 11, color: fg, lineHeight: 1.5, maxWidth: "70%", background: bg, padding: "6px 8px", border: `1px solid ${fg}` }}>
              ↘ {note}
            </div>
          )}
        </div>
      </div>
    );
  }

  function useIsMobile() {
    const [mob, setMob] = React.useState(() => window.innerWidth < 768);
    React.useEffect(() => {
      const fn = () => setMob(window.innerWidth < 768);
      window.addEventListener("resize", fn);
      return () => window.removeEventListener("resize", fn);
    }, []);
    return mob;
  }

  function useDirectoryImages(dir) {
    const [images, setImages] = React.useState(null);
    React.useEffect(() => {
      fetch(`${dir}/manifest.json`)
        .then((r) => r.json())
        .then((files) => {
          files.sort((a, b) => {
            const na = parseInt((a.match(/\d+/) || ["0"])[0], 10);
            const nb = parseInt((b.match(/\d+/) || ["0"])[0], 10);
            return na !== nb ? na - nb : a.localeCompare(b);
          });
          setImages(files.map((name) => ({ src: `${dir}/${name}`, label: name.replace(/\.[^.]+$/, "") })));
        })
        .catch(() => setImages([]));
    }, [dir]);
    return images;
  }

  // Lightbox — fullscreen image gallery, click outside or press Esc to close
  function Lightbox({ images, startIndex = 0, onClose }) {
    const [idx, setIdx] = React.useState(startIndex);

    React.useEffect(() => {
      const onKey = (e) => {
        if (e.key === "Escape") onClose();
        if (e.key === "ArrowRight") setIdx((i) => (i + 1) % images.length);
        if (e.key === "ArrowLeft")  setIdx((i) => (i - 1 + images.length) % images.length);
      };
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }, [images.length, onClose]);

    const img = images[idx];

    return (
      <div
        onClick={onClose}
        style={{
          position: "fixed", inset: 0, zIndex: 9999,
          background: "rgba(10,10,10,.92)",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
        }}
      >
        {/* Image */}
        <div
          onClick={(e) => e.stopPropagation()}
          style={{ position: "relative", maxWidth: "90vw", maxHeight: "85vh", display: "flex", flexDirection: "column" }}
        >
          <img
            src={img.src}
            alt={img.label || ""}
            style={{ display: "block", maxWidth: "90vw", maxHeight: "82vh", objectFit: "contain", objectPosition: "top" }}
          />
          {img.label && (
            <div style={{ fontFamily: mono, fontSize: 11, color: "rgba(255,255,255,.5)", letterSpacing: 1, textTransform: "uppercase", marginTop: 10 }}>
              [ {img.label} ]
            </div>
          )}
        </div>

        {/* Prev / Next */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); setIdx((i) => (i - 1 + images.length) % images.length); }}
              style={{ position: "fixed", left: 24, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", color: "#fff", fontSize: 28, cursor: "pointer", opacity: .7, fontFamily: mono, padding: "12px 16px" }}
            >←</button>
            <button
              onClick={(e) => { e.stopPropagation(); setIdx((i) => (i + 1) % images.length); }}
              style={{ position: "fixed", right: 24, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", color: "#fff", fontSize: 28, cursor: "pointer", opacity: .7, fontFamily: mono, padding: "12px 16px" }}
            >→</button>
          </>
        )}

        {/* Counter + close */}
        <div style={{ position: "fixed", top: 20, right: 24, display: "flex", alignItems: "center", gap: 20 }}>
          <span style={{ fontFamily: mono, fontSize: 11, color: "rgba(255,255,255,.45)", letterSpacing: 1 }}>
            {String(idx + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </span>
          <button
            onClick={onClose}
            style={{ background: "none", border: "none", color: "rgba(255,255,255,.6)", fontSize: 20, cursor: "pointer", fontFamily: mono, padding: 4 }}
          >✕</button>
        </div>

        {/* Thumbnail strip */}
        {images.length > 1 && (
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ position: "fixed", bottom: 20, display: "flex", gap: 8 }}
          >
            {images.map((im, i) => (
              <div
                key={i}
                onClick={() => setIdx(i)}
                style={{
                  width: 52, height: 36, overflow: "hidden", cursor: "pointer",
                  border: i === idx ? "2px solid #fff" : "1px solid rgba(255,255,255,.2)",
                  opacity: i === idx ? 1 : 0.5,
                }}
              >
                <img src={im.src} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Clickable image grid with built-in lightbox
  function ImageGallery({ images, ratio = "16 / 9" }) {
    const [open, setOpen] = React.useState(false);
    const [startIdx, setStartIdx] = React.useState(0);

    const open1 = (i) => { setStartIdx(i); setOpen(true); };

    return (
      <>
        {images.map((img, i) => (
          <div
            key={i}
            onClick={() => open1(i)}
            style={{
              position: "relative", width: "100%", aspectRatio: ratio,
              overflow: "hidden", cursor: "zoom-in", border: `1px solid ${ink}`,
            }}
          >
            <img
              src={img.src}
              alt={img.label || ""}
              style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
            />
            <div style={{
              position: "absolute", left: 12, top: 12,
              fontFamily: mono, fontSize: 10, color: "#fff",
              letterSpacing: 1, textTransform: "uppercase",
              background: "rgba(0,0,0,.55)", padding: "3px 7px",
            }}>
              [ {img.label || `${String(i + 1).padStart(2, "0")}`} ]
            </div>
          </div>
        ))}
        {open && <Lightbox images={images} startIndex={startIdx} onClose={() => setOpen(false)} />}
      </>
    );
  }

  // Gallery that auto-discovers images from a server directory.
  // limit: how many thumbnails to show in the grid (default all).
  //        Clicking any tile opens the full lightbox over all images.
  function DynamicGallery({ dir, ratio = "16 / 9", limit, offset = 0 }) {
    const images = useDirectoryImages(dir);
    const [open, setOpen] = React.useState(false);
    const [startIdx, setStartIdx] = React.useState(0);

    if (images === null) return (
      <div style={{ fontFamily: mono, fontSize: 11, color: muted, padding: "20px 0", letterSpacing: 1 }}>
        Loading images…
      </div>
    );
    if (images.length === 0) return (
      <Placeholder ratio={ratio} label={dir} note="No images found in folder." />
    );

    const sliced = images.slice(offset);
    const visible = limit ? sliced.slice(0, limit) : sliced;

    return (
      <>
        <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
        {visible.map((img, i) => (
          <div
            key={i}
            onClick={() => { setStartIdx(i); setOpen(true); }}
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              width: "100%",
              ...(ratio !== "auto" && { aspectRatio: ratio, overflow: "hidden" }),
              cursor: "zoom-in",
              border: `1px solid ${ink}`,
              background: paper,
            }}
          >
            <img
              src={img.src}
              alt={img.label || ""}
              style={ratio !== "auto"
                ? { display: "block", width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }
                : { display: "block", maxWidth: "100%", width: "auto", height: "auto" }
              }
            />
          </div>
        ))}
        </div>
        {open && <Lightbox images={images} startIndex={startIdx} onClose={() => setOpen(false)} />}
      </>
    );
  }

  // Page header — consistent across all pages
  function Masthead({ active, page, nextHref, nextLabel }) {
    const mob = useIsMobile();
    return (
      <div style={{ padding: mob ? "16px 20px" : "26px 56px", borderBottom: `1px solid ${rule}`, fontSize: 13 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <a href="#/" style={{ color: ink, textDecoration: "none", fontWeight: 500 }}>Icarus Lima</a>
            {!mob && <span style={{ color: muted }}>· Folio</span>}
          </div>
          {!mob && (
            <div style={{ color: muted }}>
              {page || "Digital Product Designer (UX-UI) · Sydney, AU"}
            </div>
          )}
          <nav style={{ display: "flex", alignItems: "center", gap: mob ? 16 : 22 }}>
            <a href="#/" style={{ color: active === "index" ? accent : ink, textDecoration: "none" }}>Index</a>
            {!mob && (nextHref
              ? <a href={nextHref} style={{ color: ink, textDecoration: "none" }}>Next · {nextLabel} →</a>
              : <a href="#/work/shippit" style={{ color: active === "case" ? accent : ink, textDecoration: "none" }}>Case study</a>
            )}
            {!mob && <a href="#contact" style={{ color: ink, textDecoration: "none" }}>Contact</a>}
            <a href="pdf/icarus_LIMA_CV2026.pdf" download style={{ color: accent, textDecoration: "none" }}>CV ↓</a>
          </nav>
        </div>
      </div>
    );
  }

  function Footer({ no, of }) {
    const mob = useIsMobile();
    return (
      <div style={{ display: "flex", flexDirection: mob ? "column" : "row", justifyContent: "space-between", gap: mob ? 4 : 0, padding: mob ? "16px 20px" : "16px 56px", borderTop: `1px solid ${rule}`, fontSize: 12, color: muted }}>
        <div>© Icarus Lima · 2026</div>
        {!mob && <div>Set in Helvetica Neue & JetBrains Mono.</div>}
        <div>{no && of ? `${no} / ${of}` : "End of folio"} · ◼</div>
      </div>
    );
  }

  return { sans, mono, accent, ink, paper, rule, muted, hairline, Placeholder, Lightbox, ImageGallery, DynamicGallery, Masthead, Footer, useIsMobile };
})();
