import { useState } from "react";
import { education } from "../data/resume";

export default function Education() {
  return (
    <section id="education" style={{ padding: "5rem 2.5rem" }}>
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
        Background
      </div>
      <h2
        style={{
          fontFamily: "var(--font)",
          fontWeight: 700,
          fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
          letterSpacing: "-0.02em",
          marginBottom: "2.5rem",
        }}
      >
        Education
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        {education.map((e) => (
          <EduItem key={e.title} {...e} />
        ))}
      </div>
    </section>
  );
}

function EduItem({ icon, title, school, year }) {
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
        display: "flex",
        gap: "1.25rem",
        alignItems: "flex-start",
        transition: "border-color 0.2s",
      }}
    >
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: 12,
          background: "rgba(124,106,255,0.12)",
          border: "1px solid rgba(124,106,255,0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          fontSize: "1.3rem",
        }}
      >
        {icon}
      </div>
      <div>
        <div style={{ fontFamily: "var(--font)", fontWeight: 600, fontSize: "1rem" }}>
          {title}
        </div>
        <div style={{ fontSize: "0.85rem", color: "var(--text2)", marginTop: "0.25rem" }}>
          {school}
        </div>
        <div
          style={{
            fontFamily: "var(--mono)",
            fontSize: "0.75rem",
            color: "var(--accent2)",
            marginTop: "0.4rem",
          }}
        >
          {year}
        </div>
      </div>
    </div>
  );
}
