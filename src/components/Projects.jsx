import { useState } from "react";
import { projects } from "../data/resume";

function ProjectCard({ emoji, gradient, badge, title, description, stack, github }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "var(--card)",
        border: `1px solid ${hovered ? "var(--accent)" : "var(--border)"}`,
        borderRadius: 20,
        overflow: "hidden",
        transition: "border-color 0.25s, transform 0.25s",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
      }}
    >
      {/* Thumbnail */}
      <div
        style={{
          height: 160,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "3rem",
          background: gradient,
        }}
      >
        {emoji}
      </div>

      {/* Body */}
      <div style={{ padding: "1.5rem" }}>
        <span
          style={{
            display: "inline-block",
            background: "rgba(56,189,248,0.1)",
            color: "var(--accent3)",
            padding: "0.2rem 0.75rem",
            borderRadius: "100px",
            fontSize: "0.72rem",
            fontFamily: "var(--mono)",
            border: "1px solid rgba(56,189,248,0.2)",
            marginBottom: "0.75rem",
          }}
        >
          {badge}
        </span>

        <div
          style={{
            fontFamily: "var(--font)",
            fontWeight: 700,
            fontSize: "1.1rem",
            marginBottom: "0.5rem",
          }}
        >
          {title}
        </div>

        <p
          style={{
            fontSize: "0.85rem",
            color: "var(--text2)",
            lineHeight: 1.65,
          }}
        >
          {description}
        </p>

        {/* Stack tags */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.4rem",
            marginTop: "1rem",
          }}
        >
          {stack.map((t) => (
            <span
              key={t}
              style={{
                background: "rgba(124,106,255,0.1)",
                color: "var(--accent2)",
                padding: "0.2rem 0.65rem",
                borderRadius: "100px",
                fontSize: "0.72rem",
                fontFamily: "var(--mono)",
                border: "1px solid rgba(124,106,255,0.2)",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* GitHub link */}
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            marginTop: "1.25rem",
            color: "var(--text3)",
            fontSize: "0.8rem",
            textDecoration: "none",
            fontFamily: "var(--mono)",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.target.style.color = "var(--accent2)")}
          onMouseLeave={(e) => (e.target.style.color = "var(--text3)")}
        >
          🐙 View on GitHub →
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "clamp(3rem, 5vw, 5rem) clamp(1.25rem, 5vw, 2.5rem)" }}>
      <div
        style={{
          fontFamily: "var(--mono)",
          fontSize: "0.75rem",
          color: "var(--accent2)",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          marginBottom: "0.75rem",
        }}
      >
        What I've built
      </div>
      <h2
        style={{
          fontFamily: "var(--font)",
          fontWeight: 700,
          fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
          letterSpacing: "-0.02em",
          marginBottom: "1rem",
        }}
      >
        Projects
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
          marginTop: "2.5rem",
        }}
      >
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
