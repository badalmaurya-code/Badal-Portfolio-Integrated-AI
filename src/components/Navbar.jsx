import { useEffect, useState } from "react";
import { personal } from "../data/resume";

export default function Navbar() {
  const [scrollPct, setScrollPct] = useState(0);

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

  return (
    <>
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
          padding: "1rem 2.5rem",
          background: "rgba(10,10,15,0.85)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font)",
            fontWeight: 800,
            fontSize: "1.1rem",
            letterSpacing: "-0.02em",
            background: "linear-gradient(135deg,#fff 0%,var(--accent2) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {personal.name}
        </span>

        <ul
          style={{
            display: "flex",
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
      </nav>
    </>
  );
}
