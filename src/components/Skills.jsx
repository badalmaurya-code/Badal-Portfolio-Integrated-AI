import { useState } from "react";
import { skills } from "../data/resume";

function SkillCard({ icon, color, name, tags }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "var(--card)",
        border: `1px solid ${hovered ? "var(--accent)" : "var(--border)"}`,
        borderRadius: 16,
        padding: "1.5rem",
        transition: "border-color 0.25s, transform 0.25s",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 10,
          background: color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.3rem",
          marginBottom: "1rem",
        }}
      >
        {icon}
      </div>
      <div
        style={{
          fontFamily: "var(--font)",
          fontWeight: 600,
          fontSize: "0.95rem",
          marginBottom: "0.3rem",
        }}
      >
        {name}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "0.75rem" }}>
        {tags.map((t) => (
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
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      style={{ padding: "5rem 2.5rem", background: "var(--bg2)" }}
    >
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
        What I know
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
        Technical Skills
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1rem",
          marginTop: "2.5rem",
        }}
      >
        {skills.map((s) => (
          <SkillCard key={s.name} {...s} />
        ))}
      </div>
    </section>
  );
}
