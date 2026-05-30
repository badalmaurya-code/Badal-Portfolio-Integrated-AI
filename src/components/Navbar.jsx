import { useEffect, useState } from "react";
import { personal } from "../data/resume";

export default function Navbar() {
  const [scrollPct, setScrollPct] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const pct =
        (window.scrollY / (el.scrollHeight - window.innerHeight)) * 100;
      setScrollPct(Math.min(100, pct));
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <style>{`
        @media (min-width: 768px) {
          .navbar-mobile-btn { display: none !important; }
          .navbar-desktop-menu { display: flex !important; }
          .navbar-desktop-cta { display: block !important; }
        }
        @media (max-width: 767px) {
          .navbar-mobile-btn { display: flex !important; }
          .navbar-desktop-menu { display: none !important; }
          .navbar-desktop-cta { display: none !important; }
        }
      `}</style>

      {/* Scroll progress bar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "2px",
          width: `${scrollPct}%`,
          background: "linear-gradient(90deg, var(--accent), var(--accent3))",
          zIndex: 200,
          transition: "width 0.1s linear",
        }}
      />

      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem max(1.25rem, 5vw)",
          background: "rgba(10,10,15,0.85)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font)",
            fontWeight: 800,
            fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
            letterSpacing: "-0.02em",
            background: "linear-gradient(135deg,#fff 0%,var(--accent2) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {personal.name}
        </span>

        {/* Desktop Menu */}
        <ul
          className="navbar-desktop-menu"
          style={{
            gap: "2rem",
            listStyle: "none",
          }}
        >
          {["skills", "projects", "ai", "contact"].map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                style={{
                  color: "var(--text2)",
                  textDecoration: "none",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "var(--text)")}
                onMouseLeave={(e) => (e.target.style.color = "var(--text2)")}
              >
                {id === "ai" ? "Ask AI" : id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${personal.email}`}
          className="navbar-desktop-cta"
          style={{
            background: "var(--accent)",
            color: "#fff",
            padding: "0.5rem 1.2rem",
            borderRadius: "100px",
            fontSize: "0.82rem",
            fontWeight: 600,
            textDecoration: "none",
            letterSpacing: "0.02em",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.target.style.opacity = "0.85")}
          onMouseLeave={(e) => (e.target.style.opacity = "1")}
        >
          Hire Me
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="navbar-mobile-btn"
          style={{
            flexDirection: "column",
            gap: "5px",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            zIndex: 101,
          }}
        >
          <div
            style={{
              width: 24,
              height: 2,
              background: "var(--text)",
              borderRadius: 1,
              transition: "transform 0.3s, opacity 0.3s",
              transform: mobileMenuOpen ? "rotate(45deg) translateY(10px)" : "none",
            }}
          />
          <div
            style={{
              width: 24,
              height: 2,
              background: "var(--text)",
              borderRadius: 1,
              transition: "opacity 0.3s",
              opacity: mobileMenuOpen ? 0 : 1,
            }}
          />
          <div
            style={{
              width: 24,
              height: 2,
              background: "var(--text)",
              borderRadius: 1,
              transition: "transform 0.3s, opacity 0.3s",
              transform: mobileMenuOpen ? "rotate(-45deg) translateY(-10px)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(10,10,15,0.95)",
            backdropFilter: "blur(16px)",
            zIndex: 99,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
            paddingTop: "80px",
            animation: "fadeUp 0.3s ease forwards",
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              textAlign: "center",
            }}
          >
            {["skills", "projects", "ai", "contact"].map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    color: "var(--text)",
                    textDecoration: "none",
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "var(--accent2)")}
                  onMouseLeave={(e) => (e.target.style.color = "var(--text)")}
                >
                  {id === "ai" ? "Ask AI" : id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`mailto:${personal.email}`}
            onClick={() => setMobileMenuOpen(false)}
            style={{
              background: "var(--accent)",
              color: "#fff",
              padding: "0.75rem 2rem",
              borderRadius: "100px",
              fontSize: "1rem",
              fontWeight: 600,
              textDecoration: "none",
              letterSpacing: "0.02em",
              marginTop: "1rem",
            }}
          >
            Hire Me
          </a>
        </div>
      )}
    </>
  );
}
