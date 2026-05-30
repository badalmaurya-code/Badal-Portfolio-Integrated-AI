import { useState } from "react";
import { personal } from "../data/resume";

const links = [
  { icon: "📧", label: personal.email, href: `mailto:${personal.email}` },
  { icon: "🐙", label: "github.com/badalmaurya-code", href: personal.github },
  { icon: "💼", label: "LinkedIn Profile", href: personal.linkedin },
  { icon: "📞", label: personal.phone, href: `tel:${personal.phone}` },
];

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "5rem 2.5rem",
        background: "var(--bg2)",
        textAlign: "center",
      }}
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
        Get in touch
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
        Let's Build Something
      </h2>
      <p
        style={{
          color: "var(--text2)",
          fontSize: "0.95rem",
          lineHeight: 1.7,
          maxWidth: 500,
          margin: "0 auto",
        }}
      >
        Open to frontend roles, internships, and exciting projects. Drop a message and let's connect!
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "1rem",
          marginTop: "2.5rem",
        }}
      >
        {links.map((l) => (
          <ContactLink key={l.label} {...l} />
        ))}
      </div>
    </section>
  );
}

function ContactLink({ icon, label, href }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.65rem",
        background: "var(--card)",
        border: `1px solid ${hovered ? "var(--accent)" : "var(--border)"}`,
        padding: "0.85rem 1.5rem",
        borderRadius: 14,
        color: hovered ? "var(--text)" : "var(--text2)",
        textDecoration: "none",
        fontSize: "0.875rem",
        fontWeight: 500,
        transition: "all 0.2s",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
      }}
    >
      <span style={{ fontSize: "1.2rem" }}>{icon}</span>
      {label}
    </a>
  );
}
